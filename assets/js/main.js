$(document).ready(function () {
    $('#navigation').onePageNav();
    $('#navigation-logo').onePageNav();
    if($('.wow').length>0){
        new WOW().init();
    }
    $window = $(window);

    menuOffsetTop = 155;

    function processScroll() {
        var scrollTop = $window.scrollTop();
        if (scrollTop >= menuOffsetTop) {
            $('body').addClass('header-ontop');
        } else if (scrollTop <= menuOffsetTop) {
            $('body').removeClass('header-ontop');
        }
    }

    processScroll();
    $window.scroll(function () {
        processScroll();
    });

    $("#trigger-demo").click(function (e) {
        e.preventDefault();
        $("#home-demos-button").trigger("click");
    });

    $("#main-features-link").click(function (e) {
        e.preventDefault();
        $("#main-features-button").trigger("click");
    });

    $(".toggle-menu").click(function (e) {
        e.preventDefault();
        $("body").toggleClass('show-menu');
    });

    $(".header-nav .items li").click(function (e) {
        e.preventDefault();
        $("body").removeClass('show-menu');
    });


    $('.logo-click').on('click',function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');
    }); 

    $('.list-screens').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 5,
      arrows: true,
      responsive: [
        {
          breakpoint: 880,
          settings: {
            centerMode: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
    });


    $('.list-testimonials').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
})