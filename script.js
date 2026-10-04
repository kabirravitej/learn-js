document.querySelector(".cta")?.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    event.preventDefault();
    event.currentTarget.click();
  }
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setupReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

function setupParallax() {
  const nodes = Array.from(document.querySelectorAll("[data-parallax]"));
  if (!nodes.length || reduceMotion) return;

  const layers = nodes.map((el) => {
    const style = getComputedStyle(el);
    let rotate = 0;
    if (style.transform && style.transform !== "none") {
      const match = style.transform.match(/matrix\(([^)]+)\)/);
      if (match) {
        const parts = match[1].split(",").map(Number);
        rotate = Math.round(Math.atan2(parts[1], parts[0]) * (180 / Math.PI));
      }
    }

    return {
      el,
      speed: Number(el.dataset.parallax) || 0,
      rotate,
      fixed:
        style.position === "fixed" ||
        Boolean(el.closest(".atmosphere, .float-layer")),
      top: 0,
      height: 0,
    };
  });

  function measure() {
    const scrollY = window.scrollY || window.pageYOffset;
    layers.forEach((layer) => {
      if (layer.fixed) return;
      const rect = layer.el.getBoundingClientRect();
      layer.top = rect.top + scrollY;
      layer.height = rect.height;
    });
  }

  let ticking = false;

  function update() {
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportH = window.innerHeight;
    const viewCenter = scrollY + viewportH / 2;

    layers.forEach((layer) => {
      if (!layer.speed) return;

      let offset;
      if (layer.fixed) {
        offset = scrollY * layer.speed * -0.55;
      } else {
        const elCenter = layer.top + layer.height / 2;
        offset = (viewCenter - elCenter) * layer.speed * -0.45;
      }

      layer.el.style.transform = layer.rotate
        ? `translate3d(0, ${offset.toFixed(2)}px, 0) rotate(${layer.rotate}deg)`
        : `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  function onResize() {
    layers.forEach((layer) => {
      layer.el.style.transform = layer.rotate ? `rotate(${layer.rotate}deg)` : "";
    });
    measure();
    update();
  }

  measure();
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
}

function setupShowcaseMarquee() {
  const track = document.querySelector(".showcase-track");
  if (!track) return;

  // Duplicate the set so translate(-50%) loops without a jump.
  track.innerHTML += track.innerHTML;
}

setupReveal();
setupParallax();
setupShowcaseMarquee();
