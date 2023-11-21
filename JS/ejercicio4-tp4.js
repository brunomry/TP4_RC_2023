let elementoMain = document.getElementById("main");

let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°4 - TP4</h2>
                          <div class="row gy-4">`;
let div;
class Producto{
  constructor(codigo, nombre, precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  get getCodigo(){
    return this.codigo;
  }

  set setCodigo(codigo){
    this.codigo = codigo;
  }

  get getNombre(){
    return this.nombre;
  }

  set setNombre(nombre){
    this.nombre = nombre;
  }

  get getPrecio(){
    return this.precio;
  }

  set setPrecio(precio){
    this.precio = precio;
  }

  imprimirDatos(){
    div = `<article class="col-md-6 col-lg-3">
          <div class="card">
            <div class="card-header">
              <h4 class="text-success">${this.getNombre.charAt(0).toUpperCase()+this.getNombre.slice(1)}</h4>
            </div>
            <div class="card-body">
              <p class="card-title">Código: <span class="fw-bold">${this.getCodigo}</span></p>
              <p class="card-text">Precio: <span class="fw-bold">$${this.getPrecio}</span></p>
            </div>
          </div>
          </article>`;
  }
}

const producto1 = new Producto(1,"Fideo Matarazzo 500gr - sin tacc","1800");
const producto2 = new Producto(2,"Leche Serenísima descremada 1L","600");
const producto3 = new Producto(3,"Galletas de chocolate Smams sin tacc 105g","775");

const productos = [];
productos.push(producto1,producto2,producto3);

let codigo;
let nombre;
let precio;

do{
  codigo = prompt(`Ingreso de productos: \n Ingrese el código del producto:`);
  nombre = prompt(`Ingreso de productos: \n Ingrese el nombre del producto:`);
  precio = prompt(`Ingreso de productos: \n Ingrese el precio del producto:`);

  if(codigo === null || nombre === null || precio === null) break;

  if(!isNaN(codigo) && nombre !== "" && !isNaN(precio)){
    codigo = parseInt(codigo);
    precio = parseFloat(precio);
    productos.push(new Producto(codigo,nombre,precio));
  }else{
    alert(`Uno o más datos ingresados no son válidos. Por favor, ingrese nuevamente!`);
  }
}while(confirm(`¿Desea agregar un producto?`));

elementoSection += `<h2>Productos cargados</h2>`
productos.map(producto => {
  producto.imprimirDatos();
  elementoSection += div;
});

elementoSection += `</tbody></table>`;

elementoSection += `</div></section>`;
elementoMain.innerHTML = elementoSection;