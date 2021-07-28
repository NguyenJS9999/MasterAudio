// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

console.log("File navigation")

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

let showLogin = false;

$('.login-register-btn').click(function () {
    console.log("Hiện biểu mẫu đăng nhập")

    if (showLogin) {
        $('.login-register-container').hide();
    } else {
        $('.login-register-container').show();

    }
    showLogin = !showLogin;
})

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

// Đóng modal khi click vào vùng ngoài khối Modal
$(window).on('click', function (e) {
    if ($(e.target).is('.login-register-form')) {
        modal.hide();
        // css div phủ về trong suốt
        $('.login-register-container').css("display", "none")
    }
});