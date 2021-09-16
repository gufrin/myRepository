window.addEventListener('DOMContentLoaded', function () {

  const slider1 = document.querySelector('.hero__swiper');
  const slider2 = document.querySelector('.gallery__swiper');
  const slider3 = document.querySelector('.editions__Swiper');
  const slider4 = document.querySelector('.Projects__Swiper');

  // slider №1
  let mySwiper1 = new Swiper(slider1, {
    slidesPerView: 1,
    spaceBetween: 100,
    speed: 900,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },


  });

  // slider №2
  let mySwiper2 = new Swiper(slider2, {
    autoHeight: false,
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 50,
    navigation: {
      nextEl: '.gallery__slider-next',
      prevEl: '.gallery__slider-prev',
    },
    zoom: {
      maxRatio: 5,
      minRatio: 1,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      1627: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1920: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  // slider №3
  let mySwiper3 = new Swiper(slider3, {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
    navigation: {
      nextEl: ".editions-button-next",
      prevEl: ".editions-button-prev ",
    },


    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      1627: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1920: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  // swiper №4
  let mySwiper4 = new Swiper(slider4, {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: ".Projects__button-next",
      prevEl: ".Projects__button-prev ",
    },
  });


  // end

  // accordion
  $("#accordion").accordion({
    heightStyle: 'content'
  });

  $(function () {
    var icons = {
      header: "iconClosed",    // custom icon class
      activeHeader: "iconOpen" // custom icon class
    };
    $("#accordion").accordion({
      icons: icons

    });

  });

  // end

  // tab
  document.querySelectorAll('.accord-activists-item').forEach(function (stepBtn) {
    stepBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__cart').forEach(function (work) {
        work.classList.remove('catalog__cart--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__cart--active')
    })
  })

  // end

  // maps
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.75772101011668, 37.600215400285265],
      zoom: 15
    });

    myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [55.757031312080805, 37.600215400285265]
      }
    });

    myPlacemark = new ymaps.Placemark([55.75762421113127, 37.60025697452498], {
      hintContent: 'Собственный значок метки',

    }, {
      iconLayout: 'default#image',
      iconImageHref: '/img/contacts/Ellipse 12.svg',
      iconImageSize: [20, 32],
      iconImageOffset: [-5, -38]
    }),


      // myMap.geoObjects.add(myGeoObject)
      myMap.geoObjects.add(myPlacemark)
  }

  // select

  const element = document.querySelector('#sel');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });

  const block = document.querySelector('.dev-nts__list-open');
  const btn = document.querySelector('.dev-nts__clik');

  let flag = false;

  btn.addEventListener('click', (e) => {
    if (!flag) {
      fadeIn(block, 1000, 'flex');
      flag = true;
    } else {
      fadeOut(block, 1000);
      flag = false;
    }
  });

  const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'dev-nts__list-open', 'dev-nts__clik';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      el.style.opacity = 1;
    }, 10);
  };

  const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;

    setTimeout(() => {
      el.style.display = 'none';
    }, timeout);
  };


  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  new JustValidate('.contact_form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      email: {
        required: true,
        email: true
      },
    },
  });

  new window.JustValidate('.contact_form', {
    rules: {
      name: {
        name: true,
        remote: {
          url: 'https://just-validate-api.herokuapp.com/check-correct',
          sendParam: 'name',
          successAnswer: 'OK',
          method: 'GET'
        }
      },
      tel: {
        remote: {
          url: 'https://just-validate-api.herokuapp.com/check-correct',
          sendParam: 'tel',
          successAnswer: 'OK',
          method: 'GET'
        }
      }
    },
    messages: {
      name: {
        remote: 'Недопустимый формат',
        name: 'Недопустимый формат'
      },
      tel: {
        remote: 'Недопустимый формат',
        required: 'Недопустимый формат'
      }
    },
  });
 
});



