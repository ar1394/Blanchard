window.addEventListener('DOMContentLoaded',  function() {
  $('.burger').click(function(){
    $('.menu').addClass('menu-active');
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.menu-close').click(function(){
    $('.menu').removeClass('menu-active');
  });
})

// Скрипт плавного перехода к якорю
window.addEventListener('DOMContentLoaded',  function() {
  $(document).ready(function(){
    $('header a[href^="#"], *[data-href^="#"]').on('click', function(e){
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
  })
})

window.addEventListener('DOMContentLoaded',  function() {
  $(document).ready(function(){
    $('section:nth-child(1) a[href^="#"], *[data-href^="#"]').on('click', function(e){
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
  })
})

window.addEventListener('DOMContentLoaded',  function() {
  $(document).ready(function(){
    if(document.documentElement.clientWidth < 824) {
    $('.left-right a[href^="#"], *[data-href^="#"]').on('click', function(e){
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
  }
  })
})

// переключение меню
window.addEventListener('DOMContentLoaded',  function() {
  const button = document.querySelectorAll('.nav-list-item-2');
  const menu = document.querySelectorAll('.way-of-art');

  button.forEach(el => {
    el.addEventListener('click', (e) => {
      button.forEach(el => {el.classList.remove(('nav-list-item-2-active'))})
      menu.forEach(el => {el.classList.remove(('menu-active'))})
      e.currentTarget.closest('li').querySelector('.nav-list-item-2').classList.toggle('nav-list-item-2-active');
      e.currentTarget.closest('li').querySelector('.way-of-art').classList.toggle('menu-active');
    });
  });

  document.addEventListener('click', (e) => {
    console.log(e.target)
    if (!e.target.classList.contains('way-of-art') && !e.target.classList.contains('nav-list-item-2')) {
      button.forEach(el => {el.classList.remove(('nav-list-item-2-active'))})
      menu.forEach(el => {el.classList.remove(('menu-active'))})
    }
  });
})

window.addEventListener('DOMContentLoaded', function(){
  const element = document.querySelector('.custom-select_1');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
})
window.addEventListener('DOMContentLoaded', function(){
  const element = document.querySelector('.custom-select_2');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
})
window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container_1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination_1',
      // String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"
      type: 'bullets',
      bulletElement: 'span',
      clickable: true, 
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next_1',
    //   prevEl: '.swiper-button-prev_1',
    // },

    autoplay: {
      delay: 3000
    },
        
  })
})

window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container_2', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerColumnFill: 'string',
    slidesPerGroup: 2,
    speed: 600,

    breakpoints: {
      290: {
        spaceBetween: 34,
        slidesPerView: 1,
        slidesPerColumn: 1,
      },
      500: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerColumn: 2,
      },
      769: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerColumn: 2,
      },
      824: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerColumn: 2,
      },
      1200: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerColumn: 2,
      },
      1400: {
        spaceBetween: 34,
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
      },

      1600: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination_2',
      type: 'fraction',
      bulletElement: 'span',
      clickable: true, 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next_2',
      prevEl: '.swiper-button-prev_2',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar_2',
    },
  })
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.choose-country').click(function(){
    $('.choose-country-active').removeClass('choose-country-active');
    $(this).addClass('choose-country-active');
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.choose-country:nth-child(2)').click(function(){
    $('.country-active').removeClass('country-active');
    $('.France').addClass('country-active');
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.choose-country:nth-child(3)').click(function(){
    $('.country-active').removeClass('country-active');
    $('.Germany').addClass('country-active');
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.choose-country:nth-child(4)').click(function(){
    $('.country-active').removeClass('country-active');
    $('.Italy').addClass('country-active');
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.choose-country:nth-child(5)').click(function(){
    $('.country-active').removeClass('country-active');
    $('.Russia').addClass('country-active');
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.choose-country:nth-child(6)').click(function(){
    $('.country-active').removeClass('country-active');
    $('.Belgium').addClass('country-active');
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  jQuery('.choose-artist-right ul li a').on('click', function (e) {
    e.preventDefault(); // этот код предотвращает стандартное поведение браузера по клику
    // остальной код
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.choose-artist-right ul li a').on("click", function() {
      $('ul li').removeClass("link-active");
      $(this).parent().addClass("link-active");
      var href = $(this).attr('href');
      $('.tab-active').removeClass("tab-active");
      $(href).addClass("tab-active");
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  jQuery('.align .grid h3').on('click', function (e) {
    e.about();return false; // этот код предотвращает стандартное поведение браузера по клику
    // остальной код
  });
})

window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container_2_5', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerColumnFill: 'string',
    slidesPerGroup: 1,
    speed: 600,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination_2_5',
      type: 'bullets',
      bulletElement: 'span', 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next_2_5',
      prevEl: '.swiper-button-prev_2_5',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar_2_5',
    },
  })
})

window.addEventListener('DOMContentLoaded',  function() {
  jQuery('.event-all').on('click', function (e) {
    e.preventDefault(); // этот код предотвращает стандартное поведение браузера по клику
    // остальной код
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.event-all').click(function(){
    $('.event-hidden').removeClass('event-hidden');
    $('.for-button').addClass('event-hidden');
  });
})

window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container_3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'string',
    slidesPerGroup: 2,
    speed: 600,
    spaceBetween: 34,

    breakpoints: {
      330: {
        spaceBetween: 34,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      500: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      769: {
        spaceBetween: 50,
      },
      824: {
        spaceBetween: 34,
      },
      924: {
        spaceBetween: 50,
      },
      1025: {
        spaceBetween: 34,
      },
      1200: {
        spaceBetween: 50,
      },
      1400: {
        spaceBetween: 34,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      1600: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination_3',
      type: 'fraction',
      bulletElement: 'span',
      clickable: true, 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next_3',
      prevEl: '.swiper-button-prev_3',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar_3',
    },
  })
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.check').on('change', function(){
    $('label[for='+this.id+']').toggleClass('label-active', this.checked)
  })
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.select-check').on('change', function(){
    $('label[for='+this.id+']').toggleClass('label-active', this.checked)
  })
})

window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container_4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    // slidesPerColumn: 1,
    slidesPerColumnFill: 'string',
    slidesPerGroup: 2,
    speed: 600,

    breakpoints: {
      290: {
        spaceBetween: 24,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      600: {
        spaceBetween: 24,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      668: {
        spaceBetween: 34,
      },
      769: {
        spaceBetween: 50,
      },
      1024: {
        spaceBetween: 62,
      },
      1200: {
        spaceBetween: 95,
      },
      1400: {
        spaceBetween: 34,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      1600: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination_4',
      type: 'fraction',
      bulletElement: 'span',
      clickable: true, 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next_4',
      prevEl: '.swiper-button-prev_4',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar_4',
    },
  })
})

window.addEventListener('DOMContentLoaded', function() {
  // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.762463, 37.641079],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });
                // Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [55.758463, 37.601079] // координаты точки
    }
});
var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/marker.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
});
        // Размещение объекта на карте.
        // myMap.geoObjects.add(myGeoObject); 
        myMap.geoObjects.add(myPlacemark);
    }  
})

// закрыть аккордеон по-умолчанию
window.addEventListener('DOMContentLoaded', function() {
  $( '.details').accordion({
    active:2
  });
})