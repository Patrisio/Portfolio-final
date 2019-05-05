AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

var pContainerHeight = $('.header').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.sidebar').css({
      'transform' : 'translate(0px,' + ' '+ wScroll /10 +'%)'
    });
  }

  if(wScroll > $('.skills').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.skills').offset().top + $(window).height() - 700)).toFixed();

    $('.skills__html').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.skills__css').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.skills__js').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.skills__react').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});

$('.nav__icon').on('click', function() {
  $('.menu').toggleClass('menu--active');
  $('.nav__icon').toggleClass('nav__icon--active');
  if($('.menu').hasClass('menu--active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

$('.menu__list-link').on('click', function() {
  $('.menu').removeClass('menu--active');
  $('.nav__icon').removeClass('nav__icon--active');
  document.body.style.overflow = '';
});

$('.portfolio__hidden--watch').on('click', function(e) {
  e.preventDefault();

  let div = document.createElement('div'),
  menu = document.querySelector('.menu');
  div.classList.add('overlay');
  div.classList.add('js-overlay-campaign');
  div.innerHTML = `<div class="popup">
  <div class="popup__img"></div>
  <div class="popup__text">
      <div class="popup__title"></div>
      <div class="popup__desc"></div>
      <div class="popup__tech"></div>
      <div class="popup__ref">
          <a href="https://github.com" target="_blank" class="popup__link"><i class="fab fa-github"></i></a>
          <a href="Natours/index.html" target="_blank" class="popup__link"><i class="fas fa-globe-americas"></i></a>
      </div>
  </div>
  <div class="close-popup js-close-campaign"></div>
  </div>`;
  
  document.body.insertBefore(div, menu);

  let image = document.querySelector('.overlay .popup .popup__img'),
      title = document.querySelector('.popup__title'),
      description = document.querySelector('.popup__desc'),
      tech = document.querySelector('.popup__tech'),
      span1 = document.createElement('span');
      span2 = document.createElement('span');
      span3 = document.createElement('span');
      link = document.querySelector('.popup__ref');

  if(this.classList[1] === 'trillo') {
    image.style.backgroundImage = "url('../../img/Trillo.png')";
    title.textContent = 'Trillo';
    description.textContent = 'Тренировочный макет на flex\'ах';
    tech.appendChild(span1).textContent = "HTML";
    tech.appendChild(span2).textContent = "CSS";
    link.childNodes[1].href = 'https://github.com/Patrisio/Trillo';
    link.childNodes[3].href = '../Trillo/index.html';
  } else if(this.classList[1] === 'natours') {
    image.style.backgroundImage = "url('../../img/Natours.png')";
    title.textContent = 'Natours';
    description.textContent = 'Тренировочный макет на float\'ах';
    tech.appendChild(span1).textContent = "HTML";
    tech.appendChild(span2).textContent = "CSS";
    link.childNodes[1].href = 'https://github.com/Patrisio/Natours';
    link.childNodes[3].href = '../Natours/index.html';
  } else if(this.classList[1] === 'nexter') {
    image.style.backgroundImage = "url('../../img/Nexter.png')";
    title.textContent = 'Nexter';
    description.textContent = 'Тренировочный макет на grid\'ах';
    tech.appendChild(span1).textContent = "HTML";
    tech.appendChild(span2).textContent = "CSS";
    link.childNodes[1].href = 'https://github.com/Patrisio/Nexter';
    link.childNodes[3].href = '../Nexter/index.html';
  } else if(this.classList[1] === 'pigGame') {
    image.style.backgroundImage = "url('../../img/PigGame.png')";
    title.textContent = 'DiceGame';
    description.textContent = 'Игра в кости, где выигрыват тот, кто первый набрал 20 очков. Проект направлен на отработку навыков по манипулированию DOM-элементами';
    tech.appendChild(span1).textContent = "JavaScript";
    link.childNodes[1].href = 'https://github.com/Patrisio/Dice-Game';
    link.childNodes[3].href = '../PigGame/index.html';
  } else if(this.classList[1] === 'budgety') {
    image.style.backgroundImage = "url('../../img/Budgety.png')";
    title.textContent = 'Budgety';
    description.textContent = 'В данном проекте шла отработка навыков по применению конструкторов, прототипов и наследования, т.е. применение ООП в целом.';
    tech.appendChild(span1).textContent = "JavaScript";
    link.childNodes[1].href = 'https://github.com/Patrisio/budgety';
    link.childNodes[3].href = '../Budgety/index.html';
  } else if(this.classList[1] === 'saloon') {
    image.style.backgroundImage = "url('../../img/Saloon.png')";
    title.textContent = 'Салон красоты';
    description.textContent = 'Вёрстка макета с применение библиотеки jQuery и сторонних плагинов.';
    tech.appendChild(span1).textContent = "HTML";
    tech.appendChild(span2).textContent = "CSS";
    link.childNodes[1].href = 'https://github.com/Patrisio/Beauty-Salon';
    link.childNodes[3].href = '../Beauty-saloon/index.html';
  } else if(this.classList[1] === 'iShop') {
    image.style.backgroundImage = "url('../../img/iShop.png')";
    title.textContent = 'iShop';
    description.textContent = 'Вёрстка макета с применением Bootstrap и jQuery. Проект состоит из главной страницы интернет-магазина, модального окна и корзины.';
    tech.appendChild(span1).textContent = "Bootstrap";
    link.childNodes[1].href = 'https://github.com/Patrisio/iShop';
    link.childNodes[3].href = '../iShop/products.html';
  } else if(this.classList[1] === 'youTube-fake') {
    image.style.backgroundImage = "url('../../img/YouTube.png')";
    title.textContent = 'YouTube-fake';
    description.textContent = 'Вёрстка макета с применением Bootstrap.';
    tech.appendChild(span1).textContent = "Bootstrap";
    link.childNodes[1].href = 'https://github.com/Patrisio/YouTube-fake';
    link.childNodes[3].href = '../YouTube-fake/index.html';
  } else if(this.classList[1] === 'curve-bezier') {
    image.style.backgroundImage = "url('../Curve-bezier/Curve.png')";
    title.textContent = 'Кривая Безье по трём точкам';
    description.textContent = 'Javascript-приложение, показывающее текущие координаты точки и устанавливающее вершины кривой в пределах экрана (Тестовое задание на позицию junior веб-программист ООО "Триумф")';
    tech.appendChild(span1).textContent = "JavaScript";
    link.childNodes[1].href = 'https://github.com/Patrisio/-----';
    link.childNodes[3].href = '../Curve-bezier/index.html';
  } else if(this.classList[1] === 'canvas') {
    image.style.backgroundImage = "url('../canvas/canvas.png')";
    title.textContent = 'Канвас';
    description.textContent = 'Попытка сделать что-то интересное, используя <canvas>';
    tech.appendChild(span1).textContent = "JavaScript";
    link.childNodes[1].href = 'https://github.com/Patrisio/Canvas';
    link.childNodes[3].href = '../canvas/index.html';
  } else if(this.classList[1] === 'weather') {
    image.style.backgroundImage = "url('../weather/weather.png')";
    title.textContent = 'Погода';
    description.textContent = 'Тренировочное приложение на отработку навыков использования API. (При нажатии на градусы Фаренгейта осуществляется их перевод в градусы Цельсия)';
    tech.appendChild(span1).textContent = "JavaScript";
    link.childNodes[1].href = 'https://github.com/Patrisio/Weather';
    link.childNodes[3].href = '../weather/index.html';
  } else if(this.classList[1] === 'beatmaker') {
    image.style.backgroundImage = "url('../Beatmaker/beatmaker.png')";
    title.textContent = 'Музыкальное приложение';
    description.textContent = 'При нажатии на один из цветных прямоугольников снизу - воспроизводится мелодия и вылетает шарик.';
    tech.appendChild(span1).textContent = "JavaScript";
    link.childNodes[1].href = 'https://github.com/Patrisio/Music-app';
    link.childNodes[3].href = '../Beatmaker/index.html';
  }

  $('.js-overlay-campaign').fadeIn();
  $('.js-overlay-campaign').addClass('overlay--active');
  document.body.style.overflow = 'hidden';
});

$('.js-close-campaign').on('click', function() {
  $('.js-overlay-campaign').fadeOut();
  document.body.replaceChild('.js-overlay-campaign', );
  
  document.body.style.overflow = '';
});

$(document).mouseup(function (e) { 
  overlay = document.querySelector('.overlay');
  if(overlay) {
    var popup = $('.js-popup-campaign');
    if(e.target.parentNode.classList[0] !== 'popup__link' || e.target === 'undefined') {
      if (e.target!=popup[0] && popup.has(e.target).length === 0){
        $('.js-overlay-campaign').fadeOut();
        document.body.style.overflow = '';
        setTimeout(
          function() {
            div = document.querySelector('.overlay');
            div.parentNode.removeChild(div);
          }, 500
        );
      }
    } else {
      setTimeout(
        function() {
          $('.js-overlay-campaign').fadeOut();
          document.body.style.overflow = '';
        }, 1000
      );
      setTimeout(
        function() {
          div = document.querySelector('.overlay');
          div.parentNode.removeChild(div);
        }, 2000
      );
    }
  }
});

$("#phone").mask("+7 (999) 999-9999");