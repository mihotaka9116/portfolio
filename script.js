// 1. スクロールに合わせてふわっと表示させる（IntersectionObserver）
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show');
      // .fade-in クラスを使っている場合にも対応
      entry.target.classList.add('is-active');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.js-fade-up, .fade-in').forEach(el => observer.observe(el));

// 2. お問い合わせフォームの送信擬似体験
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const submitBtn = contactForm.querySelector('input[type="submit"]');
        const originalText = submitBtn.value;
        submitBtn.value = 'SENDING...';
        submitBtn.style.opacity = '0.5';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('お問い合わせありがとうございます！内容を確認次第、ご連絡させていただきます。（※これはデモ用の演出です）');
            submitBtn.value = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
            contactForm.reset(); 
        }, 1500);
    });
}

// 3. ハンバーガーメニューの制御（DOMContentLoaded内で実行）
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-nav');

  // 要素が存在するか確認してからイベントをつける
  if (hamburger && nav) {
    // ボタンをクリックした時
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
  }
});

window.addEventListener('scroll', function() {
  const fadeUp = document.querySelectorAll('.js-fade-up');
  
  for (let i = 0; i < fadeUp.length; i++) {
    const info = fadeUp[i].getBoundingClientRect(); // 要素の位置を取得
    const triggerPoint = 150; // 画面下からどのくらいで発動させるか

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    if (info.top < window.innerHeight - triggerPoint) {
      fadeUp[i].classList.add('is-show');
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('js-hamburger');
    const nav = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        // hamburgerにactiveクラスを付与（三本線を×にする用）
        hamburger.classList.toggle('active');
        // nav-menuにopenクラスを付与（メニューを出す用）
        nav.classList.toggle('open');
    });

    // メニュー内のリンクをクリックしたらメニューを閉じる
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
        });
    });
});

/* ハンバーガーボタンの三本線の基本スタイル */
.hamburger-menu span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: #4682b4; /* 閉じている時は青 */
    margin-bottom: 6px;
    transition: 0.3s;
}

/* メニューが開いている時（active）のスタイル */
.hamburger-menu.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    background-color: #fff; /* 開いている時は白（背景が濃い想定） */
}
.hamburger-menu.active span:nth-child(2) {
    opacity: 0;
}
.hamburger-menu.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    background-color: #fff;
}

/* --- ハンバーガーボタンのアニメーション --- */
/* 開いた時（activeクラス時）の三本線の動き */
.hamburger-menu.active span:nth-child(1) {
    transform: translateY(11px) rotate(45deg);
    background-color: #ffffff; /* メニュー背景に合わせて白に */
}
.hamburger-menu.active span:nth-child(2) {
    opacity: 0; /* 真ん中の線を消す */
}
.hamburger-menu.active span:nth-child(3) {
    transform: translateY(-11px) rotate(-45deg);
    background-color: #ffffff; /* メニュー背景に合わせて白に */
}
