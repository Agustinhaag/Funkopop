document.querySelector("#menos").addEventListener("click", restar);
document.querySelector("#mas").addEventListener("click", sumar);
let contador = 0;
let cantidad = document.querySelector("#cantidad");
function sumar() {
  contador = contador + 1;
  cantidad.value = contador;
}
function restar() {
  contador = contador - 1;
  cantidad.value = contador;
  if (cantidad.value < 0) {
    contador = 0;
    cantidad.value = 0;
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

let fila = document.querySelector(".contenedor-proyecto");
let carrusel = document.querySelectorAll(".carrusel");
let derecha = document.getElementById("flecha-derecha");
let izquierda = document.getElementById("flecha-izquierda");

derecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;
  let indicadoractivo = document.querySelector(".indicadores .activo");
  if (indicadoractivo && indicadoractivo.nextElementSibling) {
    indicadoractivo.nextElementSibling.classList.add("activo");
    indicadoractivo.classList.remove("activo");
  }
});

izquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;
  let indicadoractivo = document.querySelector(".indicadores .activo");
  if (indicadoractivo && indicadoractivo.previousElementSibling) {
    indicadoractivo.previousElementSibling.classList.add("activo");
    indicadoractivo.classList.remove("activo");
  }
});

const numpag = Math.ceil(carrusel.length / 3);
for (let i = 0; i < numpag; i++) {
  const indicador = document.createElement("button");
  if (i === 0) {
    indicador.classList.add("activo");
  }
  document.querySelector(".indicadores").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila.scrollLeft = i * fila.offsetWidth;
    document.querySelector(".indicadores .activo").classList.remove("activo");
    e.target.classList.add("activo");
  });
}

