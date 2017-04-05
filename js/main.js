$(document).ready(function() {
    var wrapp = $('.wrapper'); // на врапер ставлю беграунд
    $('.mainBlockButton').hover(function(event) { // при наведені на блок
        var img = $(this).children('.pick').css('background-image'); //дістаю картинку в кружочку
        wrapp.css('background-image', img); // враперу міняю беграунд
        $('.mainBlockButton').css('border', '1px solid #fff'); // міняю всім блокам бордер
        $(this).css('border', '4px solid #fff'); // блоку на якій навів даю новий бордер
    });
});



//var onmouse=document.getElementById("lp"); 
//var bg=document.getElementsById("body"); 
//
//slide.onmouseover=function() { 
//    bg.style.background="url('../img/lp1.jpg') no-repeat center center fixed"; 
//}