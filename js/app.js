"use strict";

const burger = document.querySelector(".burger");
const lines = document.querySelectorAll(".line");
const menu = document.querySelector(".layer");
const menuLines = document.querySelectorAll(".menu__item");


burger.addEventListener("click", ()=>{
  toggleMenu();
})

menu.addEventListener("click", (event)=>{
if (event.target&&!event.target.classList.contains("nav")){
  toggleMenu();
}});

function toggleMenu(){
    lines.forEach((line) => {
    line.classList.toggle("close");
  });
  menu.classList.toggle("hide");
}
