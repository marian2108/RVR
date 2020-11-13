$(document).ready(function(){
   $('.slider-color__body').slick({
      arrows:true,
      dots:true,
      adaptiveHeight: false, // true -слайдер підлаштовується по висоті під контент
      slidesToShow: 3,     // show
      slidesToScroll: 1,   // scroll
      speed: 500,          // speed
      easing:'linear',     // animation
      infinite: true,      //Бесконечный слайдер
      touchThreshold:10,         // чим більше число тим менше потрібно протянути слайдер щоб прокрутити його ( по замовч. 5)
      centerMode: true,        // центральний слайд має клас .slick-center
      responsive: [{
         breakpoint: 1000,
         settings: {
            slidesToShow: 2,
            
         }
      },{
         breakpoint:850,
         settings: {
            slidesToShow: 2,
            centerMode: false,
         }
      },
      {breakpoint:750,
         settings: {
            slidesToShow: 1,
            centerMode: false,
         }
      },
      {breakpoint:650,
         settings: {
            slidesToShow: 1,
            arrows: false,
            centerMode: false,
         }
      }
      ]
   });
})

$(document).ready(function(){
   $('.slider__body').slick({
      arrows:true,
      dots:true,
      adaptiveHeight: false, // слайдер підлаштовується по висоті під контент
      slidesToShow: 3,     // show
      slidesToScroll: 1,   // scroll
      speed: 500, // speed
      easing:'linear',     // animation
      infinite: true,      //Бесконечный слайдер
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
         breakpoint: 1250,
         settings: {
            slidesToShow: 2,
            
         }
      },{
         breakpoint:950,
         settings: {
            slidesToShow: 1
         }
         }
      ]
   });
})

$(document).ready(function(){
   $('.slider-galery').slick({
      lazyLoad: 'ondemand',
      initialSlide:0,      //стартовий слайд
      arrows:true,
      dots:true,
      adaptiveHeight: false, // true -слайдер підлаштовується по висоті під контент
      slidesToShow: 3,     // show
      slidesToScroll: 1,   // scroll
      speed: 1000,          // speed
      easing:'linear',     // animation
      infinite: true,      //Бесконечный слайдер
      touchThreshold:10,         // чим більше число тим менше потрібно протянути слайдер щоб прокрутити його ( по замовч. 5)
      // centerMode: true,        // центральний слайд має клас .slick-center
      responsive: [{
         breakpoint: 1100,
         settings: {
            slidesToShow: 2,
            centerMode: false, 
         }
      },{
         breakpoint:850,
         settings: {
            slidesToShow: 1,
         }
      },{
         breakpoint:600,
         settings: {
            slidesToShow: 1,
            arrows:false
         }
         }
      ],
      centerPadding: '0px',
      waitForAnimate: false,    // false відключає затримку для завершення анімації при прокручуванні слайдера
      variableWidth: false,   // true автоматичний адаптивний слайдер
   });
   $('.slider-popup1').slick({
      // variableWidth: true,
      arrows:true,
      dots:true,
      adaptiveHeight: false, // true -слайдер підлаштовується по висоті під контент
      slidesToShow: 1,     
      slidesToScroll: 1,   
      speed: 1000,         
      easing:'linear',   
      infinite: true, 
      responsive: [{
         breakpoint: 750,
         settings: {
            arrows:false,
            
         }
      }
      ],
      // respondTo: 'window'
   })
   // $('.slider-popup1').slick('setPosition');
   // $('.slider-galery').slick('setPosition');
})


