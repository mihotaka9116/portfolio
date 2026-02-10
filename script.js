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

const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});

// メニュー内のリンクをクリックしたらメニューを閉じる
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    nav.classList.remove('is-active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-nav');

  // ボタンクリックでメニュー開閉
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // メニュー内のリンクをクリックしたら閉じる（ページ内リンク対策）
  const links = document.querySelectorAll('.nav-menu a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });
});
