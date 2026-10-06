/**
 * Pure SVG custom cursor — transform + rAF (no layout thrash).
 */
(function customCursor() {
  const fine = window.matchMedia("(pointer: fine)").matches;
  if (!fine) return;

  // Skip custom cursor in lite FX mode for max responsiveness
  try {
    if (localStorage.getItem("learnjs-fx") === "lite") return;
  } catch {
    /* ignore */
  }

  const SIZE = 32;
  const HALF = SIZE / 2;
  const CLICKABLE =
    'a, button, input, select, textarea, summary, label, [role="button"], [role="link"], [role="menuitem"], [role="radio"], [role="option"], [tabindex]:not([tabindex="-1"]), .cta, .path-node.is-current, .path-node.is-done, .ws-tab, .ws-btn, .choice-btn, .theme-option, .mic-btn, .text-btn, .chest-btn, .account-chip, .guidebook, .ws-mic, .select-submit, [data-theme-pick], .flash-input, .code-editor, .ws-code';

  const SVG_DEFAULT = `
    <svg class="lj-cursor-layer lj-cursor-default" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
      <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="2.25"/>
      <circle cx="16" cy="16" r="2.75" fill="currentColor"/>
    </svg>`;

  const SVG_SELECT = `
    <svg class="lj-cursor-layer lj-cursor-select" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
      <circle cx="16" cy="16" r="12" fill="currentColor" fill-opacity="0.12"/>
      <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="2.75"/>
      <circle cx="16" cy="16" r="4" fill="currentColor"/>
    </svg>`;

  document.documentElement.classList.add("has-lj-cursor");
  document.querySelectorAll(".site-credit, .site-credit-auth").forEach((el) => el.remove());

  const cursor = document.createElement("div");
  cursor.className = "lj-cursor is-hidden";
  cursor.setAttribute("aria-hidden", "true");
  cursor.innerHTML = `<span class="lj-cursor-glow"></span>${SVG_DEFAULT}${SVG_SELECT}`;
  document.body.appendChild(cursor);

  let x = 0;
  let y = 0;
  let visible = false;
  let clickable = false;
  let down = false;
  let dirty = false;
  let raf = 0;
  let lastTarget = null;

  function isClickable(el) {
    if (!el || el === document.documentElement || el === document.body) return false;
    if (el.closest(".lj-cursor")) return false;
    const hit = el.closest(CLICKABLE);
    if (!hit) return false;
    if (hit.disabled || hit.getAttribute("aria-disabled") === "true") return false;
    if (hit.classList.contains("path-node") && hit.classList.contains("is-locked")) return false;
    return true;
  }

  function paint() {
    raf = 0;
    dirty = false;
    cursor.style.transform = `translate3d(${x - HALF}px, ${y - HALF}px, 0)`;
    cursor.classList.toggle("is-clickable", clickable);
    cursor.classList.toggle("is-down", down);
    cursor.classList.toggle("is-hidden", !visible);
  }

  function schedule() {
    if (dirty) return;
    dirty = true;
    if (!raf) raf = requestAnimationFrame(paint);
  }

  function onMove(e) {
    if (e.pointerType === "touch") return;
    x = e.clientX;
    y = e.clientY;
    visible = true;
    if (e.target !== lastTarget) {
      lastTarget = e.target;
      clickable = isClickable(e.target);
    }
    schedule();
  }

  window.addEventListener("pointermove", onMove, { passive: true });

  window.addEventListener(
    "pointerover",
    (e) => {
      if (e.pointerType === "touch") return;
      lastTarget = e.target;
      clickable = isClickable(e.target);
      schedule();
    },
    { passive: true }
  );

  window.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch") return;
    down = true;
    x = e.clientX;
    y = e.clientY;
    clickable = isClickable(e.target);
    schedule();
  });

  window.addEventListener("pointerup", () => {
    down = false;
    schedule();
  });

  document.documentElement.addEventListener("mouseleave", () => {
    visible = false;
    schedule();
  });

  document.documentElement.addEventListener("mouseenter", () => {
    visible = true;
    schedule();
  });
})();
