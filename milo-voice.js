window.LearnJSMiloVoice = (() => {
  let miloVoice = null;

  const MALE_VOICE_PREFERENCES = [
    /daniel/i,
    /aaron/i,
    /reed/i,
    /eddy/i,
    /rocko/i,
    /gordon/i,
    /arthur/i,
    /rishi/i,
    /google uk english male/i,
    /microsoft david/i,
    /microsoft mark/i,
    /microsoft guy/i,
    /alex(?!a)/i,
    /fred/i,
    /male/i,
  ];

  const FEMALE_VOICE_BLOCK =
    /samantha|karen|moira|tessa|veena|fiona|victoria|zira|susan|hazel|female|siri|jenny|aria|sara|sonia/i;

  function scoreMiloVoice(voice) {
    const label = `${voice.name} ${voice.lang}`;
    if (FEMALE_VOICE_BLOCK.test(label)) return -100;
    let score = 0;
    if (/^en(-|_)/i.test(voice.lang) || /^en$/i.test(voice.lang)) score += 20;
    if (/en-GB/i.test(voice.lang)) score += 8;
    if (/en-US/i.test(voice.lang)) score += 6;
    if (voice.localService) score += 12;
    MALE_VOICE_PREFERENCES.forEach((re, index) => {
      if (re.test(voice.name)) score += 40 - index;
    });
    return score;
  }

  function pickMiloVoice() {
    const voices = window.speechSynthesis?.getVoices?.() || [];
    if (!voices.length) return null;
    const ranked = [...voices].sort((a, b) => scoreMiloVoice(b) - scoreMiloVoice(a));
    const best = ranked[0];
    return best && scoreMiloVoice(best) > 0
      ? best
      : ranked.find((v) => /^en/i.test(v.lang)) || null;
  }

  function refresh() {
    miloVoice = pickMiloVoice();
  }

  if (typeof window !== "undefined" && window.speechSynthesis) {
    refresh();
    window.speechSynthesis.addEventListener("voiceschanged", refresh);
  }

  function speak(text) {
    if (!window.speechSynthesis || !text) return;
    window.speechSynthesis.cancel();
    if (!miloVoice) refresh();
    const utter = new SpeechSynthesisUtterance(text);
    if (miloVoice) utter.voice = miloVoice;
    utter.lang = miloVoice?.lang || "en-GB";
    utter.rate = 0.96;
    utter.pitch = 0.92;
    utter.volume = 1;
    window.speechSynthesis.speak(utter);
  }

  function stop() {
    window.speechSynthesis?.cancel?.();
  }

  return { speak, stop, refresh };
})();
