const curriculum = window.LEARN_JS_CURRICULUM;
const progress = window.LearnJSProgress;

const TYPE_ICON = {
  concept: "lightbulb",
  memory: "psychology",
  practice: "quiz",
  chest: "inventory_2",
  overview: "flag",
};

function renderStats(state) {
  document.getElementById("stat-xp").textContent = state.xp;
  document.getElementById("stat-momentum").textContent = state.momentum;
  document.getElementById("stat-charges").textContent = state.momentumCharges;
  document.getElementById("stat-cards").textContent = state.knowledgeCards.length;
}

function unitStatus(unit, state, currentId) {
  const allDone = unit.nodes.every((n) => state.completed.includes(n.id));
  const hasCurrent = unit.nodes.some((n) => n.id === currentId);
  const started = unit.nodes.some((n) => state.completed.includes(n.id)) || hasCurrent;
  if (allDone) return "done";
  if (hasCurrent || started) return "active";
  return "locked";
}

function renderPath() {
  const state = progress.load();
  const currentId = progress.currentNodeId(curriculum);
  const root = document.getElementById("path-units");
  root.innerHTML = "";

  document.getElementById("next-cta").href = currentId ? `lesson.html?id=${currentId}` : "learn.html";
  document.getElementById("next-cta").innerHTML = currentId
    ? `<span class="material-symbols-outlined">play_arrow</span> Continue`
    : `<span class="material-symbols-outlined">emoji_events</span> Path complete`;

  let currentButton = null;
  let currentBoard = null;
  let currentMilo = null;

  curriculum.units.forEach((unit, unitIndex) => {
    const status = unitStatus(unit, state, currentId);
    const section = document.createElement("section");
    section.className = `unit-section is-${status}`;
    section.id = `unit-${unit.id}`;
    section.dataset.unitId = unit.id;
    // Skip offscreen paint work for distant units
    section.style.contentVisibility = "auto";
    section.style.containIntrinsicSize = "auto 520px";

    const banner = document.createElement("header");
    banner.className = "unit-banner";
    banner.innerHTML = `
      <div>
        <p>${unit.section} · Unit ${unitIndex + 1}</p>
        <h1>${unit.title}</h1>
        <p class="unit-banner-blurb">${unit.blurb || ""}</p>
      </div>
      <span class="unit-status-pill" aria-hidden="true">
        <span class="material-symbols-outlined">${
          status === "done" ? "check_circle" : status === "active" ? "play_circle" : "lock"
        }</span>
        ${status === "done" ? "Done" : status === "active" ? "In progress" : "Locked"}
      </span>
    `;

    const board = document.createElement("div");
    board.className = "path-board";

    const milo = document.createElement("img");
    milo.className = "path-milo";
    milo.src = "milo.png";
    milo.alt = "";
    milo.width = 676;
    milo.height = 369;
    milo.hidden = true;

    const list = document.createElement("ol");
    list.className = "path-list";

    unit.nodes.forEach((node, nodeIndex) => {
      const done = state.completed.includes(node.id);
      const isCurrent = node.id === currentId;
      const isLocked = !done && !isCurrent;

      const wrap = document.createElement("li");
      wrap.className = "path-node-wrap";
      wrap.style.setProperty("--node-i", String(nodeIndex));

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "path-node";
      const iconName = isLocked ? "lock" : TYPE_ICON[node.type] || "circle";
      btn.innerHTML = `<span class="material-symbols-outlined">${iconName}</span>`;
      btn.title = isLocked
        ? `${node.title} — locked`
        : `${node.title} (${node.minutes || 5}–8 min)`;
      btn.setAttribute(
        "aria-label",
        isLocked
          ? `${node.title}, locked`
          : `${node.title}, ${node.type} lesson`
      );

      if (done) btn.classList.add("is-done");
      if (isCurrent) {
        btn.classList.add("is-current");
        currentButton = btn;
        currentBoard = board;
        currentMilo = milo;
        milo.hidden = false;
        const bubble = document.createElement("span");
        bubble.className = "start-bubble";
        bubble.innerHTML = `<span class="material-symbols-outlined">play_arrow</span> START`;
        wrap.appendChild(bubble);
      }
      if (isLocked) {
        btn.classList.add("is-locked");
        btn.disabled = true;
      }

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

    board.append(milo, list);
    section.append(banner, board);
    root.appendChild(section);
  });

  requestAnimationFrame(() => {
    if (currentButton && currentBoard && currentMilo) {
      const boardRect = currentBoard.getBoundingClientRect();
      const btnRect = currentButton.getBoundingClientRect();
      currentMilo.style.top = `${
        btnRect.top - boardRect.top + btnRect.height / 2 - currentMilo.offsetHeight / 2
      }px`;
    }

    // Land on the unit that has your current lesson
    const activeSection = root.querySelector(".unit-section.is-active");
    if (activeSection && currentId) {
      activeSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
    .join("<hr style='border:0;border-top:1px solid var(--learn-border);margin:.65rem 0'>");
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
  window.addEventListener("resize", () => {
    const milo = document.querySelector(".path-milo:not([hidden])");
    const current = document.querySelector(".path-node.is-current");
    const board = current?.closest(".path-board");
    if (!milo || !current || !board) return;
    const boardRect = board.getBoundingClientRect();
    const btnRect = current.getBoundingClientRect();
    milo.style.top = `${
      btnRect.top - boardRect.top + btnRect.height / 2 - milo.offsetHeight / 2
    }px`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bootAccountUi();
});
