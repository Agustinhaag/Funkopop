
let nombre= document.getElementById("name");
let descripcion= document.getElementById("descripcion");
let sku= document.getElementById("sku");
let precio= document.getElementById("precio");
let stock= document.getElementById("stock");
let descuento= document.getElementById("descuento");
let form = document.getElementById("form");
let cuota= document.getElementById("cuotas");
let licencia =document.getElementById("licencia");
let categoria =document.getElementById("categoria");

form.addEventListener("submit", e =>{
    e.preventDefault(),
    checkedinput();
});

function checkedinput(){ 
    let nuevoname= nombre.value.trim();
    let nuevadescripcion= descripcion.value.trim();
    let nuevosku= sku.value.trim();
    let nuevoprecio= precio.value.trim();
    let nuevostock= stock.value.trim();
    let nuevodescuento= descuento.value.trim();
    let valido = true;
    if(nuevoname===""){
        setError(nombre, "El campo nombre no puede quedar vacio");
        valido = false;
    }else{
        succes(nombre);
    }
    if(nuevadescripcion===""){
        setError(descripcion, "Debe ingresar una descripción");
        valido = false;
    }else{
        succes(descripcion);
    }
    if(nuevosku===""){
        setError(sku, "Ingrese un sku");
        valido = false;
    }else{
        succes(sku);
    }
    if(nuevoprecio===""){
        setError(precio, "Ingrese el precio");
        valido = false;
    }else{
        succes(precio);
    }
    if(nuevostock===""){
        setError(stock, "Ingrese el stock");
        valido = false;
    }else{
        succes(stock);
    }
    if(nuevodescuento===""){
        setError(descuento, "Ingrese el descuento");
        valido = false;
    }else{
        succes(descuento);
    }
    if (cuota.selectedIndex === 0) {
        setError(cuota, "Debe seleccionar una opcion");
        valido = false;
      }else{
     succes(cuota);
    }
    if (licencia.selectedIndex === 0) {
        setError(licencia, "Debe seleccionar una licencia");
        valido = false;
    }else{
      succes(licencia);
    }
    if (categoria.selectedIndex === 0) {
        setError(categoria, "Debe seleccionar una categoría");
        valido = false;
    }else{
      succes(categoria);
    }
    if (valido) {
        form.submit();
    }
}

function setError(input, mensaje){              
    let elemenpadre= input.parentElement;      
    let small= elemenpadre.querySelector("small"); 
    elemenpadre.className="inputerror";  
    small.innerText= mensaje;
   }
   function succes(input){
    let elemenpadre= input.parentElement;
    let small= elemenpadre.querySelector("small");
    small.innerText="";
   }
 