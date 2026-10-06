/**
 * Learn JS — ambient effects (performance-aware).
 * Keeps the look; cuts perpetual paint/composite work.
 * data-fx: "full" | "balanced" (default) | "lite"
 */
(function effectsBoot() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    document.documentElement.setAttribute("data-fx", "off");
    return;
  }

  const KEY = "learnjs-fx";
  const saveData = navigator.connection?.saveData;
  const lowMem = typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4;
  const lowCpu = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;

  function storedFx() {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  }

  let mode = storedFx();
  if (!mode) {
    mode = saveData || lowMem || lowCpu ? "lite" : "balanced";
  }
  if (!["full", "balanced", "lite", "off"].includes(mode)) mode = "balanced";
  document.documentElement.setAttribute("data-fx", mode);

  window.LearnJSEffects = {
    ready: true,
    mode,
    setMode(next) {
      mode = next;
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* ignore */
      }
      document.documentElement.setAttribute("data-fx", next);
      window.location.reload();
    },
  };

  if (mode === "off") return;

  const root = document.documentElement;
  const isLite = mode === "lite";
  const isFull = mode === "full";

  /* —— Spotlight: only tick while pointer is moving; pause when idle/hidden —— */
  if (!isLite) {
    const spot = document.createElement("div");
    spot.className = "fx-spotlight";
    spot.setAttribute("aria-hidden", "true");
    document.body.appendChild(spot);

    let raf = 0;
    let tx = window.innerWidth * 0.5;
    let ty = window.innerHeight * 0.35;
    let cx = tx;
    let cy = ty;
    let moving = false;
    let idleTimer = 0;

    function tickSpot() {
      raf = 0;
      if (document.hidden) return;
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      root.style.setProperty("--spot-x", `${cx.toFixed(1)}px`);
      root.style.setProperty("--spot-y", `${cy.toFixed(1)}px`);
      const dx = Math.abs(tx - cx);
      const dy = Math.abs(ty - cy);
      if (dx > 0.4 || dy > 0.4) {
        raf = requestAnimationFrame(tickSpot);
      } else {
        moving = false;
      }
    }

    function kick() {
      if (document.hidden) return;
      moving = true;
      if (!raf) raf = requestAnimationFrame(tickSpot);
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        moving = false;
      }, 120);
    }

    window.addEventListener(
      "pointermove",
      (e) => {
        if (e.pointerType === "touch") return;
        tx = e.clientX;
        ty = e.clientY;
        kick();
      },
      { passive: true }
    );

    document.addEventListener("visibilitychange", () => {
      if (document.hidden && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
        moving = false;
      }
    });
  }

  /* —— Orbs: 2 in lite/balanced, 3 only in full —— */
  if (!document.querySelector(".fx-orbs")) {
    const orbs = document.createElement("div");
    orbs.className = "fx-orbs";
    orbs.setAttribute("aria-hidden", "true");
    const count = isFull ? 3 : 2;
    orbs.innerHTML = Array.from({ length: count }, (_, i) =>
      `<span class="fx-orb fx-orb-${i + 1}"></span>`
    ).join("");
    document.body.prepend(orbs);
  }

  /* —— Sparkles: fewer, skip in lite —— */
  if (!isLite) {
    const sparkles = document.createElement("div");
    sparkles.className = "fx-sparkles";
    sparkles.setAttribute("aria-hidden", "true");
    const sparkCount = isFull
      ? Math.min(14, Math.max(8, Math.floor(window.innerWidth / 110)))
      : Math.min(8, Math.max(5, Math.floor(window.innerWidth / 160)));
    for (let i = 0; i < sparkCount; i += 1) {
      const s = document.createElement("span");
      s.className = "fx-sparkle";
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.setProperty("--dur", `${4.5 + Math.random() * 5}s`);
      s.style.setProperty("--delay", `${Math.random() * 6}s`);
      sparkles.appendChild(s);
    }
    document.body.appendChild(sparkles);
  }

  /* —— Code crumbs: only full mode on app shells —— */
  const isApp =
    document.body.classList.contains("learn-body") ||
    document.body.classList.contains("auth-body");
  if (isFull && isApp) {
    const crumbs = document.createElement("div");
    crumbs.className = "fx-crumbs";
    crumbs.setAttribute("aria-hidden", "true");
    const phrases = [
      "const go = true",
      "console.log()",
      "let xp = 10",
      "if (ready)",
      "array.map()",
      "=> {}",
    ];
    for (let i = 0; i < 5; i += 1) {
      const c = document.createElement("span");
      c.className = "fx-crumb";
      c.textContent = phrases[i % phrases.length];
      c.style.left = `${8 + Math.random() * 84}%`;
      c.style.setProperty("--dur", `${18 + Math.random() * 14}s`);
      c.style.setProperty("--delay", `${-Math.random() * 20}s`);
      crumbs.appendChild(c);
    }
    document.body.appendChild(crumbs);
  }

  /* —— Reveal: skip heavy path lists; no blur filter —— */
  const revealSelector = isLite
    ? "[data-reveal], .panel, .settings-panel, .auth-panel, .step-stage, .unit-banner"
    : "[data-reveal], .panel, .settings-panel, .auth-panel, .card-list article, .step-stage, .unit-banner, .workspace-editors, .workspace-preview";

  const revealables = document.querySelectorAll(revealSelector);
  revealables.forEach((el, i) => {
    if (el.hasAttribute("data-fx-reveal") || el.classList.contains("is-in")) return;
    // Never animate hundreds of path nodes — kills learn.html scroll
    if (el.closest?.(".path-list, .path-board")) return;
    el.setAttribute("data-fx-reveal", "");
    el.style.setProperty("--fx-delay", `${Math.min(i * 30, 180)}ms`);
  });

  if (revealables.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "40px 0px" }
    );
    document.querySelectorAll("[data-fx-reveal]").forEach((el) => io.observe(el));
  }

  /* —— Magnetic CTAs: full mode only; rAF coalesced —— */
  if (isFull) {
    document.querySelectorAll(".cta").forEach((el) => {
      let frame = 0;
      let mx = 0;
      let my = 0;
      el.addEventListener(
        "pointermove",
        (e) => {
          const r = el.getBoundingClientRect();
          mx = (e.clientX - r.left - r.width / 2) * 0.12;
          my = (e.clientY - r.top - r.height / 2) * 0.12;
          if (frame) return;
          frame = requestAnimationFrame(() => {
            frame = 0;
            el.style.transform = `translate(${mx.toFixed(1)}px, ${my.toFixed(1)}px)`;
          });
        },
        { passive: true }
      );
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* —— Ripple (cheap) —— */
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target.closest(
        ".cta, .choice-btn, .ws-btn, .theme-option, .mic-btn, .text-btn, .chest-btn, .account-chip"
      );
      if (!target || getComputedStyle(target).position === "static") {
        if (target) target.style.position = "relative";
      }
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "fx-ripple";
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      target.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 500);
    },
    true
  );
})();
