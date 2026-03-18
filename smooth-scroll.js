(function() {
  let current = window.scrollY;
  let target = window.scrollY;
  let ease = 1;

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function update() {
    current = lerp(current, target, ease);
    window.scrollTo(0, current);
    requestAnimationFrame(update);
  }

  update();

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    target += e.deltaY * 1.2; // Adjust sensitivity
    target = Math.max(0, Math.min(document.body.scrollHeight - window.innerHeight, target));
  });
})();
