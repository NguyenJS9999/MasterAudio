// console.log("Trang product-detail - Chi tiết sản phẩm")

// $(document).ready(function () {

//     $('.product-images-othe-slide').slick({
//         infinite: true,
//         autoplay: true,

//         slidesToShow: 6,
//         slidesToScroll: 1
//     });

// }); // $(document).ready(function ()


$(document).ready(function () {
    $(".slide-same-products").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        dots: true,

        // arrows: true,
        pauseOnFocus: false,
        pauseOnHover: true,

        slidesToScroll: 1,


        responsive: [

            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },

            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                },
            },

        ],

    });


}); // $(document).ready(function ()