
const productos = [];

const obtenerProductos = () => {
  fetch("/item/api/producto")
    .then((response) => response.json())
    .then((data) => productos.push(...data))
    .catch((error) => {
      console.error(error);
    });
};
obtenerProductos();

const activarClick = () => {
  const botonesAgregar = document.querySelectorAll(
    ".btn.btn-sm.btn-outline-primary"
  );
  if (botonesAgregar !== null) {
    for (let btn of botonesAgregar) {
      btn.addEventListener("click", (event) => {
        const entero = parseInt(event.target.id);
        agregarCarrito(entero);
        console.table(carritoProductos);
      });
    }
  }
};

activarClick();

  const agregarCarrito = (id) => {
  if (parseInt(id) > 0) {
    const product = productos.find((produc) => produc.id === id);
    const agregado = carritoProductos.find((item) => item.id === id);
    if (agregado) {
      agregado.cantidad += 1;
    } else {
      product.cantidad = 1;
      carritoProductos.push(product);
    }
  }
  almacenarProductos();
  return carritoProductos
};

const almacenarProductos = () => {
  if (carritoProductos.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carritoProductos));
  }
};

const recuperarCarrito = () => {
  const data = localStorage.getItem("carrito");
  return JSON.parse(data) || [];
};

export const carritoProductos = recuperarCarrito();
