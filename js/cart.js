console.log(" Trang cart - giỏ hàng ")


function deleteOneItem() {
    $(".delete-one").on("click", function deleteOneItem() {
        $(this).parent().css("display", "none");
        console.log(`Xóa mỗi item này trong giỏ hàng`)
        alert("Bạn có chắc chắn muốn xóa sản phẩm này?")
    });
}

function deleteAllItem() {
    $(".cart-items").css("display", "none");

    console.log('Xóa tất cả các item trong giỏ hàng')
    alert("Bạn có chắc chắn muốn xóa tất cả các sản phẩm trong giỏ hàng chứ?")
}