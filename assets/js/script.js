$(document).ready(function () {
    window.onscroll = function () {
        myFunction()
    };
    var nav = document.querySelector("header");
    var header = document.querySelector(".for-fixed");

    var prt = nav.parentElement;

    var sticky = nav.offsetTop+200;

    function myFunction() {
        var wdth = window.innerWidth
        if (wdth < 270) {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
                prt.classList.add('menu-change');
                header.style.paddingTop = '0';

            } else {
                nav.classList.remove("sticky");
                prt.classList.remove('menu-change');
                header.style.paddingTop = '0';
            }
        } else {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
                prt.classList.add('menu-change');
            } else {
                nav.classList.remove("sticky");
                prt.classList.remove('menu-change');
            }
        }
    }
});


$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 300) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'width': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
        }

    });
    $('.sidenav ul li a').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
});

var vids = $("video");
$.each(vids, function(){
    this.controls = false;
});

var swiper = new Swiper(".honest-Swiper", {
    slidesPerView: "auto",
    freeMode: true,
    slideToClickedSlide: true,
    spaceBetween: 10,
    mousewheel: true,
    breakpoints: {
        '1300': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var barbSwiper = new Swiper(".barbecue-swiper", {
    spaceBetween: 20,
    slidesPerView: "auto",
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    mousewheel: true,
    breakpoints: {
        '1300': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: false,
        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".barbecue-button-next",
        prevEl: ".barbecue-button-prev",
    },
});



$('.menu a').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top - 10;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});

