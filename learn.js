const curriculum = window.LEARN_JS_CURRICULUM;
const progress = window.LearnJSProgress;

const TYPE_ICON = {
  concept: "lightbulb",
  memory: "psychology",
  practice: "quiz",
  chest: "inventory_2",
  overview: "flag",
};

function activeUnit(state) {
  const currentId = progress.currentNodeId(curriculum);
  for (const unit of curriculum.units) {
    if (unit.nodes.some((n) => n.id === currentId) || unit.nodes.every((n) => state.completed.includes(n.id))) {
      if (unit.nodes.some((n) => !state.completed.includes(n.id))) return unit;
    }
  }
  for (const unit of curriculum.units) {
    if (unit.nodes.some((n) => !state.completed.includes(n.id))) return unit;
  }
  return curriculum.units[curriculum.units.length - 1];
}

function renderStats(state) {
  document.getElementById("stat-xp").textContent = state.xp;
  document.getElementById("stat-momentum").textContent = state.momentum;
  document.getElementById("stat-charges").textContent = state.momentumCharges;
  document.getElementById("stat-cards").textContent = state.knowledgeCards.length;
}

function renderPath() {
  const state = progress.load();
  const currentId = progress.currentNodeId(curriculum);
  const unit = activeUnit(state);
  const board = document.getElementById("path-board");
  const list = document.getElementById("path-list");
  const milo = document.getElementById("path-milo");

  document.getElementById("unit-kicker").textContent = `${unit.section} · Unit ${curriculum.units.indexOf(unit) + 1}`;
  document.getElementById("unit-title").textContent = unit.title;
  document.getElementById("unit-blurb").textContent = unit.blurb;
  document.getElementById("next-cta").href = currentId ? `lesson.html?id=${currentId}` : "learn.html";
  document.getElementById("next-cta").innerHTML = currentId
    ? `<span class="material-symbols-outlined">play_arrow</span> Continue`
    : `<span class="material-symbols-outlined">emoji_events</span> Path complete`;

  list.innerHTML = "";
  let currentButton = null;

  unit.nodes.forEach((node, nodeIndex) => {
    const done = state.completed.includes(node.id);
    const isCurrent = node.id === currentId;
    const isLocked = !done && !isCurrent;

    const wrap = document.createElement("li");
    wrap.className = "path-node-wrap anim-fade-up";
    wrap.style.animationDelay = `${nodeIndex * 50}ms`;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "path-node";
    btn.innerHTML = `<span class="material-symbols-outlined">${TYPE_ICON[node.type] || "circle"}</span>`;
    btn.title = `${node.title} (${node.minutes || 5}–8 min)`;
    btn.setAttribute("aria-label", `${node.title}, ${node.type} lesson`);

    if (done) btn.classList.add("is-done");
    if (isCurrent) {
      btn.classList.add("is-current");
      currentButton = btn;
      const bubble = document.createElement("span");
      bubble.className = "start-bubble anim-pop";
      bubble.innerHTML = `<span class="material-symbols-outlined">play_arrow</span> START`;
      wrap.appendChild(bubble);
    }
    if (isLocked) btn.classList.add("is-locked");

    if (!isLocked) {
      btn.addEventListener("click", () => {
        window.location.href = `lesson.html?id=${node.id}`;
      });
    }

    const label = document.createElement("span");
    label.className = "node-label";
    label.textContent = node.title;

    wrap.appendChild(btn);
    wrap.appendChild(label);
    list.appendChild(wrap);
  });

  requestAnimationFrame(() => {
    if (!currentButton || !milo) return;
    const boardRect = board.getBoundingClientRect();
    const btnRect = currentButton.getBoundingClientRect();
    milo.style.top = `${btnRect.top - boardRect.top + btnRect.height / 2 - milo.offsetHeight / 2}px`;
  });

  renderStats(state);
}

function renderCardsPreview(state) {
  const el = document.getElementById("cards-preview");
  if (!state.knowledgeCards.length) {
    el.textContent = "Finish a lesson to collect your first knowledge card.";
    return;
  }
  const top = state.knowledgeCards.slice(0, 3);
  el.innerHTML = top
    .map((c) => `<strong>${c.title}</strong><br><span>${c.body}</span>`)
    .join("<hr style='border:0;border-top:1px solid rgba(255,255,255,.08);margin:.65rem 0'>");
}

async function bootAccountUi() {
  const auth = window.LearnJSAuth;
  if (!auth?.requireLogin("intro.html")) return;

  try {
    await auth.refreshMe();
  } catch {
    auth.clearSession();
    window.location.replace("intro.html");
    return;
  }

  window.LearnJSAccountMenu?.mountAccountMenu({ active: "learn" });

  const welcomeRaw = sessionStorage.getItem("learnjs-welcome");
  if (welcomeRaw) {
    sessionStorage.removeItem("learnjs-welcome");
    try {
      const welcome = JSON.parse(welcomeRaw);
      const banner = document.createElement("div");
      banner.className = "welcome-banner anim-fade-up";
      banner.innerHTML = `<strong>Welcome, ${welcome.username}!</strong> Your ID is <code>${welcome.displayId}</code> — that’s how the database finds you.`;
      document.querySelector(".learn-main")?.prepend(banner);
    } catch {
      // ignore
    }
  }

  const state = progress.load();
  renderPath();
  renderCardsPreview(state);
  window.addEventListener("resize", renderPath);
}

document.addEventListener("DOMContentLoaded", () => {
  bootAccountUi();
});
