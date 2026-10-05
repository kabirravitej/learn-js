/**
 * Optional local coaching via Ollama + Qwen2.5-Coder (Apache 2.0).
 * Default model: qwen2.5-coder:1.5b (~1GB). Hard project cap: 30GB — never pull larger packs here.
 * Falls back to varied template lines if Ollama is offline.
 */
(function () {
  const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";
  // Prefer coder; fall back to tiny base 1.5b already on disk. Stay under 30GB — never 14B/32B.
  const MODEL_CANDIDATES = ["qwen2.5-coder:1.5b", "qwen2.5:1.5b"];
  const TIMEOUT_MS = 12000;
  let activeModel = MODEL_CANDIDATES[0];

  const FALLBACK_HINTS = [
    "Hint from Milo: pause on the key word in the question — that usually points at the right choice.",
    "Hint from Milo: compare your pick to the teach tip above; one detail usually gives it away.",
    "Hint from Milo: say the correct idea out loud once, then pick again next time.",
    "Hint from Milo: wrong options often sound close — hunt for the exact match from the lesson.",
    "Hint from Milo: skim the question again without rushing; the answer is in what we just covered.",
  ];

  const FALLBACK_EXPLAINS = [
    "“{chosen}” misses the mark. The lesson wanted “{correct}” — that’s the idea to lock in.",
    "Close energy, wrong target: you went with “{chosen}”, but “{correct}” is what this step checks.",
    "Not quite. “{chosen}” doesn’t match the fact; “{correct}” does. Hold onto that for next time.",
    "You landed on “{chosen}”. Flip it to “{correct}” and you’ve got the concept.",
    "Milo’s take: “{correct}” is the clean answer here. “{chosen}” was a common mix-up.",
  ];

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function fill(template, chosen, correct) {
    return template.split("{chosen}").join(chosen).split("{correct}").join(correct);
  }

  function cleanLine(text) {
    return String(text || "")
      .replace(/\s+/g, " ")
      .replace(/^["'`]+|["'`]+$/g, "")
      .trim()
      .slice(0, 280);
  }

  async function askOllamaOnce(model, prompt, signal, options) {
    const res = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        prompt,
        stream: false,
        options: options || { temperature: 0.85, num_predict: 80 },
      }),
      signal,
    });
    if (!res.ok) return null;
    const data = await res.json();
    return cleanLine(data.response);
  }

  async function askOllama(prompt, options) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const order = [activeModel, ...MODEL_CANDIDATES.filter((m) => m !== activeModel)];
      for (const model of order) {
        try {
          const text = await askOllamaOnce(model, prompt, controller.signal, options);
          if (text) {
            activeModel = model;
            return text;
          }
        } catch {
          // try next candidate
        }
      }
      return null;
    } catch {
      return null;
    } finally {
      clearTimeout(timer);
    }
  }

  function acceptedList(correctLabel, accepted) {
    const list = Array.isArray(accepted) ? accepted.slice() : [];
    if (correctLabel && !list.includes(correctLabel)) list.unshift(correctLabel);
    return list.filter(Boolean);
  }

  /**
   * Second opinion: only treat as wrong if Qwen agrees the meaning differs.
   * Offline → trust the local grader (isWrong stays true).
   */
  async function confirmActuallyWrong({ question, chosenLabel, correctLabel, accepted }) {
    const acceptedAnswers = acceptedList(correctLabel, accepted);
    if (!chosenLabel || !acceptedAnswers.length) {
      return { isWrong: true, source: "local" };
    }

    const prompt = [
      "You grade beginner JavaScript answers.",
      "Compare the learner answer to the accepted answer(s).",
      "Mark CORRECT if it means the same thing (paraphrase, typo, filler words, spoken wording, or equivalent code/idea).",
      "Mark WRONG only if the meaning is genuinely different or factually incorrect.",
      "Reply with exactly one word on the first line: CORRECT or WRONG.",
      `Question: ${question || "JavaScript lesson question"}`,
      `Learner answer: ${chosenLabel}`,
      `Accepted answer(s): ${acceptedAnswers.join(" | ")}`,
    ].join("\n");

    const raw = await askOllama(prompt, { temperature: 0.1, num_predict: 16 });
    if (!raw) {
      return { isWrong: true, source: "local" };
    }

    const line = raw.split(/\n/)[0].toUpperCase();
    const token = line.replace(/[^A-Z]/g, " ").trim().split(/\s+/)[0] || "";
    if (token === "CORRECT" || line.startsWith("CORRECT")) {
      return { isWrong: false, source: "qwen", raw };
    }
    return { isWrong: true, source: "qwen", raw };
  }

  function fallbackHint(step, correctLabel) {
    const pool = [...FALLBACK_HINTS];
    if (step && step.hint) pool.push(step.hint);
    if (correctLabel) {
      pool.push(`Hint from Milo: keep “${correctLabel}” in mind — that idea matches the lesson.`);
    }
    return pick(pool);
  }

  function fallbackExplain(chosenLabel, correctLabel, step) {
    // Prefer rotating copy so misses don’t feel identical when Ollama is offline.
    const pool = FALLBACK_EXPLAINS.map((t) => fill(t, chosenLabel, correctLabel));
    if (step && step.explain) {
      pool.push(fill(step.explain, chosenLabel, correctLabel));
    }
    return pick(pool);
  }

  async function coachWrongAnswer({
    question,
    chosenLabel,
    correctLabel,
    step,
    accepted,
    allowOverturn = true,
  }) {
    if (allowOverturn) {
      const check = await confirmActuallyWrong({
        question,
        chosenLabel,
        correctLabel,
        accepted: accepted || step?.accept,
      });

      if (!check.isWrong) {
        return {
          actuallyCorrect: true,
          hint: "Nice job wording it! you really got creative!",
          explain: `Nice job wording it! you really got creative! “${chosenLabel}” still matches “${correctLabel}”.`,
          source: check.source,
        };
      }
    }

    const baseHint = fallbackHint(step, correctLabel);
    const baseExplain = fallbackExplain(chosenLabel, correctLabel, step);

    const prompt = [
      "You are Milo, a friendly male coding coach for absolute beginners learning JavaScript.",
      "The learner is genuinely wrong. Write TWO short lines.",
      "Line 1: start with 'Hint from Milo:' then one coaching tip (max 22 words).",
      "Line 2: one explanation that mentions what they chose and what was correct (max 28 words).",
      "No markdown, no quotes around the whole answer, no code fences.",
      `Question: ${question || "JavaScript lesson question"}`,
      `Learner chose: ${chosenLabel}`,
      `Correct answer: ${correctLabel}`,
      "Output exactly two lines.",
    ].join("\n");

    const raw = await askOllama(prompt);
    if (!raw) {
      return { actuallyCorrect: false, hint: baseHint, explain: baseExplain, source: "fallback" };
    }

    const lines = raw
      .split(/\n+/)
      .map((l) => cleanLine(l))
      .filter(Boolean);

    let hint = lines.find((l) => /hint from milo/i.test(l)) || lines[0] || baseHint;
    let explain =
      lines.find((l) => l !== hint && !/^hint from milo/i.test(l)) || lines[1] || baseExplain;

    if (!/^hint from milo/i.test(hint)) {
      hint = `Hint from Milo: ${hint.replace(/^hint:\s*/i, "")}`;
    }
    if (!explain || explain === hint) explain = baseExplain;

    return { actuallyCorrect: false, hint, explain, source: "qwen" };
  }

  async function workspaceChat({ message, html, css, js }) {
    const prompt = [
      "You are Milo, a friendly male coding coach in a beginner JavaScript workspace.",
      "Answer in 1–3 short spoken sentences. No markdown, no code fences unless a tiny snippet is essential.",
      "Help debug, explain, or suggest the next step. Keep it encouraging and clear.",
      `Learner's message: ${message}`,
      "Current HTML:",
      (html || "").slice(0, 1200),
      "Current CSS:",
      (css || "").slice(0, 800),
      "Current JavaScript:",
      (js || "").slice(0, 1600),
    ].join("\n");

    const raw = await askOllama(prompt, { temperature: 0.6, num_predict: 120 });
    if (raw) return { text: cleanLine(raw).slice(0, 420), source: "qwen" };

    return {
      text: "I couldn't reach the local coach model. Check your code for typos, run it, and ask again once Ollama is open.",
      source: "fallback",
    };
  }

  window.LearnJSMiloAI = {
    get MODEL() {
      return activeModel;
    },
    MODEL_CANDIDATES,
    confirmActuallyWrong,
    coachWrongAnswer,
    workspaceChat,
    fallbackHint,
    fallbackExplain,
  };
})();
