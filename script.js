document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-nav');

  // ハンバーガーボタンをクリックした時
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // メニュー内のリンクをクリックした時（メニューを閉じる）
  const links = document.querySelectorAll('#js-nav a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });
});

  // --- 2. ふわっと表示 (Intersection Observer) ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.js-fade-up').forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  // 1. Intersection Observer for Scroll Reveals
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Stops observing once revealed
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1
  });

  const revealElements = document.querySelectorAll('.js-reveal');
  revealElements.forEach(el => revealObserver.observe(el));

  // 2. Hamburger Menu Toggle
  const hamburger = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });
});
