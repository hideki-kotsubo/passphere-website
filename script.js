// Copyright year
document.getElementById('copyright-year').textContent = new Date().getFullYear();

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    var answer = btn.nextElementSibling;

    // Close all other open items
    document.querySelectorAll('.faq-question[aria-expanded="true"]').forEach(function (other) {
      if (other !== btn) {
        other.setAttribute('aria-expanded', 'false');
        other.nextElementSibling.classList.remove('is-open');
      }
    });

    // Toggle this item
    btn.setAttribute('aria-expanded', String(!isOpen));
    answer.classList.toggle('is-open', !isOpen);
  });
});

// Navbar scroll shadow
(function () {
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 8) {
      navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,.08)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }, { passive: true });
})();
