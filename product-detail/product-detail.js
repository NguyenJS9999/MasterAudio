console.log("Trang product-detail - Chi tiết sản phẩm")

// $(document).ready(function () {

//     $('.slide-same-products').slick({

//         slidesToShow: 3,
//         slidesToScroll: 1
//     });

// }); // $(document).ready(function ()


$(document).ready(function () {
    $(".slide-same-products").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        dots: true,

        // arrows: true,
        pauseOnFocus: true,
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