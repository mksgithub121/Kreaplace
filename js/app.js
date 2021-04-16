$(function () {

    /*     // preloader code start here
        $(window).on("load", function () {
            $(".preloader").addClass("complete");
        });
        // preloader code end here 

        //   scroll animation aos plugin code start here
        AOS.init();
        //  scroll animation aos plugin code end here  

        // Sticky menu js code start here 

        //  scroll down to hide navbar  and scroll top to show navbar

        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > 50 && prevScrollpos > currentScrollPos) {
                $(".header_section").addClass("sticky");
            } else {
                $(".header_section").removeClass("sticky");
            }
            prevScrollpos = currentScrollPos;
        }


        //  scroll down to show navbar 


        $(window).on("scroll", function () {
            var scrollAmount = $(window).scrollTop();
            if (scrollAmount > 200) {
                $(".header_section").addClass("sticky");
            } else {
                $(".header_section").removeClass("sticky");
            }
        });

        // Sticky menu js code end here
        // Back To Top button start here

        $(window).on("scroll", function () {
            var scrollAmount = $(window).scrollTop();
            if (scrollAmount > 200) {
                $(".backToTop").slideDown();

            } else {
                $(".backToTop").slideUp();
            }
        });
        $(".backToTop i").on("click", function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1500);
        });
        // Back To Top button end here

        //  Smooth section scroll code start here  
        $(".header_section .menu ul li a").on('click', function (e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1000, 'swing', function () {
                // window.location.hash = target;
            });
        });
        //  Smooth section scroll code end here
        $('.wrapper').pagepiling({
            menu: null,
            direction: 'vertical',
            verticalCentered: true,
            sectionsColor: [],
            anchors: [],
            scrollingSpeed: 700,
            easing: 'swing linear',
            loopBottom: false,
            loopTop: false,
            css3: true,
            navigation: {
                'textColor': '#000',
                'bulletsColor': '#000',
                'position': 'right',
                'tooltips': ['d1', 'd2', 'd3']
            },
            normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 5,
            keyboardScrolling: true,
            sectionSelector: 'section',
            animateAnchor: false,

            //events
            onLeave: function (index, nextIndex, direction) {},
            afterLoad: function (anchorLink, index) {},
            afterRender: function () {},
        }); */

    // slick slider for banner
    $('.banner_slider').slick({
        autoplay: true,
        arrows: false,
    });
});