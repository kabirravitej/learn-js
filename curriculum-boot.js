/**
 * Lazy-load only the curriculum batch needed for the current lesson.
 * Avoids parsing ~500KB of unused batch JS on every lesson open.
 */
window.LearnJSBoot = (() => {
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[data-lj-src="${src}"]`);
      if (existing) {
        if (existing.dataset.loaded === "1") resolve();
        else existing.addEventListener("load", () => resolve(), { once: true });
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.dataset.ljSrc = src;
      s.onload = () => {
        s.dataset.loaded = "1";
        resolve();
      };
      s.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(s);
    });
  }

  function batchForNodeId(nodeId) {
    const m = String(nodeId || "").match(/^u(\d+)/i);
    const n = m ? Number(m[1]) : 1;
    return Math.min(9, Math.max(1, Math.ceil(n / 10)));
  }

  async function loadBatchForNode(nodeId) {
    const batch = batchForNodeId(nodeId);
    const pad = String(batch).padStart(2, "0");
    await loadScript(`curriculum-batch-${pad}.js`);
  }

  async function loadLessonStack(nodeId) {
    await loadScript("curriculum-roadmap.js");
    await loadBatchForNode(nodeId);
    await loadScript("curriculum.js");
    await loadScript("curriculum-code.js");
    await loadScript("curriculum-enrich.js");
    await loadScript("progress.js");
    await loadScript("milo-ai.js");
    await loadScript("lesson.js");
  }

  return { loadScript, batchForNodeId, loadBatchForNode, loadLessonStack };
})();
