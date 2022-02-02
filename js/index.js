window.addEventListener('DOMContentLoaded',  function() {
  $('.header__burger').click(function(){
    $('.header__menu').addClass('menu-active');
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.header__menu-close').click(function(){
    $('.header__menu').removeClass('menu-active');
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
    $('.catalog__left-right button[formaction^="#"], *[data-formaction^="#"]').on('click', function(e){
        var t = 1000;
        var d = $(this).attr('data-formaction') ? $(this).attr('data-formaction') : $(this).attr('formaction');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
  }
  })
})

window.addEventListener('DOMContentLoaded',  function() {
  $(document).ready(function(){
    $('.catalog__left a[href^="#"], *[data-href^="#"]').on('click', function(e){
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
  })
})

// включение формы поиска
window.addEventListener('DOMContentLoaded',  function() {
  document.querySelector(".header__search").addEventListener("click", function() {
    document.querySelector(".header__for-search-form").classList.add("header__for-search-form-active");
    this.classList.add("header__search-active");
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".header__for-search-form");
    if (!target.closest(".header__nav")) {
    form.classList.remove("header__for-search-form-active");
      form.querySelector("input").value = "";
      document.querySelector(".header__search").classList.remove("header__search-active")
    }
  })

  document.querySelector(".header__search-close").addEventListener("click", function() {
    let form = document.querySelector(".header__for-search-form");
    form.classList.remove("header__for-search-form-active");
    form.querySelector("input").value = "";
    document.querySelector(".header__search").classList.remove("header__search-active")
  })
})

// переключение меню
window.addEventListener('DOMContentLoaded',  function() {
  const button = document.querySelectorAll('.header__nav-list-2-item');
  const menu = document.querySelectorAll('.header__way-of-art');

  button.forEach(el => {
    el.addEventListener('click', (e) => {
      button.forEach(el => {el.classList.remove(('header__nav-list-2-item-active'))})
      menu.forEach(el => {el.classList.remove(('menu-active'))})
      e.currentTarget.closest('li').querySelector('.header__nav-list-2-item').classList.toggle('header__nav-list-2-item-active');
      e.currentTarget.closest('li').querySelector('.header__way-of-art').classList.toggle('menu-active');
    });
  });

  document.addEventListener('click', (e) => {
    console.log(e.target)
    if (!e.target.classList.contains('way-of-art') && !e.target.classList.contains('header__nav-list-2-item')) {
      button.forEach(el => {el.classList.remove(('header__nav-list-2-item-active'))})
      menu.forEach(el => {el.classList.remove(('menu-active'))})
    }
  });
})

window.addEventListener('DOMContentLoaded', function(){
  const element = document.querySelector('.custom-select-1');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
})

window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-1',
      // String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"
      type: 'bullets',
      bulletElement: 'span',
      clickable: true, 
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next-1',
    //   prevEl: '.swiper-button-prev-1',
    // },

    autoplay: {
      delay: 3000
    },
        
  })
})

window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container-2', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slidesPerColumnFill: 'string',
    speed: 600,

    breakpoints: {
      290: {
        spaceBetween: 34,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
      },
      500: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
      },
      1200: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
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
      el: '.swiper-pagination-2',
      type: 'fraction',
      bulletElement: 'span',
      clickable: true, 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar-2',
    },
  })
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.catalog__choose-country').click(function(){
    $('.catalog__choose-country-active').removeClass('catalog__choose-country-active');
    $(this).addClass('catalog__choose-country-active');
    $('.catalog__for-country-active').removeClass('catalog__for-country-active');
    $(this).parent().addClass('catalog__for-country-active');
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.catalog__France').click(function(){
    $('.country-active').removeClass('country-active');
    $('.catalog__list-of-artists:nth-child(1)').addClass('country-active');
    $('ul li').removeClass("link-active");
    $('.catalog__list-of-artists:nth-child(1) li:nth-child(1)').addClass("link-active");
    var formaction = $('.catalog__list-of-artists:nth-child(1) li:nth-child(1) button').attr('formaction');
    $('.tab-active').removeClass("tab-active");
    $(formaction).addClass("tab-active");
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.catalog__Germany').click(function(){
    $('.country-active').removeClass('country-active');
    $('.catalog__list-of-artists:nth-child(2)').addClass('country-active');
    $('ul li').removeClass("link-active");
    $('.catalog__list-of-artists:nth-child(2) li:nth-child(1)').addClass("link-active");
    var formaction = $('.catalog__list-of-artists:nth-child(2) li:nth-child(1) button').attr('formaction');
    $('.tab-active').removeClass("tab-active");
    $(formaction).addClass("tab-active");
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.catalog__Italy').click(function(){
    $('.country-active').removeClass('country-active');
    $('.catalog__list-of-artists:nth-child(3)').addClass('country-active');
    $('ul li').removeClass("link-active");
    $('.catalog__list-of-artists:nth-child(3) li:nth-child(1)').addClass("link-active");
    var formaction = $('.catalog__list-of-artists:nth-child(3) li:nth-child(1) button').attr('formaction');
    $('.tab-active').removeClass("tab-active");
    $(formaction).addClass("tab-active");
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.catalog__Russia').click(function(){
    $('.country-active').removeClass('country-active');
    $('.catalog__list-of-artists:nth-child(4)').addClass('country-active');
    $('ul li').removeClass("link-active");
    $('.catalog__list-of-artists:nth-child(4) li:nth-child(1)').addClass("link-active");
    var formaction = $('.catalog__list-of-artists:nth-child(4) li:nth-child(1) button').attr('formaction');
    $('.tab-active').removeClass("tab-active");
    $(formaction).addClass("tab-active");
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.catalog__Belgium').click(function(){
    $('.country-active').removeClass('country-active');
    $('.catalog__list-of-artists:nth-child(5)').addClass('country-active');
    $('ul li').removeClass("link-active");
    $('.catalog__list-of-artists:nth-child(5) li:nth-child(1)').addClass("link-active");
    var formaction = $('.catalog__list-of-artists:nth-child(5) li:nth-child(1) button').attr('formaction');
    $('.tab-active').removeClass("tab-active");
    $(formaction).addClass("tab-active");
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.catalog__right ul li button').on("click", function() {
      $('ul li').removeClass("link-active");
      $(this).parent().addClass("link-active");
      var formaction = $(this).attr('formaction');
      $('.tab-active').removeClass("tab-active");
      $(formaction).addClass("tab-active");
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  jQuery('.catalog__right .grid h3').on('click', function (e) {
    e.about();return false; // этот код предотвращает стандартное поведение браузера по клику
    // остальной код
  });
})

window.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.swiper-container-2-5');
  var mySwiper;
  function mobileSlider() {
    if (window.innerWidth <= 599 && slider.dataset.mobile == 'false') {
      mySwiper = new Swiper(slider, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        slidesPerColumnFill: 'string',
        slidesPerGroup: 1,
        speed: 600,
        spaceBetween: 10,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination-2-5',
          type: 'bullets',
          bulletElement: 'span', 
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next-2-5',
          prevEl: '.swiper-button-prev-2-5',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar-2-5',
        },
      })
      slider.dataset.mobile = 'true';
    }
    else if (window.innerWidth > 599) {
      slider.dataset.mobile = 'false';
      if (slider.classList.contains('swiper-container-initialized')){
        mySwiper.destroy();
      }
    }
  }
  mobileSlider();
  window.addEventListener('resize', () => {
    mobileSlider();
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  jQuery('.events__show-all').on('click', function (e) {
    e.preventDefault(); // этот код предотвращает стандартное поведение браузера по клику
    // остальной код
  });
})

window.addEventListener('DOMContentLoaded',  function() {
  $('.events__show-all').click(function(){
    $('.event-hidden').removeClass('event-hidden');
    $('.events__for-button').addClass('events__for-button-hidden');
  });
})

window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container-3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'string',
    speed: 600,
    spaceBetween: 34,

    breakpoints: {
      376: {
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
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      900: {
        spaceBetween: 65,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      924: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1025: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1200: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1300: {
        spaceBetween: 70,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1400: {
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1480: {
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
      el: '.swiper-pagination-3',
      type: 'fraction',
      bulletElement: 'span',
      clickable: true, 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-3',
      prevEl: '.swiper-button-prev-3',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar-3',
    },
  })
})

// window.addEventListener('DOMContentLoaded',  function() {
//   $('.check').on('change', function(){
//     $('label[for='+this.id+']').toggleClass('label-active', this.checked)
//   })
// })

window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container-4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerColumn: 1,
    slidesPerColumnFill: 'string',
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
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      769: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1025: {
        spaceBetween: 62,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1200: {
        spaceBetween: 95,
        slidesPerView: 2,
        slidesPerGroup: 2,
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
      el: '.swiper-pagination-4',
      type: 'fraction',
      bulletElement: 'span',
      clickable: true, 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-4',
      prevEl: '.swiper-button-prev-4',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar-4',
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

window.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.books__categories');
  const arrow = document.querySelector('.books__categories-arrow');
  const block = document.querySelector('.books__categories-element');
  const blocks = document.querySelectorAll('.books__categories-element');
  const close = document.querySelector('.books__categories-close')

  btn.addEventListener('click', () => {
    if (!arrow.classList.contains('books__categories-arrow-active')) {
      blocks.forEach(el => {
        el.classList.add('books__categories-element-active');
      });
      arrow.classList.add('books__categories-arrow-active');
    } 
    else {
      blocks.forEach(el => {
        el.classList.remove('books__categories-element-active');
        if (el.querySelector('input').checked) {
          el.classList.add('books__categories-element-active'); 
        }
      }); 
      arrow.classList.remove('books__categories-arrow-active');
    };  
  });

  $(".books__categories-close").click(function() {
    $(this).parents(".books__categories-element-active").removeClass("books__categories-element-active");
  });
})

window.addEventListener('DOMContentLoaded', function(){
  if(document.documentElement.clientWidth < 500) {
    $(window).resize(function(){
      $('.swiper-container-2 .swiper-slide').height($('.swiper-container-2 .swiper-slide').width()*1.2655);
    });
  }
  })
window.addEventListener('DOMContentLoaded', function(){
    if(document.documentElement.clientWidth < 500) {
      $('.swiper-container-2 .swiper-slide').height($('.swiper-container-2 .swiper-slide').width()*1.2655);
    }
  })

window.addEventListener('DOMContentLoaded', function(){
  if(document.documentElement.clientWidth >= 500 && document.documentElement.clientWidth < 769) {
    $(window).resize(function(){
      $('.swiper-container-2 .swiper-slide').height($('.swiper-container-2 .swiper-slide').width()*0.885);
    });
  }
  })
window.addEventListener('DOMContentLoaded', function(){
    if(document.documentElement.clientWidth >= 500 && document.documentElement.clientWidth < 769) {
      $('.swiper-container-2 .swiper-slide').height($('.swiper-container-2 .swiper-slide').width()*0.885);
    }
  })

window.addEventListener('DOMContentLoaded', function(){
  if(document.documentElement.clientWidth >= 769) {
    $(window).resize(function(){
      $('.swiper-container-2 .swiper-slide').height($('.swiper-container-2 .swiper-slide').width()*1);
    });
  }
  })
window.addEventListener('DOMContentLoaded', function(){
    if(document.documentElement.clientWidth >= 769) {
      $('.swiper-container-2 .swiper-slide').height($('.swiper-container-2 .swiper-slide').width()*1);
    }
  })