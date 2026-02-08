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
