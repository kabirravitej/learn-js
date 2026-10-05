window.LearnJSAuth = (() => {
  const TOKEN_KEY = "learnjs-token";
  const USER_KEY = "learnjs-user";

  function apiBase() {
    // Same origin when served by Learn JS server; otherwise localhost default.
    if (location.protocol === "http:" || location.protocol === "https:") {
      return "";
    }
    return "http://127.0.0.1:3847";
  }

  function getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  function setSession(token, user) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  function clearSession() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  function getCachedUser() {
    try {
      return JSON.parse(localStorage.getItem(USER_KEY) || "null");
    } catch {
      return null;
    }
  }

  function isLoggedIn() {
    return Boolean(getToken());
  }

  async function request(path, { method = "GET", body } = {}) {
    const headers = { "Content-Type": "application/json" };
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
    const res = await fetch(`${apiBase()}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error(data.error || "Request failed");
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  }

  async function startRegister({ username, email, password }) {
    const data = await request("/api/register/start", {
      method: "POST",
      body: { username, email, password },
    });
    // Immediate signup (no Gmail OTP configured) returns a session token.
    if (data.token && data.user) {
      setSession(data.token, data.user);
      if (window.LearnJSProgress?.hydrateFromUser) {
        window.LearnJSProgress.hydrateFromUser(data.user);
      }
    }
    return data;
  }

  async function resendRegisterOtp(pendingId) {
    return request("/api/register/resend", {
      method: "POST",
      body: { pendingId },
    });
  }

  async function verifyRegisterOtp({ pendingId, otp }) {
    const data = await request("/api/register/verify", {
      method: "POST",
      body: { pendingId, otp },
    });
    setSession(data.token, data.user);
    if (window.LearnJSProgress?.hydrateFromUser) {
      window.LearnJSProgress.hydrateFromUser(data.user);
    }
    return data.user;
  }

  /** @deprecated use startRegister + verifyRegisterOtp */
  async function register(username, password, email) {
    return startRegister({ username, email, password });
  }

  async function login(username, password) {
    const data = await request("/api/login", {
      method: "POST",
      body: { username, password },
    });
    setSession(data.token, data.user);
    if (window.LearnJSProgress?.hydrateFromUser) {
      window.LearnJSProgress.hydrateFromUser(data.user);
    }
    return data.user;
  }

  async function logout() {
    try {
      await request("/api/logout", { method: "POST" });
    } catch {
      // ignore network errors on logout
    }
    clearSession();
  }

  async function deleteAccount(confirmId) {
    const data = await request("/api/me/delete", {
      method: "POST",
      body: { confirmId },
    });
    clearSession();
    try {
      localStorage.removeItem("learnjs-progress-v1");
      localStorage.removeItem("learnjs-workspace-v1");
    } catch {
      // ignore
    }
    return data;
  }

  async function refreshMe() {
    const data = await request("/api/me");
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    if (window.LearnJSProgress?.hydrateFromUser) {
      window.LearnJSProgress.hydrateFromUser(data.user);
    }
    return data.user;
  }

  async function pushProgress(state) {
    if (!getToken()) return null;
    const data = await request("/api/me/progress", {
      method: "PUT",
      body: {
        xp: state.xp,
        momentum: state.momentum,
        momentumCharges: state.momentumCharges,
        lastActiveDate: state.lastActiveDate,
        completed: state.completed,
        knowledgeCards: state.knowledgeCards,
      },
    });
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    return data.user;
  }

  function requireLogin(redirectTo = "intro.html") {
    if (!isLoggedIn()) {
      window.location.replace(redirectTo);
      return false;
    }
    return true;
  }

  return {
    apiBase,
    getToken,
    getCachedUser,
    isLoggedIn,
    register,
    startRegister,
    resendRegisterOtp,
    verifyRegisterOtp,
    login,
    logout,
    deleteAccount,
    refreshMe,
    pushProgress,
    requireLogin,
    clearSession,
  };
})();
