import { carritoProductos } from "./index.js";

const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");


const retornarTabla = (producto) => { 
  const cantidad = carritoProductos.reduce((total, item) => {
    if (item.id === producto.id) {
      return total + item.cantidad ;
    } else {
      return total;
    }
  }, 0);
  return `<tr>
                    <td> <img src="../../Uploads/${producto.image}" width="100"> </td> 
                    <td>${producto.name}</td>
                    <td>${producto.precio}</td>
                    <td>${cantidad}</td>
                    <td class="borrar" data-id=${producto.id}><i class="fa-solid fa-x"></i></td>
                </tr>
  `;
};

const mostrar = () => {
  tbody.innerHTML = "";
  if (carritoProductos.length > 0) {
    carritoProductos.forEach((producto) => {
      const data = retornarTabla(producto);
      tbody.innerHTML += data;
    });
  }
};

const calcularTotal = () => {
  return carritoProductos.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);
};

const total = calcularTotal();
tfoot.innerHTML = `<td colspan="5">Total a pagar: $${total}</td>`;

mostrar();

const vaciar = () => {
  if (tbody.innerHTML === "") {
    Swal.fire({
      icon: "info",
      title: "¡Ups, lo sentimos!",
      text: "No hay productos en el carrito",
    });
  } else {
    tbody.innerHTML = "";
    tfoot.innerHTML = "";
    localStorage.removeItem("carrito");
    Swal.fire({
      icon: "success",
      title: `Compra realizada con éxito, el total fue de $${total}`,
      text: "¡Muchas gracias, lo esperamos pronto!",
    });
  }
};

const btn = document.querySelector("#btnComprar");
btn.addEventListener("click", vaciar);

const borrarFila = (id) => {
  const carritoActual = JSON.parse(localStorage.getItem("carrito"));
  const nuevoCarrito = carritoActual.filter((producto) => producto.id != id);
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
};

const btnBorrar = document.querySelectorAll(".borrar");
btnBorrar.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    Swal.fire({
      icon: "warning",
      title: "¿Estás seguro?",
      text: "Estás a punto de eliminar este producto del carrito",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        let iden = e.target.dataset.id;
        borrarFila(iden);
        let padre = btn.parentNode;
        padre.innerHTML = "";
      }
    });
  });
});

