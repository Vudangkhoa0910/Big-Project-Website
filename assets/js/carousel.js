$(document).ready(function(){
    $('.links-row').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      dots: true,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false
          }
        }
      ]
    });
  });
  