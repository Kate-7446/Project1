$(document).ready(function(){
$(".mobile_buttom").on('click', function(){
 $('.navigation').slideDown(600);
 $(this).toggleClass('open');
})
});