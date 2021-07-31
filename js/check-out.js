// console.log(" Trang check out - thông tin khách hàng - thanh toán - đặt đơn")

let setTimeOut;

$('.proceed-to-order-button').click(function () {
    $('.modal-notice-successful-order').css("display", 'block');
    console.log("Hiện modal chúc mừng đã đặt hàng thàng công")
    setTimeOut = setTimeout(closeModal, 5000)

})

// Chủ động ẩn khối Toast cuộn lên
function closeModal() {
    $('.modal-notice-successful-order').css("display", "none")
    clearTimeout(setTimeOut);
}

// Ẩn toast 
$(".modal-notice-successful-order").click(closeModal);
