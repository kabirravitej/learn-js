const STORAGE_KEY = "learnjs-workspace-v1";

const DEFAULTS = {
  html: `<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello from Learn JS</h1>
    <button id="btn">Click me</button>
  </body>
</html>`,
  css: `body {
  font-family: Georgia, serif;
  padding: 1.5rem;
  background: #f4fbf7;
  color: #12231c;
}

button {
  padding: 0.6rem 1rem;
  border: 2px solid #12231c;
  border-radius: 8px;
  background: #c8f560;
  font-weight: 700;
  cursor: pointer;
}`,
  js: `const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  title.textContent = "Nice! Your JS is running.";
  console.log("Button clicked");
});

console.log("Workspace ready");`,
};

const htmlEl = document.getElementById("ws-html");
const cssEl = document.getElementById("ws-css");
const jsEl = document.getElementById("ws-js");
const preview = document.getElementById("ws-preview");
const consoleEl = document.getElementById("ws-console");
const statusEl = document.getElementById("milo-status");
const replyEl = document.getElementById("milo-reply");
const micBtn = document.getElementById("milo-mic");
const micLabel = document.getElementById("milo-mic-label");

function loadDraft() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULTS };
  }
}

function saveDraft() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      html: htmlEl.value,
      css: cssEl.value,
      js: jsEl.value,
    })
  );
}

function logLine(text, kind = "info") {
  const line = document.createElement("div");
  line.className = kind === "error" ? "log-error" : "log-info";
  line.textContent = text;
  consoleEl.appendChild(line);
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

function clearConsole() {
  consoleEl.innerHTML = "";
}

function buildSrcdoc(html, css, js) {
  const bridge = `
    <script>
      (function () {
        function send(type, args) {
          parent.postMessage({ source: "learnjs-workspace", type, args }, "*");
        }
        ["log", "info", "warn", "error"].forEach(function (method) {
          const original = console[method].bind(console);
          console[method] = function () {
            const args = Array.from(arguments).map(function (v) {
              try { return typeof v === "string" ? v : JSON.stringify(v); }
              catch (e) { return String(v); }
            });
            send(method === "error" ? "error" : "log", args);
            original.apply(null, arguments);
          };
        });
        window.onerror = function (msg) {
          send("error", [String(msg)]);
        };
      })();
    <\/script>`;

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<style>${css}</style>
</head>
<body>
${html.replace(/<!DOCTYPE html>/i, "").replace(/<\/?html[^>]*>/gi, "").replace(/<\/?head[^>]*>[\s\S]*?<\/head>/gi, "").replace(/<\/?body[^>]*>/gi, "")}
${bridge}
<script>
try {
${js}
} catch (err) {
  console.error(err && err.message ? err.message : String(err));
}
<\/script>
</body>
</html>`;
}

function runPreview() {
  clearConsole();
  saveDraft();
  logLine("> Running…", "info");
  preview.srcdoc = buildSrcdoc(htmlEl.value, cssEl.value, jsEl.value);
}

window.addEventListener("message", (event) => {
  const data = event.data;
  if (!data || data.source !== "learnjs-workspace") return;
  const text = (data.args || []).join(" ");
  logLine(text, data.type === "error" ? "error" : "info");
});

document.querySelectorAll(".ws-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const pane = tab.dataset.pane;
    document.querySelectorAll(".ws-tab").forEach((t) => t.classList.toggle("is-active", t === tab));
    htmlEl.hidden = pane !== "html";
    cssEl.hidden = pane !== "css";
    jsEl.hidden = pane !== "js";
    htmlEl.classList.toggle("is-active", pane === "html");
    cssEl.classList.toggle("is-active", pane === "css");
    jsEl.classList.toggle("is-active", pane === "js");
  });
});

document.getElementById("ws-run").addEventListener("click", runPreview);
document.getElementById("ws-reset").addEventListener("click", () => {
  htmlEl.value = DEFAULTS.html;
  cssEl.value = DEFAULTS.css;
  jsEl.value = DEFAULTS.js;
  saveDraft();
  runPreview();
});

[htmlEl, cssEl, jsEl].forEach((el) => {
  el.addEventListener("input", saveDraft);
});

function setMiloStatus(text) {
  statusEl.textContent = text;
}

async function askMilo(message) {
  setMiloStatus("Milo is thinking…");
  replyEl.textContent = "";
  const ai = window.LearnJSMiloAI;
  const voice = window.LearnJSMiloVoice;
  const result = ai
    ? await ai.workspaceChat({
        message,
        html: htmlEl.value,
        css: cssEl.value,
        js: jsEl.value,
      })
    : {
        text: "Try simplifying the code, then ask again. I can help once the coach model is available.",
      };

  replyEl.textContent = result.text;
  setMiloStatus("Ready to help — tap the mic and talk.");
  voice?.speak(result.text);
}

function setupVoiceChat() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    micLabel.textContent = "Type help below";
    setMiloStatus("Speech isn’t available here — type a question next to Milo.");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "ws-code";
    input.style.minHeight = "2.5rem";
    input.style.marginTop = "0.45rem";
    input.placeholder = "Ask Milo…";
    micBtn.replaceWith(input);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && input.value.trim()) {
        askMilo(input.value.trim());
        input.value = "";
      }
    });
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  let listening = false;

  recognition.addEventListener("result", (event) => {
    const transcript = Array.from(event.results[0] || [])
      .map((r) => r.transcript)
      .join(" ")
      .trim();
    if (transcript) {
      setMiloStatus(`Heard: “${transcript}”`);
      askMilo(transcript);
    }
  });

  recognition.addEventListener("end", () => {
    listening = false;
    micBtn.classList.remove("is-listening");
    micLabel.textContent = "Tap to talk";
  });

  recognition.addEventListener("error", () => {
    listening = false;
    micBtn.classList.remove("is-listening");
    micLabel.textContent = "Tap to talk";
    setMiloStatus("Mic glitch — try again.");
  });

  micBtn.addEventListener("click", () => {
    if (listening) {
      recognition.stop();
      return;
    }
    window.LearnJSMiloVoice?.stop();
    listening = true;
    micBtn.classList.add("is-listening");
    micLabel.textContent = "Listening…";
    setMiloStatus("Listening…");
    try {
      recognition.start();
    } catch {
      listening = false;
      micBtn.classList.remove("is-listening");
      micLabel.textContent = "Tap to talk";
    }
  });
}

(async function boot() {
  const user = await window.LearnJSAccountMenu.requireAndMount({ active: "workspace" });
  if (!user) return;

  const draft = loadDraft();
  htmlEl.value = draft.html;
  cssEl.value = draft.css;
  jsEl.value = draft.js;
  runPreview();
  setupVoiceChat();
  window.LearnJSMiloVoice?.speak("Workspace ready. I’m in the corner if you need help.");
})();
