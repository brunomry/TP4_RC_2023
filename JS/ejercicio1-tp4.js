let elementoMain = document.getElementById("main");

let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°1 - TP3</h2>`;

//Solución N°1

elementoSection += `<h3>Solución N°1:</h3>
                    <h4>Objeto Auto</h4>`;

const auto = {
  color: "negro",
  marca: "Dodge",
  modelo: "Charger R/T",
  año: 1970,
  encender: function (){
    return "Auto encendido";
  },
  apagar: function (){
    return "El auto se apagó";
  }
}

elementoSection += `<table class="table text-center table-striped-columns w-50 m-auto border">
                      <thead>
                        <tr>
                          <th colspan="2">Auto</th>
                        </tr>
                        <tr>
                          <th>Propiedad</th>
                          <th>Valor</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>`;
for(const propiedad in auto) {
  if (auto.hasOwnProperty(propiedad) && typeof auto[propiedad] != 'function') {
    elementoSection += `<tr>`;
    elementoSection += `<td>${propiedad.charAt(0).toUpperCase()+propiedad.slice(1)}</td>`;
    elementoSection += `<td>${auto[propiedad]}</td>`;
    elementoSection += `</tr>`;
  }
}
elementoSection += `</tbody></table>`

elementoSection += `<div class="d-flex justify-content-center mt-3">
                    <button class="btn btn-success me-2" id="btnArrancar">Arrancar</button>
                    <button class="btn btn-danger" id="btnApagar">Apagar</button>
                    </div>`;

elementoSection += `</section>`;
elementoMain.innerHTML = elementoSection;

let btnArrancar = document.getElementById("btnArrancar");
let btnApagar = document.getElementById("btnApagar");

btnArrancar.addEventListener('click', function () { 
  alert(auto.encender());
});

btnApagar.addEventListener('click', function () { 
  alert(auto.apagar());
});