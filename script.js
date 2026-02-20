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

    if (info.top < window.innerHeight - triggerPoint) {
      fadeUp[i].classList.add('is-show');
    }
  }
});
