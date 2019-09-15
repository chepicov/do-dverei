$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: false,
    arrows: false,
    centerPadding: '60px',
    adaptiveHeight: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: false,
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          infinite: false,
          slidesToShow: 1
        }
      }
    ]
  });
});