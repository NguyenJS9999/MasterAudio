// console.log(" Trang các sản phẩm được yêu thích ")

$('.wishlist-button-cart').click(function()  {
    $(this);
    alert("Sản phẩm đã được thêm vào giỏ hàng")
});

$(".delete-one").on("click", function deleteOneItem() {
    $(this).parent().css("display", "none");
    alert("Bạn có chắc chắn muốn xóa sản phẩm này?")
});


$(".button-delete-all").on("click", function deleteOneItem() {

    $(".delete-one").parent().parent().css("display", "none");

    // $(this).parent().parent().css("display", "none");
    console.log('Xóa tất cả các item trong giỏ hàng')
    alert("Bạn có chắc chắn muốn xóa tất cả các sản phẩm trong giỏ hàng chứ?")
});
