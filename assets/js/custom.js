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


    




});