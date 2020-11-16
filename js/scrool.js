// =========== прокрутка на JS (не работает в Explorer)
//  window.onload = function(){
// function scrollTo(element){
//    window.scroll({
//       left:0,
//       top:element.offsetTop,
//       behavior: 'smooth'
//    })
// }
// var button = document.querySelector('.arrow-up');
// var header = document.querySelector('#header');
// button.addEventListener('click', () =>{
//    scrollTo(header);
// })
// }

// ====== jQuery прокрутка к другому єлементу по якорю ID ===============
// $('a[href^="#"]').click(function() {
//    var target = $(this).attr('href');
//    $('html, boby').animate({
//       scrollTop: $(target).offset().top - 20
//    },500);
// });


// ============ прокрутка в начало страницы ====================

$('.arrow-up').click(function() {
   $('html, boby').animate({
      scrollTop: 0
   },500);
});
