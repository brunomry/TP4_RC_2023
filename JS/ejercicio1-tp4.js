let elementoMain = document.getElementById("main");

let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°1 - TP4</h2>
                          <div class="row gy-5">`;

//Solución N°1
elementoSection += `<article class="col-md-6 col-lg-4">
                      <h4>Solución N°1:</h4>`;

const auto = {
  color: "negro",
  marca: "Dodge",
  modelo: "Charger R/T",
  año: 1970,
  encender: function (){
    return "Auto encendido";
  },
  apagar: function (){
    return "Auto apagado";
  }
}

elementoSection += `<table class="table text-center table-striped-columns border">
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
elementoSection += `</tbody></table>`;

elementoSection += `<div class="d-flex justify-content-center mt-3">
                      <button class="btn btn-success me-2" id="btnArrancar">Encender</button>
                      <button class="btn btn-danger" id="btnApagar">Apagar</button>
                    </div>
                    </article>`;

//Solución N°2
elementoSection += `<article class="col-md-6 col-lg-4">
                      <h4>Solución N°2:</h4>`;

let color;
let marca;
let modelo;
let año;

do{
  color = prompt('Ingrese el color del auto:');
  marca = prompt('Ingrese la marca del auto:');
  modelo = prompt('Ingrese el modelo del auto:');
  año = prompt('Ingrese el año del auto:');
}while(color === "" || !isNaN(color) || marca === "" || !isNaN(marca) || modelo === "" || !isNaN(modelo) || año === "" || año < 1886 || isNaN(año));

color = color.charAt(0).toUpperCase() + color.slice(1);
marca = marca.charAt(0).toUpperCase() + marca.slice(1);
modelo = modelo.charAt(0).toUpperCase() + modelo.slice(1);

const auto1 = {
  color: color,
  marca: marca,
  modelo: modelo,
  año: año,
  acelerar: function (){
    return "Se pisó el acelerador";
  },
  frenar: function (){
    return "Se pisó el freno";
  }
}

elementoSection += `<table class="table text-center table-striped-columns border">
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
for(const propiedad in auto1) {
  if (auto1.hasOwnProperty(propiedad) && typeof auto1[propiedad] != 'function') {
    elementoSection += `<tr>`;
    elementoSection += `<td class="w-50">${propiedad.charAt(0).toUpperCase()+propiedad.slice(1)}</td>`;
    elementoSection += `<td class="w-50">${auto1[propiedad]}</td>`;
    elementoSection += `</tr>`;
  }
}
elementoSection += `</tbody></table>`;

elementoSection += `<div class="d-flex justify-content-center mt-3">
                      <button class="btn btn-success me-2" id="btnAcelerar">Acelerar</button>
                      <button class="btn btn-danger" id="btnFrenar">Frenar</button>
                    </div>
                    </article>`;

//Solución N°3
elementoSection += `<article class="col-md-6 col-lg-4">
                      <h4>Solución N°3:</h4>`;

let color2 = "Naranja";
let marca2 = "Dodge";
let modelo2 = "Challenger R/T";
let año2 = 1968;

const auto2 = {
  color2,
  marca2,
  modelo2,
  año2,
  encenderLuces(){
    return "Luces encendidas";
  },
  apagarLuces(){
    return "Luces encendidas";
  }
}

elementoSection += `<table class="table text-center table-striped-columns border">
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
for(const propiedad in auto2) {
  if (auto2.hasOwnProperty(propiedad) && typeof auto2[propiedad] != 'function') {
    elementoSection += `<tr>`;
    elementoSection += `<td class="w-50">${propiedad.charAt(0).toUpperCase()+propiedad.slice(1)}</td>`;
    elementoSection += `<td class="w-50">${auto2[propiedad]}</td>`;
    elementoSection += `</tr>`;
  }
}
elementoSection += `</tbody></table>`;

elementoSection += `<div class="d-flex justify-content-center mt-3">
                      <button class="btn btn-success me-2" id="btnEncenderLuces">Encender luces</button>
                      <button class="btn btn-danger" id="btnApagarLuces">Apagar luces</button>
                    </div>
                    </article>`;

elementoSection += `</section>`;
elementoMain.innerHTML = elementoSection;

//otra forma es crear el objeto vacio "auto = {}" y asignar el valor a cada propiedad mediante "auto.propiedad"

const btnArrancar = document.getElementById("btnArrancar");
const btnApagar = document.getElementById("btnApagar");
const btnAcelerar = document.getElementById("btnAcelerar");
const btnFrenar = document.getElementById("btnFrenar");
const btnEncenderLuces = document.getElementById("btnEncenderLuces");
const btnApagarLuces = document.getElementById("btnApagarLuces");

btnArrancar.addEventListener('click', encenderAuto => { 
  alert(auto.encender());
});

btnApagar.addEventListener('click', apagarAuto => { 
  alert(auto.apagar());
});

btnAcelerar.addEventListener('click', acelerarAuto => { 
  alert(auto1.acelerar());
});

btnFrenar.addEventListener('click', frenarAuto => { 
  alert(auto1.frenar());
});

btnEncenderLuces.addEventListener('click', encenderLucesAuto => { 
  alert(auto2.encenderLuces());
});

btnApagarLuces.addEventListener('click', apagarLucesAuto => { 
  alert(auto2.apagarLuces());
});