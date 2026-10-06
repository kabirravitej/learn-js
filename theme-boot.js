/* Tiny FOUC guard — theme + FX mode before first paint */
(function () {
  try {
    var t = localStorage.getItem("learnjs-theme");
    t = t === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", t);
    document.documentElement.style.colorScheme = t;
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  try {
    var fx = localStorage.getItem("learnjs-fx");
    if (!fx) {
      var saveData = navigator.connection && navigator.connection.saveData;
      var lowMem = typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4;
      var lowCpu =
        typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
      fx = saveData || lowMem || lowCpu ? "lite" : "balanced";
    }
    if (fx !== "full" && fx !== "balanced" && fx !== "lite" && fx !== "off") fx = "balanced";
    document.documentElement.setAttribute("data-fx", fx);
  } catch (e2) {
    document.documentElement.setAttribute("data-fx", "balanced");
  }
})();
