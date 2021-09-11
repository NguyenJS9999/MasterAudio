// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// console.log("File navigation")

// Phủ định trạng thái
// let showMenu = false;

// function hiddenMenu() {
//     console.log("Ản hiện menu con")

//     if (showMenu) {
//         $('.menu-infos-header-mobile').hide();
//     } else {
//         $('.menu-infos-header-mobile').show();
//     }
//     showMenu = !showMenu;
// }

// Navgation 2 có danh mục con xổ xuống khi click vào thẻ text - Category
// Tiều đề danh mục sản phẩm trở thành nút bấm ẩn hiện Category
let collapse = false;
$('.nav-2-category').click(function () {
  console.log("collapse Bar")

  if (collapse) {
    // $('.menu-infos-header-mobile').hide();
    $('.categorys').slideUp(200)
    $('.sort-down-category').removeClass('sort-down-category-to-up')
  } else {
    // $('.menu-infos-header-mobile').show();
    $('.categorys').slideDown(200)
    $('.sort-down-category').addClass('sort-down-category-to-up')
  }

  collapse = !collapse;
});


// Menu - Catagory - Open mobile menu
let showHideMenu = false;

$(".icon-menu-hidden-mobile").click(function () {
    console.log("Đóng / Mở bar");

    if (showHideMenu) {
        console.log("Đóng tab chứa menu kéo ngang")
        $(".mobile-nav-bar").css('transform', 'translateX(-100%)');
        $(".mobile-nav-bar").css('display', 'none');

        $(".backdrop-bg").css('opacity', '0');
        $(".backdrop-bg").css('display', 'none');
        $(".backdrop-bg").css('transform', 'translateX(-100%)');

        $(".backdrop-bg").css('transition', '0.45s ease');
        // showHideMenu = false;

    } else {
        console.log("Mở tab chứa menu kéo ngang")
        $(".mobile-nav-bar").css('transform', 'translateX(0%)');
        $(".mobile-nav-bar").css('display', 'block');

        $(".backdrop-bg").css('opacity', '1');
        $(".backdrop-bg").css('display', 'block');
        $(".backdrop-bg").css('transform', 'translateX(0%)');

        $(".backdrop-bg").css('transition', '0.45s ease');
        // showHideMenu = true;
    }
    // showMenu = !showMenu;
});

// Close mobile menu
$(".btn-close-menu").click(closeMobileMenu);

function closeMobileMenu() {
    $(".mobile-nav-bar").css('transform', 'translateX(-100%)');

    $(".backdrop-bg").css('opacity', '0');
    $(".backdrop-bg").css('display', 'none');
    // $(".backdrop-bg").css('transform', 'translateX(-100%)');

    $(".backdrop-bg").css('transition', '0.45s ease');
    // showHideMenu = false;
}

// Khi click vào mọi vị trí bên ngoài mobile menu sẽ đóng menu

$(document).on("click", function (event) {
    if ($(event.target).is(".backdrop-bg")) {
        closeMobileMenu();
        console.log("Click ra ngoài đóng modal menu")
    }
});

// Login / Register
let showLogin = false;
$('.mobile-account').click(function () {
    console.log("Hiện biểu mẫu đăng nhập")

    if (showLogin) {
        $('.login-register-container').hide();

    } else {
        $('.login-register-container').show();
        showLogin = true;
    }
    showLogin = !showLogin;
})

// Đăng nhập / Đăng kí - kiểm tra - đóng modal ...
$(".login-btn ").click(function () {
    console.log(' Tiến hành đăng nhập - đóng form modal')
    $('.login-register-container').css('display', 'none');
});
$(".register-btn ").click(function () {
    console.log(' Tiến hành đăng kí - đóng form modal')
    $('.login-register-container').css('display', 'none');
});

// $(".login-register-container").click(function () {
//     console.log(' click ra ngoài form - đóng form modal')
//     $('.login-register-container').hide();
// });

// Close mobile menu
function closeMobileLoginRegister() {
    $('.login-register-container').css('display', 'none');
}

// Đóng modal khi click vào vùng ngoài khối Modal
$(window).on('click', function (event) {
    if ($(event.target).is('.login-register-container')) {
        closeMobileLoginRegister();
    }
});

// Mũi tên ở tiêu đề danh mục con - click xổ ra các lựa chọn của chính danh mục con đó
$(".category-hide-right-arrow").on("click", function () {
    $(this).parent().parent().children('div').css('transition-duration', '0.8s')

    // Các div là các lựa chọn của danh mục con
    $(this).parent().parent().children('div').toggleClass("submenu-hide-container-open");
    // Thay đổi css của mũi tên của mỗi danh mục con 
    $(this).toggleClass('category-hide-right-arrow-down');
    $(this).toggleClass('category-hide-background-color');
    $(this).parent().parent().toggleClass('category-hide-border-focus')
    
    //  Các danh mục con khác trừ chính nó còn lại sẽ ẩn đi
    $(".category-hide-right-arrow").not(this).parent().parent().children('div').removeClass("submenu-hide-container-open");
       $(".category-hide-right-arrow").not(this).removeClass('category-hide-right-arrow-down')
       $(".category-hide-right-arrow").not(this).removeClass('category-hide-background-color');
       $(".category-hide-right-arrow").not(this).parent().parent().removeClass('category-hide-border-focus')
});

// Đóng mở ổ tìm kiếm ẩn màn nhỏ
let showHideSearchHidden = false;
$('.icon-search-hidden-mobile-min576').click(function () {
    if (showHideSearchHidden) {
        console.log("Đóng mục search màn nhỏ min576")
        $('.div-search-hidden-mobile-hidden').slideUp(250)
        showHideSearchHidden = false;
    } else {
        console.log("Mở mục search màn nhỏ min576")
        $('.div-search-hidden-mobile-hidden').slideDown(250)
        showHideSearchHidden = true;
    }
})

$('.icon-search-hidden-mobile-992').click(function () {
    console.log('Ẩn hiện mục search màn nhỏ min992')
    if (showHideSearchHidden) {
        console.log("Đóng mục search màn nhỏ min576")
        $('.div-search-hidden-mobile-hidden').slideUp(250)
        showHideSearchHidden = false;
    } else {
        console.log("Mở mục search màn nhỏ min576")
        $('.div-search-hidden-mobile-hidden').slideDown(250)
        showHideSearchHidden = true;
    }
})

$('.search-hidden-mobile-hidden-close').click(closeSearchHidden)

function closeSearchHidden() {
    $('.div-search-hidden-mobile-hidden').slideUp(250);
    showHideSearchHidden = false;
}

// Close mobile menu
$(".btn-close-menu").click(closeMobileMenu);

function closeMobileMenu() {
    $(".mobile-nav-bar").css('transform', 'translateX(-100%)');

    $(".backdrop-bg").css('opacity', '0');
    $(".backdrop-bg").css('display', 'none');
    // $(".backdrop-bg").css('transform', 'translateX(-100%)');

    $(".backdrop-bg").css('transition', '0.45s ease');
    // showHideMenu = false;
}




// Code cũ
// let showHideMenu = false;
// $('.icon-menu-hidden-mobile').click(function () {
//     console.log('Đóng/Mở Menu ngang màn mobile')

//     // if (showHideMenu) {
//     //     // $('.menu-hidden-infors-mobile').hide()
//     //     // $('.menu-hidden-infors-mobile-container').hide() 
//     //     $('.menu-hidden-infors-mobile-container').css('transform', 'translate(-320px)');
//     //     $('.menu-hidden-infors-mobile-container').css('transition-duration', '0.6s');
//     //     $('.menu-hidden-infors-mobile-container').css('opacity', '0');
//     //     // showHideMenu= false;
//     // } else {
//     //     // $('.menu-hidden-infors-mobile').show()
//     //     // $('.menu-hidden-infors-mobile-container').show()
//     //     $('.menu-hidden-infors-mobile-container').css('transform', 'translate(0px)');
//     //     $('.menu-hidden-infors-mobile-container').css('transition-duration', '0.6s ease');

//     //     $('.menu-hidden-infors-mobile-container').css('opacity', '1');

//     //     showHideMenu= true;
//     // }
//     // showHideMenu = !showHideMenu;

//     $(".menu-hidden-infors-mobile-container").toggleClass("open-menu");

// });
// // Close mobile menu
// $(".btn-close-menu").on("click", closeMobileMenu);

// // Hàm đóng modal menu
// function closeMobileMenu() {
//     // $('.menu-hidden-infors-mobile-container').css('transform', 'translate(-320px)');
//     // $('.menu-hidden-infors-mobile-container').css('transition-duration', '0.6s');
//     // $('.menu-hidden-infors-mobile-container').css('opacity', '0');
//     $('.menu-hidden-infors-mobile-container').removeClass("open-menu");
// }

// // Khi click vào mọi vị trí bên ngoài mobile menu sẽ đóng menu
// $(window).on('click', function (event) {
//     if ($(event.target).is('.menu-hidden-infors-mobile-container')) {

//         closeMobileMenu();
//     }
//     console.log(' Click ở ngoài(xám) bảng menu trắng ẩn Đóng tất menu màn mobile')

// });