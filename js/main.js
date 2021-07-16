// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

console.log("File main")

// Phủ định trạng thái
let showMenu = false;

function hiddenMenu() {
    console.log("Ản hiện menu con")

    if (showMenu) {
        $('.menu-infos-header-mobile').hide();
    } else {
        $('.menu-infos-header-mobile').show();
    }
    showMenu = !showMenu;
}

// Menu truợt ngang sản phẩm bán chạy
$(document).ready(function () {
    $(".banner-carousel").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        // width: 1764,
        // centerMode: true,
        dots: true,

        // arrows: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        
        slidesToScroll: 1,

  
        responsive: [

            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3.1,
                },
            },

            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3.1,
                },
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.1,
                },
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.1,
                },
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.1,
                },
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 0.9,
                },
            },

            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 0.6,
                },
            },

        ],

    });
});