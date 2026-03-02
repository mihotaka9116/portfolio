document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-nav'); // HTML側のIDを確認してください

  if (hamburger && nav) {
    // クリックで開閉を切り替え
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // リンクをクリックしたらメニューを閉じる
    const links = nav.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

  // スクロールふわっと表示（IntersectionObserver）
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.js-fade-up, .fade-in').forEach(el => observer.observe(el));
});
