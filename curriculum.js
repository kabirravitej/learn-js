/**
 * Learn JS curriculum assembler — 90-unit path.
 * Full bodies live in curriculum-batch-XX.js; roadmap titles in curriculum-roadmap.js.
 */
(function assembleCurriculum() {
  const roadmap = window.LEARN_JS_ROADMAP || [];
  const batches = [
    window.LEARN_JS_BATCH_01,
    window.LEARN_JS_BATCH_02,
    window.LEARN_JS_BATCH_03,
    window.LEARN_JS_BATCH_04,
    window.LEARN_JS_BATCH_05,
    window.LEARN_JS_BATCH_06,
    window.LEARN_JS_BATCH_07,
    window.LEARN_JS_BATCH_08,
    window.LEARN_JS_BATCH_09,
  ].filter(Boolean);

  const byId = new Map();
  batches.forEach((batch) => {
    (batch || []).forEach((unit) => byId.set(unit.id, unit));
  });

  function stubUnit(meta) {
    const title = meta.title;
    return {
      id: meta.id,
      section: meta.section,
      title,
      blurb: meta.blurb,
      comingSoon: true,
      nodes: [
        {
          id: `${meta.id}-concept`,
          type: "concept",
          title: `${title} — concept`,
          minutes: 6,
          summary: meta.blurb,
          knowledgeCard: `${title}: ${meta.blurb}`,
          steps: [
            {
              type: "teach",
              text: `${title} is on the Learn JS path. Full lessons for this unit arrive in an upcoming content batch — finish earlier units to unlock it in order.`,
            },
            {
              type: "teach",
              text: `Focus: ${meta.blurb}`,
            },
            {
              type: "tf",
              prompt: `“${title}” is part of the 90-unit Learn JS path.`,
              answer: true,
            },
            {
              type: "mcq",
              prompt: "What should you do until this unit’s full lessons ship?",
              choices: [
                "Skip the whole path",
                "Keep finishing earlier units in order",
                "Delete your account",
                "Only study CSS forever",
              ],
              answer: 1,
            },
          ],
        },
        {
          id: `${meta.id}-memory`,
          type: "memory",
          title: `${title} — deeper`,
          minutes: 5,
          summary: meta.blurb,
          knowledgeCard: `Remember: ${meta.blurb}`,
          steps: [
            {
              type: "teach",
              text: `When this batch lands, you’ll practice ${title.toLowerCase()} with teach steps, quizzes, and code labs where they fit.`,
            },
            {
              type: "tf",
              prompt: "Later units cover objects, DOM, classes, maps, async, and bridges to Node/React.",
              answer: true,
            },
          ],
        },
        {
          id: `${meta.id}-practice`,
          type: "practice",
          title: `${title} flashcards`,
          minutes: 4,
          cards: [
            {
              prompt: `One-line idea of ${title}?`,
              accept: [meta.blurb.split(".")[0], title, meta.section],
              explain: `Think: ${meta.blurb}`,
            },
          ],
        },
        {
          id: `${meta.id}-chest`,
          type: "chest",
          title: `${title} chest`,
          minutes: 2,
        },
        {
          id: `${meta.id}-overview`,
          type: "overview",
          title: "Recap & what’s next",
          minutes: 4,
          summary: meta.blurb,
          knowledgeCard: `Next: keep going down the path after ${title}.`,
          steps: [
            {
              type: "teach",
              text: `Placeholder overview for ${title}. Full recap content ships with its batch.`,
            },
            {
              type: "tf",
              prompt: "You can scroll the full 90-unit path anytime; locks open in order.",
              answer: true,
            },
          ],
        },
      ],
    };
  }

  const units = roadmap.map((meta) => byId.get(meta.id) || stubUnit(meta));

  window.LEARN_JS_CURRICULUM = {
    meta: {
      title: "Learn JS Path",
      totalUnits: units.length,
      pacing:
        "Short daily lessons with many quick checks. Pause anytime. Momentum rewards showing up.",
      speechNote:
        "Practice lessons use spoken answers via the Web Speech API (browser speech recognition).",
      goal:
        "Reach a level where you can start Node.js, React, other languages, or build a real website.",
    },
    units,
  };
})();
