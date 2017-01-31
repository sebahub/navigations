$(function(){


//*** fixed on scroll ***//

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 75) {
            $('nav').addClass('fixed');
        }
        else {
            $('nav').removeClass('fixed');
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 75) {
            $('.topbar.fixed.two').addClass('resize');
        }
        else {
            $('.topbar.fixed.two').removeClass('resize');
        }
    });



    $(".li_nav1").click(function(){
        $("nav").addClass("nav_one");
        $(".topbar").removeClass("fixed")
        $("nav").removeClass("nav_two");
        $("nav").removeClass("nav_three");
        $("nav").removeClass("nav_four");
        $("nav").removeClass("nav_five");
    });

    $(".li_nav2").click(function(){
        $("nav").addClass("nav_two");
        $(".topbar").addClass("fixed");
        $(".topbar").addClass("two");
        $("nav").removeClass("nav_one");
        $("nav").removeClass("nav_three");
        $("nav").removeClass("nav_four");
        $("nav").removeClass("nav_five");
    });

    $(".li_nav3").click(function(){
        $("nav").addClass("nav_three");
        $("nav").removeClass("nav_one");
        $("nav").removeClass("nav_two");
        $("nav").removeClass("nav_four");
        $("nav").removeClass("nav_five");
    });



});
