document.addEventListener('DOMContentLoaded', () => {
  // --- 1. ハンバーガーメニュー ---
  const hamburger = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // リンクをクリックしたらメニューを閉じる
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

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
