$(window).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    arrows: false,
    centerPadding: '60px',
    adaptiveHeight: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 2048,
        settings: 'unslick',
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: '60px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.carousel.carousel--review').slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    centerPadding: '60px',
    adaptiveHeight: true,
    slidesToShow: 3,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1,
        }
      }
    ]
  });
});