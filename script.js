// ── HAMBURGER MENU ──
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
    btn.classList.remove('open');
  }
});

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 100);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ── FORM SUBMIT ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.submit-btn');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}