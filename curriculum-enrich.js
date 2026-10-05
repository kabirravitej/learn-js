
(function enrichCurriculum() {
  const root = window.LEARN_JS_CURRICULUM;
  if (!root) return;
  root.units.forEach((unit) => {
    unit.nodes.forEach((node) => {
      (node.steps || []).forEach((step) => {
        if (step.type === "teach" || step.hint) return;
        if (step.type === "tf") {
          step.hint = step.answer
            ? "Hint from Milo: this matches what we just covered — pick True."
            : "Hint from Milo: something in this statement does not match the lesson — pick False.";
          step.explain =
            "You picked {chosen}. The right call was {correct}, because it matches the fact we practiced in this unit.";
        } else if (step.choices && typeof step.answer === "number") {
          const correct = step.choices[step.answer];
          step.hint = `Hint from Milo: think about “${correct}” — that idea is in the lesson.`;
          step.explain =
            "You picked {chosen}. You were supposed to pick {correct}. Re-read the teach tip above and match the key idea.";
        }
      });
      (node.cards || []).forEach((card) => {
        if (!card.hint) {
          card.hint = `Hint from Milo: try an answer like “${card.accept[0]}”.`;
        }
        if (!card.explain) {
          card.explain = `Your answer did not match. A solid response is “${card.accept[0]}”, which is what this card is checking.`;
        }
      });
    });
  });
})();
