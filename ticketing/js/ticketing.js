// // DESTINATION
// $(document).ready(function(){
//     $("button.proceed").click(function(){
//         $("button.proceed").hide();
//         $("#information").hide();
//         $("div.choise").slideDown(1000);
//     });
// });

// $("#tickets")
$(document).ready(function () {
    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});