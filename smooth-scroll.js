(function() {
  var current = window.scrollY || 0;
  var target = current;
  var ease = 0.12;
  var ticking = false;

  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  }

  function update() {
    current += (target - current) * ease;
    if (Math.abs(target - current) < 0.5) current = target;
    window.scrollTo(0, current);
    ticking = false;
    requestAnimationFrame(update);
  }

  function onWheel(e) {
    // Only smooth scroll vertical wheel/deltaY events
    if (!e.deltaY) return;
    e.preventDefault();
    target = clamp(target + e.deltaY, 0, document.body.scrollHeight - window.innerHeight);
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('resize', function() {
    target = clamp(target, 0, document.body.scrollHeight - window.innerHeight);
  });

  // Kick off the animation loop so scroll position stays in sync when the page loads.
  requestAnimationFrame(update);
})();
