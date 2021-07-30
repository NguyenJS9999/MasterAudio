// console.log("Trang product-detail - Chi tiết sản phẩm")

// $(document).ready(function () {

//     $('.product-images-othe-slide').slick({
//         infinite: true,
//         autoplay: true,

//         slidesToShow: 6,
//         slidesToScroll: 1
//     });

// }); // $(document).ready(function ()


// $(document).ready(function () {
//     $(".slide-same-products").slick({
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         centerMode: true,
//         dots: true,

//         // arrows: true,
//         pauseOnFocus: false,
//         pauseOnHover: true,

//         slidesToScroll: 1,


//         responsive: [

//             {
//                 breakpoint: 1920,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },

//             {
//                 breakpoint: 1400,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },

//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },

//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },

//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },

//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },

//             {
//                 breakpoint: 320,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },

//         ],

//     });


// }); 
// $(document).ready(function ()

// Product list

$(".slide-same-products").slick({
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
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
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });