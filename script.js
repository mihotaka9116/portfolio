document.addEventListener('DOMContentLoaded', () => {
    /* =================================================
       1. ハンバーガーメニュー & スムーズスクロール
    ================================================= */
    const hamburger = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');

    if (hamburger && nav) {
        // メニュー開閉
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // リンクをクリックしたらメニューを閉じてスムーズ移動
        const links = nav.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');

                const href = link.getAttribute('href');
                // ページ内リンク（#から始まる）かつ別ページへの遷移でない場合
                if (href.startsWith('#') && href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerHeight = 80; // ヘッダーの高さに合わせて調整
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    /* =================================================
       2. スクロールふわっと表示 (IntersectionObserver)
    ================================================= */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-show');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.js-fade-up, .fade-in').forEach(el => observer.observe(el));

    /* =================================================
       3. Splide.js (実績カルーセル)
    ================================================= */
    if (document.querySelector('#work-carousel')) {
        new Splide('#work-carousel', {
            type   : 'loop',
            padding: '5%',
            gap    : '20px',
            perPage: 3,
            autoplay: true,
            interval: 3000,
            speed: 800,
            breakpoints: {
                1024: { perPage: 2 },
                640: {
                    perPage: 1,
                    padding: '10%',
                },
            },
        }).mount();
    }
});

/* =================================================
   4. モーダル制御 (jQuery)
================================================= */
// HTMLから `onclick="openWorkModal(...)"` で呼び出すため、
// document.readyの外側に定義します。

function openWorkModal(imgSrc, title, desc, siteUrl) {
    $('#modal-img').attr('src', imgSrc);
    $('#modal-title').text(title);
    $('#modal-desc').text(desc);
    
    // サイトURLがある場合はリンクを表示、ない場合は非表示にする
    if (siteUrl) {
        $('#modal-link').attr('href', siteUrl).show();
    } else {
        $('#modal-link').hide();
    }

    $('#work-detail-modal').fadeIn(300).css('display', 'flex');
    $('body').css('overflow', 'hidden'); 
}

function closeWorkModal() {
    $('#work-detail-modal').fadeOut(300);
    $('body').css('overflow', ''); 
}

// エスケープキーで閉じる
$(document).keydown(function(e) {
    if (e.keyCode == 27) closeWorkModal();
});
