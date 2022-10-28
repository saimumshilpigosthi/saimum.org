//Preloader js Start
$(window).on('load', function () {
    // $('.preloader').delay(1000).fadeOut();
    $('.preloader').fadeOut();
});
//Preloader js Ends

// DAY NIGHT MODE JS START 
var darkMode;

if (localStorage.getItem('dark-mode')) {
    // if dark mode is in storage, set variable with that value
    darkMode = localStorage.getItem('dark-mode');
} else {
    // if dark mode is not in storage, set variable to 'light'
    darkMode = 'light';
}

// set new localStorage value
localStorage.setItem('dark-mode', darkMode);


if (localStorage.getItem('dark-mode') == 'dark') {
    // if the above is 'dark' then apply .dark to the body
    $('body').addClass('dark');
    // hide the 'dark' button
    $('.dark-button').hide();
    // show the 'light' button
    $('.light-button').show();
} else {
    $('.light-button').hide();
}

// Toggle dark UI

$('.dark-button').on('click', function () {
    $('.dark-button').hide();
    $('.light-button').show();
    $('body').addClass('dark');
    // set stored value to 'dark'
    localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function () {
    $('.light-button').hide();
    $('.dark-button').show();
    $('body').removeClass('dark');
    // set stored value to 'light'
    localStorage.setItem('dark-mode', 'light');
});
// DAY NIGHT MODE JS END 


// Header JS Start 
$(function () {
    // alert("ok");
});
// Header JS Ends

$(document).ready(function () {
    // alert("ok");


    // banner_simple_slider Start 
    $('.banner_simple_slider_wrap').slick({
        arrows: true,
        prevArrow: ".banner_simple_slider .left_btn",
        nextArrow: ".banner_simple_slider .right_btn",
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        // variableWidth: true,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        // vertical: true,
        // focusOnSelect: true,
        // responsive: [
        //     {
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //     }
        //     },
        //     {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        //     },
        //     {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        //     }
        // ]
    });
    // banner_simple_slider End


    // department_area_slider Start 
    $('.department_slider_wrap').slick({
        arrows: true,
        prevArrow: ".department_area .left_btn",
        nextArrow: ".department_area .right_btn",
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        // centerMode: true,
        // variableWidth: true,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 5000,
        fade: false,
        cssEase: 'linear',
        // vertical: true,
        // focusOnSelect: true,
        // responsive: [
        //     {
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //     }
        //     },
        //     {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        //     },
        //     {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        //     }
        // ]
    });
    // department_area_slider End


// OFFCANVUS  RIGHT PANEL JS START 

    
    $('.offcanvas .content .header_shortcut').on('click', function () {
        $('.offcanvas .content .header_shortcut').removeClass('active');
        $(this).toggleClass('active');
    });

    $(".header_shortcut, .navbar-toggler").click(function() {
        $('.header_shortcut').removeClass('active');
        $(this).addClass('active');

        // copy header right cuicklbar code and paste 
        // var header_shortcut = $(".header_area .body_right").html();
        // $(".offcanvas-header .content").html(header_shortcut);

        // fix padding margin of offcanvus exact to header quick bar 
        var body_padding = $("body").css('padding-right');

        $(".offcanvas-header .content").css("padding-right", body_padding);
        $(".offcanvas-header .sub_content").css("padding-right", body_padding);
        
        var header_left_width = $("header .body_left").width();
        // var header_left_width = 275;

        var string = body_padding;
        var body_padding = string.match(/\d/g);
        var body_padding_number = body_padding.join("");

        var header_left_width_with_body_padding = Number(header_left_width) + Number(body_padding_number);

        var right_col_padding_right = $("#body_right").css('padding-right');
        var left_col_padding_right = $("#body_right").css('padding-left');
        
        var right_col_padding_right = right_col_padding_right.match(/\d/g);
        var right_col_padding_right = right_col_padding_right.join("");

        var left_col_padding_right = left_col_padding_right.match(/\d/g);
        var left_col_padding_right = left_col_padding_right.join("");

        var total_offcanvus_width = Number(header_left_width_with_body_padding) + Number(right_col_padding_right) + Number(left_col_padding_right)
        // alert(total_offcanvus_width);

        $(".offcanvas").width(total_offcanvus_width);
        $(".navbar .offcanvas").width(total_offcanvus_width - body_padding_number);
    });

    // OFFCANVUS RIGHT PANEL JS END
    $(".search_icon_tab .search_icon").click(function () {
        $(".search_bar_mini").addClass("active");
    });
    $(".search_cancel_mini .cancel_icon").click(function () {
        $(".search_bar_mini").removeClass("active");
    });

    $(".search_icon_phone .search_icon").click(function () {
        $(".search_bar_mini").addClass("active");
        $(".offcanvas-backdrop").click();
    });


    // Color picker js start 
    
    // Color picker js end 


    //Sticky video side js Start
    $(".video_side").on('scroll', function () {
        var scrollAmount = $(".video_side").scrollTop();
        var sticky = $(".video").height();
        var content_height = $(".video_content").height()

        if (scrollAmount > sticky) {
            $(".video_content").addClass("mini_view");
            var sticky_height = $(".video_content").height();
            $(".medium_gap").css("padding-top", Number(content_height) - 100);
            $(".video_side").removeClass("pt-3");
        } 
        else {
            $(".video_content").removeClass("mini_view");
            $(".medium_gap").css("padding-top", "0");
            $(".video_side").addClass("pt-3");
        }
    });

    $(window).on('scroll', function () {
        var scrollAmount = $(window).scrollTop();

        if (scrollAmount > 75) {
            $(".video_side").addClass("phone_view");
            $(".video_title").slideUp("slow", function () {
                $(".video_title").hide();
            });
            $(".content_action").hide();
            var content_action = $(".content_action").html();
            $(".content_action_phone").html(content_action);
            var video_height = $(".video_side").height();
            $(".content_side").css("padding-top", video_height);
        } 
        else {
            $(".video_side").removeClass("phone_view");
            $(".video_title").slideDown("slow", function () {
                $(".video_title").show();
            });
            $(".content_action").show();
            $(".content_action_phone").html("");
            $(".content_side").css("padding-top", "0");
        }
    });
    //Sticky video side js Ends

    // Sticky Sub Menu Js Start 
    var topNavHeight = $(".top-navbar").height();
    $("nav.submenu").css('top', topNavHeight);
    // note: for nav tag there parent are position=relative 

    // scroll on hover js 
    $('#right-hover-scroll').click(function() {
        event.preventDefault();
        $('.scroll_menu').animate({
            scrollLeft: "+=100%"
        }, "slow");
    });
        
    $('#left-hover-scroll').click(function() {
        event.preventDefault();
        $('.scroll_menu').animate({
            scrollLeft: "-=100%"
        }, "slow");
    });


    var scroll_menuNavWidth = $(".scroll_menu").width();
    var scroll_menuWidth = $(".scroll_menu .navbar-nav").width();

    if (scroll_menuWidth >= scroll_menuNavWidth) {
        $(".scroll_btn").removeClass("d-none");
    } else {
        $(".scroll_btn").addClass("d-none");
    }

    var scroll_menu = document.querySelector(".navbar .scroll_menu .nav-link.active");
    // scroll_menu.scrollIntoView({behavior: "smooth" ,inline: "center"});
    // scroll_menu.scrollIntoView({inline: "center"});
    // scroll_menu.scrollIntoView({behavior: "smooth"});

    // Sticky Sub Menu Js End 


    



});

//my content js start
$(function () {
    $('.content_btn').on('click', function () {
        $('.content_btn').removeClass('active');
        $(this).addClass('active');
        var scroll_menu = document.querySelector(".navbar .scroll_menu .nav-link.active");
            scroll_menu.scrollIntoView({behavior: "smooth" ,inline: "center"});
        });
});
function openContent(Content) {
    var i, content_item;
    content_item = document.getElementsByClassName("content_item");
    for (i = 0; i < content_item.length; i++) {
        content_item[i].style.display = "none";
    }
    document.getElementById(Content).style.display = "block";
}
document.getElementById("active_content").click();
//my content js ends


// scroll on click js 

