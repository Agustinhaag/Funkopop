let btn = document.querySelectorAll(".btns");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    document.querySelector(".botones .btn-click").classList.remove("btn-click");
    btn[i].classList.add("btn-click");
  });
  if (i === 1) {
    btn[i].classList.add("btn-click");
  }
}

let menu = document.getElementById("menu");
let mostrar = document.getElementById("mostrar");
let ocultar = document.getElementById("ocultar");
let enlaces = document.querySelectorAll('.container-menu a[href^="#"]');
mostrar.addEventListener("click", () => {
  menu.classList.add("visible");
  menu.style.transition = "0.6s";
});
ocultar.addEventListener("click", () => {
  menu.classList.remove("visible");
});

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu.classList.toggle("visible");
  });
});

const main = document.getElementById("nav");
window.addEventListener("scroll", function () {
  main.classList.toggle("scroll", window.scrollY > 0);
});
