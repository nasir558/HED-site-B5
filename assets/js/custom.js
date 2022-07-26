$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    prevArrow: ' <button class="slick-next slick_arrow_btns"> <img src="assets/images/arrow-circle-left.svg" alt=""> </button>',
    nextArrow: '<button class="slick-prev slick_arrow_btns">  <img src="assets/images/arrow-circle-right.svg" alt="">  </button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
            },
        },
    ],

});

$('.public_sector_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    rows: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '  <button class="slick-next slick_arrow_btns"> <img src="assets/images/arrowl.svg" alt=""> </button>',
    nextArrow: '<button class="slick-prev slick_arrow_btns">  <img src="assets/images/arrowr.svg" alt="">  </button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                rows: 1,
                slidesToShow: 2,
            },
        },
    ],

});