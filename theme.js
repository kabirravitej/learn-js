/**
 * Light / dark theme for Learn JS.
 * Persists to localStorage and sets data-theme on <html>.
 */
(function themeBoot() {
  const KEY = "learnjs-theme";
  const ROOT = document.documentElement;

  function normalize(value) {
    return value === "light" ? "light" : "dark";
  }

  function get() {
    try {
      return normalize(localStorage.getItem(KEY));
    } catch {
      return "dark";
    }
  }

  function apply(theme) {
    const next = normalize(theme);
    ROOT.setAttribute("data-theme", next);
    ROOT.style.colorScheme = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* ignore */
    }
    document.dispatchEvent(
      new CustomEvent("learnjs:theme", { detail: { theme: next } })
    );
    return next;
  }

  function set(theme) {
    return apply(theme);
  }

  function toggle() {
    return apply(get() === "light" ? "dark" : "light");
  }

  // Apply immediately (also safe if an inline FOUC script already set it)
  apply(get());

  window.LearnJSTheme = { get, set, apply, toggle, KEY };
})();
