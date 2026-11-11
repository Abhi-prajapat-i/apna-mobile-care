/* ===== Apna Mobile Care – basic interactions ===== */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* Hamburger menu */
  var burger = $('#burger'), menu = $('#menu');
  function setMenu(open) {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.firstElementChild.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }
  burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  /* Active nav link (smooth scrolling is handled in CSS) */
  var links = $$('nav a[href^="#"]:not(.btn)', menu);
  var sections = links.map(function (a) { return $(a.getAttribute('href')); });
  function markActive() {
    var y = window.scrollY + 120, current = null;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= y) current = i; });
    links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
  }

  /* Back-to-top button */
  var totop = $('#totop');
  totop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  window.addEventListener('scroll', function () {
    totop.classList.toggle('show', window.scrollY > 500);
    markActive();
  }, { passive: true });
  markActive();

  /* Scroll reveal */
  var items = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  /* Gallery lightbox */
  var lb = $('#lb'), box = $('.lb-box', lb), cap = $('#lbc'), icon = $('i', box), lastBtn = null;
  function openLb(btn) {
    lastBtn = btn;
    box.style.backgroundImage = btn.style.backgroundImage; // shows the real photo when one exists
    icon.className = 'fa-solid ' + btn.getAttribute('data-ic');
    cap.textContent = btn.getAttribute('data-cap');
    lb.hidden = false;
    $('#lbx').focus();
  }
  function closeLb() { lb.hidden = true; if (lastBtn) lastBtn.focus(); }
  $$('.gi').forEach(function (b) { b.addEventListener('click', function () { openLb(b); }); });
  $('#lbx').addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

  /* Footer year */
  $('#yr').textContent = new Date().getFullYear();
})();
