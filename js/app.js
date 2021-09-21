"use strict";

const burger = document.querySelector(".burger");
const lines = document.querySelectorAll(".line");
const menu = document.querySelector(".layer");
const menuLines = document.querySelectorAll(".menu__item");
const backBtn = document.querySelector(".back");

burger.addEventListener("click", () => {
  toggleMenu();
});

menu.addEventListener("click", (event) => {
  if (
    event.target &&
    (event.target.classList.contains("layer") ||
      event.target.classList.contains("menu__link") ||
      event.target.classList.contains("menu__item"))
  ) {
    toggleMenu();
  }
});

function toggleMenu() {
  lines.forEach((line) => {
    line.classList.toggle("close");
  });
  menu.classList.toggle("hide");
  if (menu.classList.contains("hide")) {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
}
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  if (scrollTop > 200) {
    backBtn.classList.remove("hide");
  } else {
    backBtn.classList.add("hide");
  }


  console.log(`Score: 160 / 150
- [x] вёрстка валидная +10
- [x] вёрстка семантическая +20
- [x] для оформления СV используются css-стили +10
- [x] контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10
- [x] вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10
- [x] есть адаптивное бургер-меню. +10
- [x] на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10
- [x] контакты для связи и перечень навыков оформлены в виде списка ul > li +10
- [x] CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
- [x] CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10
- [x] CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
- [x] CV выполнено на английском языке +10
- [x] выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10
- [x] есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). +10
- [x] дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10');`);
})