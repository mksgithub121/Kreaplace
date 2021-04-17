$(function () {

    /*     // preloader code start here
        $(window).on("load", function () {
            $(".preloader").addClass("complete");
        });
        // preloader code end here 
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

     */
    // mixitup for project section
    $('.banner_mixitup').mixItUp({});
    // Counter
    $('.spring').counterUp({
        delay: 15,
        time: 2000
    });
    //   scroll animation aos plugin code start here
    AOS.init();
    //  scroll down to hide navbar  and scroll top to show navbar
    $(window).on("scroll", function () {
        var scrollAmount = $(window).scrollTop();
        if (scrollAmount > 50) {
            $("#header_section").addClass("sticky");
        } else {
            $("#header_section").removeClass("sticky");
        }
    });
    //  Smooth section scroll code start here  
    $("#header_section  ul li a").on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 90
        }, 1000, 'swing', function () {
            // window.location.hash = target;
        });
    });
    $(".project_section .project_dropdown span ").on("click", function () {
        $(".project_section .project_dropdown ul").slideToggle();
    });
    //mobile menu
    $(".mobile_menu").click(function () {
        $("#header_section").toggleClass("mobileActive");
    });
    $("#header_section .search i").click(function () {
        $("#header_section .search").toggleClass("active");
    });
    // slick slider for banner
    $('.banner_slider').slick({
        autoplay: true,
        arrows: false,
    });
});