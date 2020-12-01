/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../views/blocks/advantages/advantages.js":
/*!************************************************!*\
  !*** ../views/blocks/advantages/advantages.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "../../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var showNumber = [];
  var offsetArray = $('.advantages__block'); //Узнаем кол-во блоков  создаем массив со значением true

  for (var i = 0; i < offsetArray.length; i++) {
    showNumber[i] = true;
  } //Анимация счета цифр


  var swingNumber = function swingNumber(params) {
    $(params).each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).attr('data-value')
      }, {
        duration: 1200,
        easing: 'swing',
        step: function step(now) {
          $(this).text(Math.ceil(now).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '));
        }
      });
    });
  };

  $(window).on('scroll resize load', function () {
    var scroll = $(window).scrollTop() + window.innerHeight - 60;

    for (var _i = 0; _i < offsetArray.length; _i++) {
      if (scroll > $(offsetArray[_i]).offset().top && showNumber[_i]) {
        swingNumber('.advantages__block[data-advantages="' + "".concat(_i + 1) + '"] b');
        $('.advantages__block[data-advantages="' + "".concat(_i + 1) + '"] .advantages__c2').addClass('rounded');
        showNumber[_i] = false;
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/banner/banner.js":
/*!****************************************!*\
  !*** ../views/blocks/banner/banner.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);
  var bannerSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.banner .swiper-container', {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 0,
    // centeredSlides: true,
    navigation: {
      nextEl: '.banner .swiper-button-next',
      prevEl: '.banner .swiper-button-prev'
    },
    pagination: {
      el: '.banner .swiper-pagination',
      clickable: true
    }
  });
});

/***/ }),

/***/ "../views/blocks/events-block/events-block.js":
/*!****************************************************!*\
  !*** ../views/blocks/events-block/events-block.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  /* slider */
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var eventsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.events-block .swiper-container', {
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // centeredSlides: true,
    navigation: {
      nextEl: '.events-block .swiper-button-next',
      prevEl: '.events-block .swiper-button-prev'
    },
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 30
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 0
      },
      // when window width is >= 1200px
      1290: {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 0
      }
    }
  });
  /* Переключение вкладок*/

  $('.buttons-swap').on('click', 'button', function () {
    $(this).siblings('button').removeAttr('disabled');
    $(this).attr('disabled', 'disabled');
  });
});

/***/ }),

/***/ "../views/blocks/types/types.js":
/*!**************************************!*\
  !*** ../views/blocks/types/types.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var typesSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.types .swiper-container', {
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // centeredSlides: true,
    navigation: {
      nextEl: '.types .swiper-button-next',
      prevEl: '.types .swiper-button-prev'
    },
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 30
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 0
      },
      // when window width is >= 1200px
      1290: {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 0
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/zones/zones.js":
/*!**************************************!*\
  !*** ../views/blocks/zones/zones.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.zones__item button').on('click', function () {
    $(this).siblings('a, ul').toggleClass('show');
  });
});

/***/ }),

/***/ "../views/components/scroll-up/scroll-up.js":
/*!**************************************************!*\
  !*** ../views/components/scroll-up/scroll-up.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var btn = $('.footer .scroll-up');
  $(window).on('scroll resize load', function () {
    var scroll = $(window).scrollTop() + window.innerHeight;
    var footerOffset = $('.footer').offset().top;
    var windowWidth = window.innerWidth; // Появление кнопки при скролле вниз после половины экрана

    if ($(window).scrollTop() > window.innerHeight / 2) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    } // Если скролл ниже высоты окна - то кнопка появится


    if (windowWidth >= 768 && $(window).scrollTop() > window.innerHeight) {
      // фиксация если скролл дошел до футера для больших экранов
      if (scroll > footerOffset) {
        btn.addClass('absolute');
      } else {
        btn.removeClass('absolute');
      }
    } else {
      // Фиксация если скролл дошел до footer для маленьких экранов, высота кнопки + отступ кнопки и оступ от высоты   footer
      if (scroll - 35 > footerOffset && $(window).scrollTop() > window.innerHeight) {
        btn.addClass('absolute');
      } else {
        btn.removeClass('absolute');
      }
    }
  }); //Сдвиг вверх

  btn.on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, {
      duration: 400,
      easing: 'swing'
    });
  });
});

/***/ }),

/***/ "../views/layouts/header/header.js":
/*!*****************************************!*\
  !*** ../views/layouts/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var header = $('.navbar');
  /* Появление шапки при скролле вниз после половины экрана */

  $(window).on('scroll resize load', function () {
    if ($(window).scrollTop() > window.innerHeight / 2) {
      header.addClass('fixed');
      $('body').css('padding-top', header.height());
    }

    if ($(window).scrollTop() <= 0) {
      header.removeClass('fixed');
      $('body').css('padding-top', 0);
    }
  });
  /* Появление поиска по клику */

  $('#search button, .header__button--search').on('click', function () {
    $('.navbar__search').toggleClass('show');
    $('.navbar__list, .header__links, .header__victory, .header__contacts').toggleClass('open-search');
  });
  /* Появление меню по кнопке */

  $('.header__button--menu').on('click', function () {
    // let expanded = $(this).attr('aria-expanded') === 'true';
    // $(this).attr('aria-expanded', !expanded);
    $(this).find('.btn-burger').toggleClass('open');
    $('html, .header, .navbar__list, .header__links, .header__victory, .header__contacts').toggleClass('open');
  });
  /* Подменю */

  $('.navbar__item-button').on('click', function () {
    $(this).parent('li').toggleClass('show');
  });
});

/***/ }),

/***/ "../views/layouts/modal/modal.js":
/*!***************************************!*\
  !*** ../views/layouts/modal/modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  //функция close
  var modalClose = function modalClose() {
    $('body, .header, .modal').css('padding-right', 0);
    $('.header').css('right', 0);
    $('.modal').removeClass('show');
    $('html').removeClass('fixed');
    focusUnlock();
    $('.modal__content').find(':focus').trigger('blur'); //Переход на предыдущий фокус

    $('.modal__content').one('transitionend', function () {
      $(tabMemory).trigger('focus');
    }); //Включить запись фокус

    modalIsOpen = false;
  }; //Focus-lock


  var focusLock = function focusLock() {
    focusElements.prevObject.each(function () {
      $(this).attr('tabindex', '-1');
    });
    focusModalElements.prevObject.each(function () {
      $(this).attr('tabindex', '0');
    });
  }; //Focus-unlock


  var focusUnlock = function focusUnlock() {
    focusElements.prevObject.each(function () {
      $(this).attr('tabindex', '0');
    });
  }; //focusable элементы


  var focusElements = $('a[href], button, input, textarea, select').has('focus'); //focusable элементы в modal

  var focusModalElements = $('.modal__content').find('a[href], button, input, textarea, select').has('focus'); // Инициализация переменных, 1-ый элемент по умолчанию и  модалка не открыта

  var tabMemory = focusElements.prevObject.first();
  var modalIsOpen = false; //При фокусе запоминаем предыдущый элемент, т.к. модалка открывается текущей кнопкой

  $('a[href], button, input, textarea, select').on('focusin', function () {
    if (!modalIsOpen) {
      tabMemory = $(this);
    }
  }); //открытие модального окна

  $('button[data-modal]').on('click', function () {
    var modalName = $(this).attr('data-modal');
    var body = $('body').width();
    var scrollWidth = window.innerWidth - body; // let headerTop = $('.header').outerHeight();
    //Отменяем запоминание текущего фокуса

    modalIsOpen = true; //Удаление всех tabindex

    focusLock(); //Показ модалки

    $('.modal[data-modal="' + modalName + '"]').addClass('show'); // .css('top', headerTop);

    /* if (modalName == 'zoom') {
      let altImg = $(this).find('img').attr('alt');
      let srcImg = $(this).find('img').attr('src');
      console.log(altImg, srcImg);
      $('.modal[data-modal="zoom"]')
        .find('img')
        .attr('alt', altImg)
        .attr('src', srcImg);
      $('.modal[data-modal="zoom"]').find('.modal__title').text(altImg);
    } */
    //При смене ширины окна, она будет под header

    /*     $(window).on('resize', function () {
      headerTop = $('.header').outerHeight();
      $('.modal[data-modal="' + modalName + '"]').css('top', headerTop);
    }); */
    //Автофокус на ближайщий возможный tabindex

    /*    $('.modal__content').one('transitionend', function () {
      $(this).find('[tabindex]:first').trigger('focus');
    }); */
    //Фиксируем страницу

    $('html').addClass('fixed');

    if (scrollWidth > 0) {
      $('body, .modal').css('padding-right', scrollWidth);
      $('.header').css('right', scrollWidth);
    }
  }); //Отмена по кнопке "Закрыть" и по фону

  $('.modal__btn button, .modal-overlay').on('click', function () {
    modalClose();
  }); //Отмена по Esc

  $(document).on('keydown', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode === 27) {
      modalClose();
    }
  });
});

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery/dist/jquery.min */ "../../node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/stable */ "../../node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! focus-visible/dist/focus-visible.min */ "../../node_modules/focus-visible/dist/focus-visible.min.js");
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @layouts/header/header */ "../views/layouts/header/header.js");
/* harmony import */ var _blocks_banner_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/banner/banner */ "../views/blocks/banner/banner.js");
/* harmony import */ var _blocks_types_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blocks/types/types */ "../views/blocks/types/types.js");
/* harmony import */ var _blocks_events_block_events_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/events-block/events-block */ "../views/blocks/events-block/events-block.js");
/* harmony import */ var _blocks_advantages_advantages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/advantages/advantages */ "../views/blocks/advantages/advantages.js");
/* harmony import */ var _blocks_zones_zones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blocks/zones/zones */ "../views/blocks/zones/zones.js");
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");
/* harmony import */ var _components_scroll_up_scroll_up__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/scroll-up/scroll-up */ "../views/components/scroll-up/scroll-up.js");
/* harmony import */ var svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! svg4everybody/dist/svg4everybody.min */ "../../node_modules/svg4everybody/dist/svg4everybody.min.js");
/* harmony import */ var svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_11__);

global.$ = jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0___default.a; // import 'core-js/stable/array/for-each';
// import 'core-js/stable/array/includes';
// import 'core-js/stable/dom-collections/for-each';


/* полифил для :focus-visible */









 // import header from '@layouts/header/header';
// import navbar from '@blocks/navbar/navbar';
// import clients from '@blocks/clients/clients';
// import advantages from '@blocks/advantages/advantages';
// import { calculate, liveMap } from '@blocks/calculate/calculate';
// import trust from '@blocks/trust/trust';
// import productSlider from '@blocks/product-slider/product-slider';
// import tableBtn from '@blocks/product-table/product-table';
// import productGoods from '@blocks/product-goods/product-goods';
// import regions from '@blocks/regions/regions';


jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  svg4everybody_dist_svg4everybody_min__WEBPACK_IMPORTED_MODULE_11___default()();
  jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0___default()('svg').attr('focusable', 'false');
});
jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  Object(_layouts_header_header__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_blocks_banner_banner__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_blocks_types_types__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_blocks_events_block_events_block__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_blocks_advantages_advantages__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_blocks_zones_zones__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_components_scroll_up_scroll_up__WEBPACK_IMPORTED_MODULE_10__["default"])();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map