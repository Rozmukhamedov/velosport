new WOW().init();

const offCanvasOpen = () => {
    document.getElementById('main').style.cssText = '-webkit-transform-origin: center; transform-origin: center;-webkit-transform: scale(0.8) translateX(-32vw) translateZ(0); transform: scale(0.8) translateX(-32vw) translateZ(0); overflow: hidden; height: 100vh;';
    document.getElementById('visible').style.cssText = 'transition-delay: 0; visibility: visible; opacity: 0.1;';
    document.getElementById('button_close_navbar').style.cssText = 'z-index: 3;';
    document.getElementById('menu').style.cssText = 'z-index: 3;';

}
const offCanvasClose = () => {
    document.getElementById('main').style.cssText = 'transform: none; transition: transform .3s ease-in-out;';
    document.getElementById('visible').style.cssText = 'visibility: hidden; opacity: 0.1;';
    document.getElementById('button_close_navbar').style.cssText = 'z-index: -2;';
    document.getElementById('menu').style.cssText = 'z-index: -1;';
}


$(document).ready(function () {
    function initSlickDotsProgressBar(f) {

        var $fullbanner = $(".fullbanner");
        var percentTime;
        var tick;
        var time = 1;
        var progressBarIndex = 0;
        var quantityOfSlides = $fullbanner.find('.progressBarContainer li').length;

        $fullbanner.find('.slick-dots').addClass('progressBarContainer');
        $fullbanner.find('.slick-dots button').addClass('progressBar');

        $('.progressBarContainer .progressBar').each(function (index) {
            var progress = "<div class='inProgress inProgress" + index + "'></div>";
            $(this).html(progress);
            $(this).attr('data-slick-index', index);
        });

        function startProgressbar() {
            resetProgressbar();
            percentTime = 0;
            tick = setInterval(interval, 10);
        }

        function interval() {
            if (($fullbanner.find('.slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
                progressBarIndex = $fullbanner.find('.slick-track div[aria-hidden="false"]').data("slickIndex");
                startProgressbar();
            } else {
                percentTime += 1 / (time + 5);
                $('.inProgress' + progressBarIndex).css({
                    width: percentTime + "%"
                });
                if (percentTime >= 100) {
                    $fullbanner.slick('slickNext');
                    progressBarIndex++;
                    if (progressBarIndex > quantityOfSlides - 1) {
                        progressBarIndex = 0;
                    }
                    startProgressbar();
                }
            }
        }

        function resetProgressbar() {
            $('.inProgress').css({
                width: 0 + '%'
            });
            clearInterval(tick);
        }

        startProgressbar();

        $fullbanner.find('.slick-dots li').click(function () {
            clearInterval(tick);
            var goToThisIndex = $(this).find("button").data("slickIndex");
            $fullbanner.slick('slickGoTo', goToThisIndex, false);
            startProgressbar();
        });

    }



    var $fullbanner = $(".fullbanner");
    if ($fullbanner.length) {
        $fullbanner.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            dots: true,
            arrows: false,
        });
        initSlickDotsProgressBar($fullbanner);
    }

});


$('.slick-carousel').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});


$(".slider").slick({
    fade: true,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
});

//ticking machine
var percentTime;
var tick;
var time = .1;
var progressBarIndex = 0;

$('.progressBarContainer .progressBar').each(function (index) {
    var progress = "<div class='inProgress inProgress" + index + "'></div>";
    $(this).html(progress);
});

function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
}

function interval() {
    if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
        progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
        startProgressbar();
    } else {
        percentTime += 1 / (time + 5);
        $('.inProgress' + progressBarIndex).css({
            width: percentTime + "%"
        });
        if (percentTime >= 100) {
            $('.single-item').slick('slickNext');
            progressBarIndex++;
            if (progressBarIndex > 2) {
                progressBarIndex = 0;
            }

            startProgressbar();
        }
    }
}

function resetProgressbar() {

    $('.inProgress').css({
        width: 0 + '%'
    });
    clearInterval(tick);
}
startProgressbar();
// End ticking machine

$('.item').click(function () {
    clearInterval(tick);
    var goToThisIndex = $(this).find("span").data("slickIndex");
    $('.single-item').slick('slickGoTo', goToThisIndex, false);
    startProgressbar();
});