// console.log(' Trang sản phẩm - product ')

// Function sẵn sàng - tự động chạy
$(function () {

//  Bộ lọc bằng các thương hiệu
$(".list-brand-carousel").slick({
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 1200,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow:
      '<button class="prev-arrow" aria-label="Previous" type="button"><span class="iconify prev-arrow" data-icon="fluent:chevron-left-28-regular" data-inline="false"></span></button>',
    nextArrow:
      '<button class="next-arrow" aria-label="Next" type="button"><span class="iconify next-arrow" data-icon="fluent:chevron-right-28-regular" data-inline="false"></span></button>',

    responsive: [
      {
        breakpoint: 1240,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },


    ],
  });



}); // Function sẵn sàng
