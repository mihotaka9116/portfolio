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

$(function(){
  // ページ内リンクをクリックした時の処理
  $('a[href^="#"]').click(function(){
    // クリックした要素のhref属性（#about など）を取得
    var href= $(this).attr("href");
    // 移動先を取得（# のみの場合は top、それ以外は対象要素）
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値（高さ）で取得
    var position = target.offset().top - 70; // ヘッダーの高さ分（70px）引く
    
    // スムーズスクロール（速度 500ミリ秒）
    $("html, body").animate({scrollTop:position}, 500, "swing");
    
    // スマホ用メニューが開いている場合は閉じる
    $('#js-nav').removeClass('active');
    $('#js-hamburger').removeClass('active');
    
    return false;
  });
});

function openWorkModal(imgSrc, title, desc) {
    $('#modal-img').attr('src', imgSrc);
    $('#modal-title').text(title);
    $('#modal-desc').text(desc);
    $('#work-detail-modal').css('display', 'flex');
    $('body').css('overflow', 'hidden'); // 背後のスクロールを止める
}

function closeWorkModal() {
    $('#work-detail-modal').hide();
    $('body').css('overflow', 'auto');
}

// エスケープキーでも閉じられるようにする（親切設計）
$(document).keydown(function(e) {
    if (e.keyCode == 27) closeWorkModal();
});
