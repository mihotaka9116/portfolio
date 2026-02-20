// 交差監視でふわっと表示
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(target => {
    fadeObserver.observe(target);
});


// スクロールに合わせてふわっと表示させるスクリプト
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.js-fade-up').forEach(el => observer.observe(el));

// お問い合わせフォームの送信擬似体験
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // 実際の送信を止める
        
        // ボタンを「送信中...」に変える演出
        const submitBtn = contactForm.querySelector('input[type="submit"]');
        const originalText = submitBtn.value;
        submitBtn.value = 'SENDING...';
        submitBtn.style.opacity = '0.5';
        submitBtn.disabled = true;

        // 1.5秒後に完了メッセージを出す
        setTimeout(() => {
            alert('お問い合わせありがとうございます！内容を確認次第、ご連絡させていただきます。（※これはデモ用の演出です）');
            submitBtn.value = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
            contactForm.reset(); // 入力内容をクリア
        }, 1500);
    });
}


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

$(function () {
  // ハンバーガーメニューのクリックイベント
  $('#js-hamburger').on('click', function () {
    $(this).toggleClass('active'); // 三本線を×にするためのクラス
    $('#js-nav').toggleClass('active'); // メニューを出すためのクラス
  });

  // メニュー内のリンクをクリックしたらメニューを閉じる
  // (これがないと、リンクを押してもメニューが開いたままになります)
  $('#js-nav a').on('click', function () {
    $('#js-hamburger').removeClass('active');
    $('#js-nav').removeClass('active');
  });
});
