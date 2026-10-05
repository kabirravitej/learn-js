window.LearnJSAccountMenu = (() => {
  function mountAccountMenu({ active } = {}) {
    const auth = window.LearnJSAuth;
    const chip = document.getElementById("account-chip");
    const label = document.getElementById("account-label");
    const dropdown = document.getElementById("account-dropdown");
    if (!chip || !label || !dropdown || !auth) return;

    const user = auth.getCachedUser();
    if (!user) return;

    chip.hidden = false;
    label.textContent = `${user.username} ${user.displayId}`;
    chip.setAttribute("aria-expanded", "false");
    chip.title = "Account options";

    function close() {
      dropdown.hidden = true;
      chip.setAttribute("aria-expanded", "false");
    }

    function open() {
      dropdown.hidden = false;
      chip.setAttribute("aria-expanded", "true");
    }

    chip.addEventListener("click", (event) => {
      event.stopPropagation();
      if (dropdown.hidden) open();
      else close();
    });

    document.addEventListener("click", (event) => {
      if (!dropdown.hidden && !dropdown.contains(event.target) && event.target !== chip) {
        close();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });

    dropdown.querySelector("[data-account-settings]")?.addEventListener("click", () => {
      window.location.href = "settings.html";
    });

    dropdown.querySelector("[data-account-logout]")?.addEventListener("click", async () => {
      await auth.logout();
      window.location.href = "intro.html";
    });

    if (active === "settings") {
      dropdown.querySelector("[data-account-settings]")?.classList.add("is-active");
    }
  }

  async function requireAndMount(options) {
    const auth = window.LearnJSAuth;
    if (!auth?.requireLogin("intro.html")) return null;
    try {
      await auth.refreshMe();
    } catch {
      auth.clearSession();
      window.location.replace("intro.html");
      return null;
    }
    mountAccountMenu(options);
    return auth.getCachedUser();
  }

  return { mountAccountMenu, requireAndMount };
})();
