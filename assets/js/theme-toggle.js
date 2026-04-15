(function () {
  var STORAGE_KEY = 'theme';
  var root = document.documentElement;

  function apply(theme) {
    root.setAttribute('data-theme', theme);
  }

  function current() {
    return root.getAttribute('data-theme') || 'light';
  }

  function toggle() {
    var next = current() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    apply(next);
  }

  function wire() {
    var btn = document.querySelector('.theme-toggle');
    if (btn) btn.addEventListener('click', toggle);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }
})();
