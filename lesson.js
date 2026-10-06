const curriculum = window.LEARN_JS_CURRICULUM;
const progress = window.LearnJSProgress;

const RESULT_PHRASES = {
  best: ["Excellent!", "Perfect!", "Mind-Blowing!", "Wow!"],
  above: ["Nice.", "Good Job", "Nice Effort"],
  decent: ["Pretty good", "Okay", "Acceptable"],
  below: ["Good enough", "Sure, It'll work", "Try better next time"],
  worst: ["Ummm, Ok, Try better next time", "Practice Makes Perfect, so try that"],
};

function findNode(id) {
  for (const unit of curriculum.units) {
    const node = unit.nodes.find((n) => n.id === id);
    if (node) return { unit, node };
  }
  return null;
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\w\s=]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function answersMatch(spoken, accepted) {
  const said = normalize(spoken);
  return accepted.some((a) => {
    const target = normalize(a);
    return said === target || said.includes(target) || target.includes(said);
  });
}

function icon(name, extraClass = "") {
  return `<span class="material-symbols-outlined ${extraClass}" aria-hidden="true">${name}</span>`;
}

let miloVoice = null;
let voicesReady = false;

const MALE_VOICE_PREFERENCES = [
  // More natural / premium voices first (when installed)
  /daniel/i,
  /aaron/i,
  /reed/i,
  /eddy/i,
  /rocko/i,
  /gordon/i,
  /arthur/i,
  /rishi/i,
  /google uk english male/i,
  /microsoft david/i,
  /microsoft mark/i,
  /microsoft guy/i,
  /alex(?!a)/i,
  /fred/i,
  /male/i,
];

const FEMALE_VOICE_BLOCK = /samantha|karen|moira|tessa|veena|fiona|victoria|zira|susan|hazel|female|siri|jenny|aria|sara|sonia/i;

function scoreMiloVoice(voice) {
  const label = `${voice.name} ${voice.lang}`;
  if (FEMALE_VOICE_BLOCK.test(label)) return -100;
  let score = 0;
  if (/^en(-|_)/i.test(voice.lang) || /^en$/i.test(voice.lang)) score += 20;
  if (/en-GB/i.test(voice.lang)) score += 8;
  if (/en-US/i.test(voice.lang)) score += 6;
  // Prefer local/enhanced voices over thin robotic network defaults when possible
  if (voice.localService) score += 12;
  MALE_VOICE_PREFERENCES.forEach((re, index) => {
    if (re.test(voice.name)) score += 40 - index;
  });
  return score;
}

function pickMiloVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  if (!voices.length) return null;
  const ranked = [...voices].sort((a, b) => scoreMiloVoice(b) - scoreMiloVoice(a));
  const best = ranked[0];
  return best && scoreMiloVoice(best) > 0 ? best : ranked.find((v) => /^en/i.test(v.lang)) || null;
}

function refreshMiloVoice() {
  miloVoice = pickMiloVoice();
  voicesReady = Boolean(miloVoice);
}

if (typeof window !== "undefined" && window.speechSynthesis) {
  refreshMiloVoice();
  window.speechSynthesis.addEventListener("voiceschanged", refreshMiloVoice);
}

/** Natural male voice when available (web Speech API — browsers can't run macOS `say`). */
function speak(text) {
  if (!window.speechSynthesis || !text) return;
  window.speechSynthesis.cancel();
  if (!miloVoice) refreshMiloVoice();

  const utter = new SpeechSynthesisUtterance(text);
  if (miloVoice) utter.voice = miloVoice;
  utter.lang = miloVoice?.lang || "en-GB";
  // Slightly slower + lower pitch reads more natural / less “robot toy”
  utter.rate = 0.96;
  utter.pitch = 0.92;
  utter.volume = 1;
  window.speechSynthesis.speak(utter);
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function tierFromPercent(pct) {
  if (pct >= 90) return "best";
  if (pct >= 75) return "above";
  if (pct >= 55) return "decent";
  if (pct >= 35) return "below";
  return "worst";
}

function formatDuration(ms) {
  const totalSec = Math.max(1, Math.round(ms / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
}

function createProgress(total) {
  const wrap = document.createElement("div");
  wrap.className = "step-progress anim-fade-up";
  wrap.innerHTML = `
    <div class="step-progress-bar"><span class="step-progress-fill"></span></div>
    <p class="step-progress-label">${icon("timeline")} Step 1 / ${total}</p>
  `;
  return wrap;
}

function updateProgress(wrap, index, total) {
  const fill = wrap.querySelector(".step-progress-fill");
  const label = wrap.querySelector(".step-progress-label");
  const pct = Math.round(((index + 1) / total) * 100);
  fill.style.width = `${pct}%`;
  label.innerHTML = `${icon("timeline")} Step ${Math.min(index + 1, total)} / ${total}`;
}

function getHint(step) {
  if (step.hint) return step.hint;
  if (step.type === "code") {
    return "Hint from Milo: run a small console.log and check the Output box.";
  }
  if (step.type === "tf") {
    return step.answer
      ? "Hint from Milo: think about whether this statement matches what we just learned — it's true!"
      : "Hint from Milo: this one is a trap — the statement is false.";
  }
  if (step.choices && typeof step.answer === "number") {
    return `Hint from Milo: look closer at “${step.choices[step.answer]}” — that idea matches the lesson.`;
  }
  if (step.accept) {
    return `Hint from Milo: the answer sounds like “${step.accept[0]}”.`;
  }
  return "Hint from Milo: re-read the question slowly, then pick again.";
}

function getExplanation(step, chosenLabel, correctLabel) {
  if (step.explain) {
    return step.explain
      .split("{chosen}")
      .join(chosenLabel)
      .split("{correct}")
      .join(correctLabel);
  }
  return `You chose “${chosenLabel}”, but the correct idea is “${correctLabel}”. ${getHint(step).replace("Hint from Milo: ", "")}`;
}

function showMiloCoach(message, { speakText } = {}) {
  let panel = document.querySelector(".milo-coach");
  if (!panel) {
    panel = document.createElement("aside");
    panel.className = "milo-coach";
    panel.innerHTML = `
      <img src="milo.png" alt="Milo" width="676" height="369" />
      <div class="milo-coach-bubble">
        <p class="milo-coach-label">${icon("record_voice_over")} Milo</p>
        <p class="milo-coach-text"></p>
      </div>
    `;
    document.body.appendChild(panel);
  }
  panel.querySelector(".milo-coach-text").textContent = message;
  panel.classList.remove("is-out");
  panel.classList.add("is-in");
  if (speakText !== false) speak(message);
  return panel;
}

function hideMiloCoach() {
  const panel = document.querySelector(".milo-coach");
  if (!panel) return;
  panel.classList.remove("is-in");
  panel.classList.add("is-out");
}

function renderLesson(unit, node) {
  document.getElementById("lesson-unit").textContent = `${unit.section} · ${unit.title}`;
  document.getElementById("lesson-type").innerHTML = `${icon(typeIcon(node.type))} ${node.type}`;
  document.getElementById("lesson-title").textContent = node.title;
  document.getElementById("lesson-minutes").innerHTML = `${icon("schedule")} ${node.minutes || 5}–8 min`;

  const body = document.getElementById("lesson-body");
  body.innerHTML = "";

  const session = {
    startedAt: Date.now(),
    graded: 0,
    correct: 0,
    node,
  };

  if (node.type === "practice") {
    renderPractice(node, body, session);
    return;
  }

  if (node.type === "chest") {
    renderChest(node, body);
    return;
  }

  renderSteps(node, body, session);
}

function typeIcon(type) {
  return (
    {
      concept: "lightbulb",
      memory: "psychology",
      practice: "quiz",
      chest: "inventory_2",
      overview: "flag",
    }[type] || "school"
  );
}

function fallbackSteps(node) {
  const steps = [];
  if (node.summary) steps.push({ type: "teach", text: node.summary });
  if (node.knowledgeCard) {
    steps.push({ type: "teach", text: `Knowledge card: ${node.knowledgeCard}` });
  }
  steps.push({
    type: "tf",
    prompt: "Ready to mark this lesson complete?",
    answer: true,
    hint: "Hint from Milo: you’re ready — pick True!",
  });
  return steps;
}

async function runLearnerCode(code) {
  const logs = [];
  const fakeConsole = {
    log: (...args) => {
      logs.push(
        args
          .map((v) => {
            if (typeof v === "string") return v;
            if (typeof v === "undefined") return "undefined";
            try {
              return JSON.stringify(v);
            } catch {
              return String(v);
            }
          })
          .join(" ")
      );
    },
    info: (...args) => fakeConsole.log(...args),
    warn: (...args) => fakeConsole.log(...args),
    error: (...args) => fakeConsole.log(...args),
  };
  try {
    // AsyncFunction so await works; microtasks/timers can settle before we grade.
    const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
    // eslint-disable-next-line no-new-func
    const fn = new AsyncFunction("console", `"use strict";\n${code}`);
    await fn(fakeConsole);
    await Promise.resolve();
    if (/\bsetTimeout\b|\bsetInterval\b/.test(String(code || ""))) {
      await new Promise((r) => window.setTimeout(r, 40));
    }
    return { ok: true, logs, error: null };
  } catch (err) {
    return { ok: false, logs, error: err?.message || String(err) };
  }
}

function codePasses(step, code, result) {
  if (!result.ok) return false;
  if (Array.isArray(step.mustInclude)) {
    const src = String(code || "");
    if (!step.mustInclude.every((piece) => src.includes(piece))) return false;
  }
  const expected = step.expectLogs || [];
  if (!expected.length) return result.logs.length > 0;
  // Expected lines must appear in order (allowing extra logs in between)
  let cursor = 0;
  for (const line of result.logs) {
    if (cursor < expected.length && String(line) === String(expected[cursor])) {
      cursor += 1;
    }
  }
  return cursor === expected.length;
}

function renderCodeStep(step, stage, feedback, session, onPass) {
  const prompt = document.createElement("p");
  prompt.className = "flash-prompt";
  prompt.textContent = step.prompt;

  const editor = document.createElement("textarea");
  editor.className = "code-editor";
  editor.spellcheck = false;
  editor.setAttribute("aria-label", "JavaScript editor");
  editor.value = step.starter || "";

  const out = document.createElement("pre");
  out.className = "code-output";
  out.textContent = "Output will show here after you Run.";

  const actions = document.createElement("div");
  actions.className = "code-actions";

  const runBtn = document.createElement("button");
  runBtn.type = "button";
  runBtn.className = "cta cta-secondary select-submit";
  runBtn.innerHTML = `${icon("play_arrow")} Run`;

  const selectBtn = document.createElement("button");
  selectBtn.type = "button";
  selectBtn.className = "cta select-submit";
  selectBtn.disabled = true;
  selectBtn.innerHTML = `${icon("check_circle")} SELECT`;

  let lastPass = false;

  runBtn.addEventListener("click", async () => {
    runBtn.disabled = true;
    const result = await runLearnerCode(editor.value);
    runBtn.disabled = false;
    out.replaceChildren();
    if (result.error) {
      const err = document.createElement("span");
      err.className = "code-error";
      err.textContent = `Error: ${result.error}`;
      out.appendChild(err);
      lastPass = false;
      selectBtn.disabled = true;
      return;
    }
    out.textContent = result.logs.length ? result.logs.join("\n") : "(no output)";
    lastPass = codePasses(step, editor.value, result);
    selectBtn.disabled = !lastPass;
    if (lastPass) {
      const ok = document.createElement("span");
      ok.className = "code-ok";
      ok.textContent = "\nLooks good — press SELECT.";
      out.appendChild(ok);
    }
  });

  selectBtn.addEventListener("click", async () => {
    if (!lastPass || selectBtn.disabled) return;
    selectBtn.disabled = true;
    runBtn.disabled = true;
    editor.readOnly = true;
    session.graded += 1;
    session.correct += 1;
    feedback.className = "step-feedback-panel is-good anim-fade-up";
    feedback.innerHTML = `<p class="step-feedback">${icon("celebration")} Correct!</p>`;
    speak("Correct!");
    window.setTimeout(onPass, 700);
  });

  const tip = document.createElement("p");
  tip.className = "lesson-copy code-tip";
  tip.textContent = "Write real JS. Run it. When the output matches, press SELECT.";

  actions.append(runBtn, selectBtn);
  stage.append(prompt, tip, editor, out, actions);

  // Wrong-path help: if they SELECT without passing — button stays disabled.
  // Offer Milo hint button
  const hintBtn = document.createElement("button");
  hintBtn.type = "button";
  hintBtn.className = "text-btn";
  hintBtn.innerHTML = `${icon("lightbulb")} Hint from Milo`;
  hintBtn.addEventListener("click", () => {
    const hint = step.hint || getHint(step);
    showMiloCoach(hint);
  });
  stage.appendChild(hintBtn);
}

function renderSteps(node, body, session) {
  const steps = node.steps && node.steps.length ? node.steps : fallbackSteps(node);
  let index = 0;
  let selectedIndex = null;

  const progressUi = createProgress(steps.length);
  const stage = document.createElement("div");
  stage.className = "step-stage";
  const feedback = document.createElement("div");
  feedback.className = "step-feedback-panel";

  body.append(progressUi, stage, feedback);

  function advance() {
    hideMiloCoach();
    window.speechSynthesis?.cancel();
    selectedIndex = null;
    feedback.innerHTML = "";
    feedback.className = "step-feedback-panel";
    index += 1;
    if (index >= steps.length) {
      showResults(session);
      return;
    }
    showStep();
  }

  function showStep() {
    const step = steps[index];
    updateProgress(progressUi, index, steps.length);
    stage.innerHTML = "";
    stage.classList.remove("anim-fade-up");
    void stage.offsetWidth;
    stage.classList.add("anim-fade-up");
    feedback.innerHTML = "";
    selectedIndex = null;

    if (step.type === "teach") {
      const p = document.createElement("p");
      p.className = "lesson-copy";
      p.textContent = step.text;
      const next = document.createElement("button");
      next.type = "button";
      next.className = "cta anim-pop";
      next.innerHTML = `${icon("arrow_forward")} Continue`;
      next.addEventListener("click", advance);
      stage.append(p, next);
      return;
    }

    if (step.type === "code") {
      renderCodeStep(step, stage, feedback, session, advance);
      return;
    }

    // Graded question
    const prompt = document.createElement("p");
    prompt.className = "flash-prompt";
    prompt.textContent = step.prompt;
    stage.appendChild(prompt);

    const row = document.createElement("div");
    row.className = "choice-grid";

    const choices =
      step.type === "tf"
        ? ["True", "False"]
        : step.choices || [];

    choices.forEach((choice, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn anim-fade-up";
      btn.style.animationDelay = `${i * 40}ms`;
      btn.innerHTML = `<span class="choice-index">${i + 1}</span><span>${choice}</span>`;
      btn.addEventListener("click", () => {
        if (row.dataset.locked === "1") return;
        selectedIndex = i;
        Array.from(row.children).forEach((b) => b.classList.remove("is-selected"));
        btn.classList.add("is-selected");
        selectBtn.hidden = false;
        selectBtn.classList.add("anim-pop");
      });
      row.appendChild(btn);
    });

    const selectBtn = document.createElement("button");
    selectBtn.type = "button";
    selectBtn.className = "cta select-submit";
    selectBtn.hidden = true;
    selectBtn.innerHTML = `${icon("check_circle")} SELECT`;
    selectBtn.addEventListener("click", () => {
      if (selectedIndex === null || row.dataset.locked === "1") return;
      submitChoice(step, selectedIndex, choices, row, selectBtn);
    });

    stage.append(row, selectBtn);
  }

  async function submitChoice(step, chosenIdx, choices, row, selectBtn) {
    row.dataset.locked = "1";
    selectBtn.disabled = true;
    session.graded += 1;

    const correctIdx =
      step.type === "tf" ? (step.answer ? 0 : 1) : step.answer;
    const chosenLabel = choices[chosenIdx];
    const correctLabel = choices[correctIdx];
    const correct = chosenIdx === correctIdx;
    const buttons = Array.from(row.children);

    function markCorrect(message) {
      session.correct += 1;
      buttons[chosenIdx].classList.remove("is-wrong");
      buttons[chosenIdx].classList.add("is-correct");
      feedback.className = "step-feedback-panel is-good anim-fade-up";
      feedback.innerHTML = `<p class="step-feedback">${icon("celebration")} ${message}</p>`;
      speak("Correct!");
      window.setTimeout(advance, 700);
    }

    if (correct) {
      markCorrect("Correct!");
      return;
    }

    feedback.className = "step-feedback-panel is-bad anim-fade-up";
    feedback.innerHTML = `
      <p class="step-feedback">${icon("hourglass_top")} Checking…</p>
      <p class="lesson-copy milo-explain">Milo is double-checking your answer…</p>
    `;

    const ai = window.LearnJSMiloAI;
    const coached = ai
      ? await ai.coachWrongAnswer({
          question: step.q || step.prompt || step.text || node.title,
          chosenLabel,
          correctLabel,
          step,
          accepted: [correctLabel],
          // Discrete choices: the picked option is already the wrong button.
          allowOverturn: false,
        })
      : {
          actuallyCorrect: false,
          hint: getHint(step),
          explain: getExplanation(step, chosenLabel, correctLabel),
        };

    buttons[chosenIdx].classList.add("is-wrong");
    if (buttons[correctIdx]) buttons[correctIdx].classList.add("is-correct");

    showMiloCoach(coached.hint);
    feedback.innerHTML = `
      <p class="step-feedback">${icon("cancel")} Incorrect!</p>
      <p class="lesson-copy milo-explain">${coached.explain}</p>
      <button type="button" class="cta continue-after-miss">${icon("arrow_forward")} Continue</button>
    `;
    feedback.querySelector(".continue-after-miss").addEventListener("click", advance);
  }

  showStep();
}

function renderPractice(node, body, session) {
  const warmups = node.codeWarmups || [];
  if (warmups.length) {
    // Run coding warmups as a mini step list, then flashcards.
    const steps = [
      {
        type: "teach",
        text: "Code lab first — write real JavaScript. Then we’ll do quick flashcards.",
      },
      ...warmups,
      {
        type: "teach",
        text: "Nice coding. Next: flashcard checks.",
      },
    ];
    const wrapBody = body;
    const sessionRef = session;
    let index = 0;
    let selectedIndex = null;
    const progressUi = createProgress(steps.length);
    const stage = document.createElement("div");
    stage.className = "step-stage";
    const feedback = document.createElement("div");
    feedback.className = "step-feedback-panel";
    wrapBody.append(progressUi, stage, feedback);

    function finishWarmups() {
      wrapBody.innerHTML = "";
      renderPracticeCards(node, wrapBody, sessionRef);
    }

    function advance() {
      hideMiloCoach();
      window.speechSynthesis?.cancel();
      selectedIndex = null;
      feedback.innerHTML = "";
      feedback.className = "step-feedback-panel";
      index += 1;
      if (index >= steps.length) {
        finishWarmups();
        return;
      }
      showStepLocal();
    }

    function showStepLocal() {
      const step = steps[index];
      updateProgress(progressUi, index, steps.length);
      stage.innerHTML = "";
      stage.classList.add("anim-fade-up");
      feedback.innerHTML = "";
      if (step.type === "teach") {
        const p = document.createElement("p");
        p.className = "lesson-copy";
        p.textContent = step.text;
        const next = document.createElement("button");
        next.type = "button";
        next.className = "cta anim-pop";
        next.innerHTML = `${icon("arrow_forward")} Continue`;
        next.addEventListener("click", advance);
        stage.append(p, next);
        return;
      }
      if (step.type === "code") {
        renderCodeStep(step, stage, feedback, sessionRef, advance);
      }
    }

    showStepLocal();
    return;
  }

  renderPracticeCards(node, body, session);
}

function renderPracticeCards(node, body, session) {
  const cards = node.cards || [];
  let index = 0;
  let listening = false;
  let pendingText = "";

  const progressUi = createProgress(cards.length || 1);
  const status = document.createElement("p");
  status.className = "lesson-copy anim-fade-up";
  status.innerHTML = `${icon("mic")} Speak or type an answer, then press SELECT.`;

  const prompt = document.createElement("p");
  prompt.className = "flash-prompt";

  const heard = document.createElement("p");
  heard.className = "flash-heard";

  const mic = document.createElement("button");
  mic.type = "button";
  mic.className = "mic-btn";
  mic.innerHTML = `${icon("mic")} Speak answer`;

  const typed = document.createElement("input");
  typed.type = "text";
  typed.className = "flash-input";
  typed.placeholder = "Type your answer";

  const selectBtn = document.createElement("button");
  selectBtn.type = "button";
  selectBtn.className = "cta select-submit";
  selectBtn.innerHTML = `${icon("check_circle")} SELECT`;
  selectBtn.disabled = true;

  const feedback = document.createElement("div");
  feedback.className = "step-feedback-panel";

  body.append(progressUi, status, prompt, heard, mic, typed, selectBtn, feedback);

  function refreshSelect() {
    pendingText = typed.value.trim();
    selectBtn.disabled = !pendingText;
  }

  typed.addEventListener("input", refreshSelect);

  function showCard() {
    if (index >= cards.length) {
      showResults(session);
      return;
    }
    hideMiloCoach();
    updateProgress(progressUi, index, cards.length);
    prompt.textContent = cards[index].prompt;
    heard.textContent = `Card ${index + 1} of ${cards.length}`;
    typed.value = "";
    pendingText = "";
    selectBtn.disabled = true;
    feedback.innerHTML = "";
    feedback.className = "step-feedback-panel";
  }

  async function submitPractice() {
    const answer = typed.value.trim() || pendingText;
    if (!answer) return;
    session.graded += 1;
    const card = cards[index];
    const ok = answersMatch(answer, card.accept);
    const correctLabel = card.accept[0];

    function markCorrect(message) {
      session.correct += 1;
      feedback.className = "step-feedback-panel is-good anim-fade-up";
      feedback.innerHTML = `<p class="step-feedback">${icon("celebration")} ${message}</p>`;
      speak("Correct!");
      index += 1;
      window.setTimeout(showCard, 700);
    }

    if (ok) {
      markCorrect("Correct!");
      return;
    }

    selectBtn.disabled = true;
    feedback.className = "step-feedback-panel is-bad anim-fade-up";
    feedback.innerHTML = `
      <p class="step-feedback">${icon("hourglass_top")} Checking…</p>
      <p class="lesson-copy milo-explain">Milo is double-checking your answer…</p>
    `;

    const ai = window.LearnJSMiloAI;
    const coached = ai
      ? await ai.coachWrongAnswer({
          question: card.prompt,
          chosenLabel: answer,
          correctLabel,
          step: card,
          accepted: card.accept,
        })
      : {
          actuallyCorrect: false,
          hint: card.hint || `Hint from Milo: try saying “${correctLabel}”.`,
          explain:
            card.explain ||
            `You answered “${answer}”, but something like “${correctLabel}” is what this card checks.`,
        };

    if (coached.actuallyCorrect) {
      showMiloCoach(coached.hint);
      markCorrect("Nice job wording it! you really got creative!");
      return;
    }

    showMiloCoach(coached.hint);
    feedback.innerHTML = `
      <p class="step-feedback">${icon("cancel")} Incorrect!</p>
      <p class="lesson-copy milo-explain">${coached.explain}</p>
      <button type="button" class="cta continue-after-miss">${icon("arrow_forward")} Continue</button>
    `;
    feedback.querySelector(".continue-after-miss").addEventListener("click", () => {
      index += 1;
      showCard();
    });
  }

  selectBtn.addEventListener("click", submitPractice);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    status.innerHTML = `${icon("keyboard")} Speech isn’t available here — type your answer, then SELECT.`;
    mic.disabled = true;
  } else {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognition.addEventListener("result", (event) => {
      const transcript = Array.from(event.results[0] || [])
        .map((r) => r.transcript)
        .join(" ");
      typed.value = transcript;
      heard.textContent = `Heard: “${transcript}”`;
      refreshSelect();
    });

    recognition.addEventListener("end", () => {
      listening = false;
      mic.innerHTML = `${icon("mic")} Speak answer`;
    });

    mic.addEventListener("click", () => {
      if (listening) {
        recognition.stop();
        return;
      }
      listening = true;
      mic.innerHTML = `${icon("graphic_eq")} Listening…`;
      recognition.start();
    });
  }

  typed.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!selectBtn.disabled) selectBtn.click();
    }
  });

  if (!cards.length) {
    showResults(session);
    return;
  }
  showCard();
}

function renderChest(node, body) {
  const copy = document.createElement("p");
  copy.className = "lesson-copy anim-fade-up";
  copy.innerHTML = `${icon("inventory_2")} You earned a chest. Open it for Momentum, a Charge, XP, or a bonus knowledge card.`;

  const open = document.createElement("button");
  open.type = "button";
  open.className = "cta chest-btn anim-pop";
  open.innerHTML = `${icon("lock_open")} Open chest`;

  const result = document.createElement("p");
  result.className = "chest-result";

  open.addEventListener("click", () => {
    const reward = progress.rollChestReward();
    result.classList.add("anim-pop");
    result.innerHTML = `${icon("emoji_events")} You got: ${reward.label}`;
    speak(`You got ${reward.label}`);
    open.disabled = true;
    const done = document.createElement("button");
    done.type = "button";
    done.className = "cta";
    done.innerHTML = `${icon("arrow_forward")} Collect & continue`;
    done.addEventListener("click", () => finishNode(node, reward, null));
    body.appendChild(done);
  });

  body.append(copy, open, result);
}

function showResults(session) {
  hideMiloCoach();
  const body = document.getElementById("lesson-body");
  const elapsed = Date.now() - session.startedAt;
  const pct = session.graded ? Math.round((session.correct / session.graded) * 100) : 100;
  const tier = tierFromPercent(pct);
  const phrase = pick(RESULT_PHRASES[tier]);
  const xpGain = Math.max(8, Math.round(10 + pct / 5));

  body.innerHTML = `
    <div class="results-card anim-pop">
      <p class="results-kicker">${icon("military_tech")} Lesson complete</p>
      <h2 class="results-phrase">${phrase}</h2>
      <div class="results-grid">
        <div class="results-stat anim-fade-up">
          ${icon("bolt")}
          <strong>+${xpGain} XP</strong>
          <span>Gained XP</span>
        </div>
        <div class="results-stat anim-fade-up" style="animation-delay:.08s">
          ${icon("timer")}
          <strong>${formatDuration(elapsed)}</strong>
          <span>Time Taken</span>
        </div>
        <div class="results-stat anim-fade-up" style="animation-delay:.16s">
          ${icon("monitoring")}
          <strong>${pct}%</strong>
          <span>How good you've done</span>
        </div>
      </div>
      <p class="lesson-copy">You got ${session.correct} of ${session.graded} checks right on first submit.</p>
      <button type="button" class="cta" id="results-continue">${icon("home")} Back to path</button>
    </div>
  `;

  speak(`${phrase}. You scored ${pct} percent and gained ${xpGain} experience points.`);

  document.getElementById("results-continue").addEventListener("click", () => {
    finishNode(session.node, { type: "xp", amount: xpGain, label: `${xpGain} XP` }, null);
  });
}

function finishNode(node, reward) {
  window.speechSynthesis?.cancel();
  hideMiloCoach();
  // Avoid double XP: completeNode also adds 10 by default when no reward type handling for custom
  const stateReward = reward && reward.type === "xp"
    ? reward
    : reward;
  if (stateReward && stateReward.type === "xp") {
    // completeNode will add reward.amount; skip the default +10 by passing reward
    progress.completeNode(node, stateReward);
  } else if (stateReward) {
    progress.completeNode(node, stateReward);
  } else {
    progress.completeNode(node, { type: "xp", amount: 10, label: "10 XP" });
  }
  window.location.href = "learn.html";
}

function startLesson() {
  const id = new URLSearchParams(window.location.search).get("id");
  const found = id ? findNode(id) : null;
  if (!found) {
    window.location.href = "learn.html";
    return;
  }
  renderLesson(found.unit, found.node);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startLesson);
} else {
  startLesson();
}
