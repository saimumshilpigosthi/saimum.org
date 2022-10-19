//Preloader js Start
$(window).on('load', function () {
    // $('.preloader').delay(1000).fadeOut();
    $('.preloader').fadeOut();
});
//Preloader js Ends

// Header JS Start 
$(function () {
    // alert("ok");
});
// Header JS Ends

$(document).ready(function(){
  // alert("ok");


// banner_simple_slider Start 
    $('.banner_simple_slider_wrap').slick({
        arrows: false,
        // prevArrow: ".banner_simple_slider .left_btn",
        // nextArrow: ".banner_simple_slider .right_btn",
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        // variableWidth: true,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: false,
        cssEase: 'linear',
        vertical:true,
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

        
});