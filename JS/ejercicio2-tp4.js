let elementoMain = document.getElementById("main");

let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°2 - TP4</h2>
                          <div class="text-center">`;

const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function(cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      alert(`Se ingresaron $${cantidad}. Tu nuevo saldo es: $${this.saldo}`);
    } else {
      alert(`La cantidad ingresada debe ser mayor que 0.`);
    }
  },
  extraer: function(cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      alert(`Se extrajeron $${cantidad}. Tu nuevo saldo es: $${this.saldo}`);
    } else {
      alert(`No tienes saldo suficiente.`);
    }
  },
  informar: function() {
    elementoSection += `<h3 class="mt-4">Estado de Cuenta:</h3>
                        <p>- Titular: ${this.titular}</p>
                        <p>- Saldo: $${this.saldo}</p>`;
  }
};

cuenta.informar();

const ingresarCantidad = (operacion) =>{
  let cantidad;
  do{
    cantidad = prompt(`¿Cuánto dinero deseas ${operacion}?`);
  
    if(isNaN(cantidad) || cantidad === "" || cantidad <= 0){
      alert(`La cantidad NO es válida. Por favor, ingrese nuevamente!`);
    }
  }while(isNaN(cantidad) || cantidad === "" || cantidad <= 0);
  
  return parseFloat(cantidad);
}

let cantidadIngreso = ingresarCantidad("ingresar");
cuenta.ingresar(cantidadIngreso);
elementoSection += `<h5 class="mt-2"> *** Ingreso de dinero *** </h5>
                    <p>Se realizó el ingreso de: $${cantidadIngreso}</p>`;
cuenta.informar();

let cantidadExtraccion = ingresarCantidad("extraer");
cuenta.extraer(cantidadExtraccion);
if(cantidadExtraccion <= cantidadIngreso){
  elementoSection += `<h5 class="mt-2"> *** Extracción de dinero *** </h5>
                      <p>Se realizó la extracción de: $${cantidadExtraccion}</p>`;
}else{
  elementoSection += `<h5 class="mt-2"> *** Extracción de dinero *** </h5>
                      <p>La extracción no se pudo realizar.</p>`;
}
cuenta.informar();

elementoSection += `</div></section>`;
elementoMain.innerHTML = elementoSection;