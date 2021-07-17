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

