window.LearnJSProgress = (() => {
  const KEY = "learnjs-progress-v1";

  const defaultState = () => ({
    xp: 0,
    momentum: 0,
    momentumCharges: 1,
    lastActiveDate: null,
    completed: [],
    knowledgeCards: [],
  });

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      return { ...defaultState(), ...JSON.parse(raw) };
    } catch {
      return defaultState();
    }
  }

  function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
    const auth = window.LearnJSAuth;
    if (auth?.isLoggedIn?.()) {
      auth.pushProgress(state).catch(() => {
        // Keep local progress even if the server is briefly offline.
      });
    }
  }

  function hydrateFromUser(user) {
    if (!user) return load();
    const state = {
      xp: user.xp ?? 0,
      momentum: user.momentum ?? 0,
      momentumCharges: user.momentumCharges ?? 1,
      lastActiveDate: user.lastActiveDate ?? null,
      completed: Array.isArray(user.completed) ? user.completed : [],
      knowledgeCards: Array.isArray(user.knowledgeCards) ? user.knowledgeCards : [],
    };
    localStorage.setItem(KEY, JSON.stringify(state));
    return state;
  }

  function todayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function daysBetween(a, b) {
    const ms = new Date(b) - new Date(a);
    return Math.round(ms / 86400000);
  }

  function touchMomentum(state) {
    const today = todayKey();
    if (!state.lastActiveDate) {
      state.momentum = Math.max(1, state.momentum || 1);
      state.lastActiveDate = today;
      return state;
    }
    if (state.lastActiveDate === today) return state;

    const gap = daysBetween(state.lastActiveDate, today);
    if (gap === 1) {
      state.momentum += 1;
      state.lastActiveDate = today;
    } else if (gap > 1) {
      if (state.momentumCharges > 0) {
        state.momentumCharges -= 1;
        // streak preserved across the missed day(s)
        state.lastActiveDate = today;
      } else {
        state.momentum = 1;
        state.lastActiveDate = today;
      }
    }
    return state;
  }

  function isComplete(id) {
    return load().completed.includes(id);
  }

  function completeNode(node, reward) {
    const state = touchMomentum(load());
    if (!state.completed.includes(node.id)) {
      state.completed.push(node.id);
    }
    if (node.knowledgeCard && !state.knowledgeCards.some((c) => c.id === node.id)) {
      state.knowledgeCards.unshift({
        id: node.id,
        title: node.title,
        body: node.knowledgeCard,
        at: Date.now(),
      });
    }
    if (reward) {
      if (reward.type === "xp") state.xp += reward.amount;
      if (reward.type === "momentum") state.momentum += 1;
      if (reward.type === "charge") state.momentumCharges += 1;
      if (reward.type === "card" && reward.card) {
        state.knowledgeCards.unshift({
          id: `${node.id}-bonus`,
          title: reward.card.title,
          body: reward.card.body,
          at: Date.now(),
        });
      }
    } else if (node.type !== "chest") {
      state.xp += 10;
    }
    save(state);
    return state;
  }

  function rollChestReward() {
    const roll = Math.random();
    if (roll < 0.25) return { type: "momentum", label: "Momentum +1 day spark" };
    if (roll < 0.45) return { type: "charge", label: "Momentum Charge ×1" };
    if (roll < 0.8) {
      const amount = 20 + Math.floor(Math.random() * 31);
      return { type: "xp", amount, label: `${amount} XP` };
    }
    return {
      type: "card",
      label: "Bonus Knowledge Card",
      card: {
        title: "Chest knowledge",
        body: "Quick recap unlocked from a chest — revisit anytime in Knowledge.",
      },
    };
  }

  function currentNodeId(curriculum) {
    const state = load();
    for (const unit of curriculum.units) {
      for (const node of unit.nodes) {
        if (!state.completed.includes(node.id)) return node.id;
      }
    }
    return null;
  }

  return {
    load,
    save,
    hydrateFromUser,
    isComplete,
    completeNode,
    rollChestReward,
    currentNodeId,
    touchMomentum,
  };
})();
