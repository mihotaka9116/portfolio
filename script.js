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


// リンクをクリックしたらメニューを閉じて、その場所へ飛ぶ
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        // メニューを閉じる
        hamburger.classList.remove('active');
        nav.classList.remove('active');

        // ページ内リンク（#conceptなど）の場合の処理
        const href = link.getAttribute('href');
        if (href.startsWith('#') && href !== '#') {
          e.preventDefault(); // 一旦デフォルトの動きを止める
          const target = document.querySelector(href);
          if (target) {
            // 到着位置の計算（ヘッダー分を引く）
            const headerHeight = 80; 
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            // スムーズに移動
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
