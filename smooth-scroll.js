(function() {
  var current = window.scrollY || 0;
  var target = current;
  var ease = 0.08;
  var ticking = false;

  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  }

  function update() {
    var diff = target - current;
    current += diff * ease;
    if (Math.abs(diff) < 1) current = target;
    window.scrollTo(0, current);
    if (current !== target) {
      requestAnimationFrame(update);
    } else {
      ticking = false;
    }
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
