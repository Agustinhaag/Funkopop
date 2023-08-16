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

// const activarClick = () => {
//  const botonesAgregar = document.querySelectorAll(".btn-primary");
//  if (botonesAgregar !== null) {
//    for (let btn of botonesAgregar) {
//      btn.addEventListener("click", (event) => {
//        const entero = parseInt(event.target.id);
//        agregarCarrito(entero);
//      });
//    }
//  }
// }

// const agregarCarrito = (entero) => {
//    if (parseInt(entero) > 0) {
//      const producto = productos.find((produc) => produc.id === frutaId);
//      if (fruta !== undefined) {
//        const agregado = carritoFrutas.find((item) => item.id === frutaId);
//        if (agregado) {
//          agregado.cantidad += 1;
//        } else {
//          fruta.cantidad = 1;
//          carritoFrutas.push(fruta);
//        }
//      }
//    }
// }

//   document.querySelectorAll(".btn-primary").forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     event.preventDefault();
//     const productoJSON = btn.getAttribute("data-producto"); 
//     const selectedProduct = JSON.parse(productoJSON);
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     cartItems.push(selectedProduct);
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   });
// });