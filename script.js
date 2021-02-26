$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    /* Animowany text */

    var typed = new Typed(".typing", {
        strings: ["Designerem", "Streamerem", "Developerem"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    /* Scroll do góry */

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    /* Włącz/wyłącz menu */

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    /* Portfolio filter */

    $('.list').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.itemBox').show('1000');
        } else {
            $('.itemBox').not('.' + value).hide('1000')
            $('.itemBox').filter('.' + value).show('1000')
        }
    })

    /* Portfolio tagi */

    $('.list').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.gallery ul li a').click(function() {
        var itemID = $(this).attr('href');
        $('.gallery ul').addClass('item_open');
        $(itemID).addClass('item_open');
        return false;
    });
    $('.close').click(function() {
        $('.port, .gallery ul').removeClass('item_open');
        return false;
    });

    $(".gallery ul li a").click(function() {
        $('html, body').animate({
            scrollTop: parseInt($("#top").offset().top)
        }, 400);
    });

});