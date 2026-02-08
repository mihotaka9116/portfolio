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

