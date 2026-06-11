/* ============================================================
   ABCO RESIDENTIAL GROUP — main.js
   Version: 1.0 | June 2025
============================================================ */

// ── Sticky nav on scroll ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile menu ──
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('hamburger');
  if (!menu) return;
  const open = menu.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', open);
}
function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn  = document.getElementById('hamburger');
  if (menu) menu.classList.remove('open');
  if (btn)  btn.setAttribute('aria-expanded', 'false');
}
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburger');
  if (btn) btn.addEventListener('click', toggleMobileMenu);
});

// ── Sell Your Property form submit ──
function handleSYPSubmit() {
  const addr  = document.getElementById('syp-address');
  const name  = document.getElementById('syp-name');
  const phone = document.getElementById('syp-phone');
  if (!addr || !name || !phone) return;
  if (!addr.value.trim() || !name.value.trim() || !phone.value.trim()) {
    alert('Please fill in your property address, name, and phone number.');
    return;
  }
  const success = document.getElementById('sypSuccess');
  if (success) success.classList.add('show');
  // Meta Pixel Lead event (fires once Pixel ID is set)
  if (typeof fbq !== 'undefined') { fbq('track', 'Lead'); }
  ['syp-address','syp-name','syp-phone','syp-email'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const src = document.getElementById('syp-source');
  if (src) src.value = '';
}

// ── Contact form submit ──
function handleContactSubmit() {
  const name  = document.getElementById('c-name');
  const email = document.getElementById('c-email');
  const msg   = document.getElementById('c-msg');
  if (!name || !email || !msg) return;
  if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
    alert('Please fill in your name, email, and message.');
    return;
  }
  const success = document.getElementById('contactSuccess');
  if (success) success.classList.add('show');
  // Meta Pixel Contact event
  if (typeof fbq !== 'undefined') { fbq('track', 'Contact'); }
  ['c-name','c-email','c-phone','c-msg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

// ── Fade-in on scroll ──
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
