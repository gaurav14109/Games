/*************Menu toggle Script**********/

$("#menu-toggle").click(function (e) {
    $("#wrapper").toggleClass("toggled");
    e.preventDefault();
});
