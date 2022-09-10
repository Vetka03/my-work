const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,

  pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
  clickable: true,
  },
});

document.querySelectorAll('.section-we-work__tab') .forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click',function(e) {
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.section-we-work__tab') .forEach(function(btn){
btn.classList.remove('section-we-work__tab--active')});
  e.currentTarget.classList.add('section-we-work__tab--active');

  document.querySelectorAll('.section-we-work__tabcontent') .forEach(function(tabsBtn){
tabsBtn.classList.remove('section-we-work__tabcontent--active')});

  document.querySelector(`[data-target="${path}"]`).classList.add('section-we-work__tabcontent--active');
  });
});

$(".accordion").accordion({
  heightStyle: "content",
  active: 2
});

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__list');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',

function(){

  burger.classList.toggle('header__burger--active');

  menu.classList.toggle('header__list--active');

  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__list--active');

    document.body.classList.remove('stop-scroll');

  });
});

let btnSearch = document.querySelector('.header__btn');
let search = document.querySelector('.header__btn-search');
let btnClosedSearch = document.querySelector('.header__btn-closedsearch')

btnSearch.addEventListener('click',

function(){

  btnSearch.classList.toggle('header__btn--active');

  search.classList.toggle('header__btn-search--active');

  btnClosedSerch.classList.toggle('header__btn-closedsearch');

});

btnClosedSearch.addEventListener('click', () => {

  btnSearch.classList.remove('header__btn--active');

  search.classList.remove('header__btn-search--active');

  });
