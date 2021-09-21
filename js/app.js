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
});
