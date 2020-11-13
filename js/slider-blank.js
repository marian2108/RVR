$(document).ready(function(){
   $('.slider-color__body').slick({
      arrows:true,
      dots:true,
      adaptiveHeight: true, // слайдер підлаштовується по висоті під контент
      slidesToShow: 3,     // show
      slidesToScroll: 1,   // scroll
      speed: 500,          // speed
      easing:'linear',     // animation
      infinite: true,      //Бесконечный слайдер
      initialSlide:0,      //стартовий слайд
      autoplay: false,     // true включає автоматичне перелистування слайдів
      autoplaySpeed: 2000,       // з заданою швидкістю
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,          // false отключает свайп мишкой на ПК
      swipe: true,              // false отключает свайп пальцем на татчскрінах
      touchThreshold:10,         // чим більше число тим менше потрібно протянути слайдер щоб прокрутити його ( по замовч. 5)
      touchMove: true,         // false отключает можливість рухати слайдером
      centerMode: true,        // центральний слайд має клас .slick-center
      //centerPadding: '100px',     //по боках видно наступний кусок слайда,на заданий Padding
      waitForAnimate: true,    // false відключає затримку для завершення анімації при прокручуванні слайдера
      variableWidth: false,   // true автоматичний адаптивний слайдер
      rows: 1,                 // КОЛ-ВО рядов в слайдере
      slidesPerRow: 1,        // кол-во слайдов в ряде
      responsive: [{
         breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
         },{
         breakpoint: 480,
            settings: {
               slidesToShow: 1
            }
         }
      ],
      mobileFirst: false, // true включает для breakpoint min-width
      // vertical: true, verticalSwiping: true,      - вертикальный слайдер
      // fade:true,                                   - "слайдшоу" по 1 слайду 
      // asNavFor:'.class',                           - связка 2-х слайдеров, указывается клас 2-го слайдера
      // appendArrows:$('.class'),           присвоює стіркам інший клас з HTML коду
      // appendDots:$('.class'),             присвоює крапкам інший клас з HTML коду
   });
})
// HTML: <img data-lazy="путь к файлу" alt=""> 


