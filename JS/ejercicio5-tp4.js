let elementoMain = document.getElementById("main");

let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°5 - TP4</h2>
                          <div class="row gy-4">`;

class Persona{
  constructor(nombre, edad, sexo, peso, altura, añoNacimiento){
    this.dni = this.generarDNI();
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso; 
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  generarDNI() {
    let dni = "";
    for (let i = 0; i < 8; i++) {
      dni += Math.floor(Math.random() * 10);
    }
    return parseInt(dni);
  }

  esMayorDeEdad(){
    if(this.edad >= 18){
      elementoSection += `<h4 class="mt-3">${this.nombre} es Mayor de Edad</h4>`;
    }else{
      elementoSection += `<h4 class="mt-3">${this.nombre} es Menor de Edad</h4>`;
    }
  }

  mostrarGeneracion(){
    if(this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948){
      elementoSection += `<h4 class="mt-3">${this.nombre} es Generación Silent Generation</h4>`;
    }
    if(this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968){
      elementoSection += `<h4 class="mt-3">${this.nombre} es Generación Baby Boom</h4>`;
    }
    if(this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980){
      elementoSection += `<h4 class="mt-3">${this.nombre} es Generación X</h4>`;
    }
    if(this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993){
      elementoSection += `<h4 class="mt-3">${this.nombre} es Generación Y</h4>`;
    }
    if(this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010){
      elementoSection += `<h4 class="mt-3">${this.nombre} es Generación Z</h4>`;
    }
  }

  mostrarDatos(){
    elementoSection += `<h4 class="mt-4">Datos de la Persona:</h4>
                        <ul>
                          <li>Nombre: ${this.nombre}</li>
                          <li>DNI: ${this.dni}</li>
                          <li>Edad: ${this.edad} años</li>
                          <li>Sexo: ${this.sexo}</li>
                          <li>Peso: ${this.peso}</li>
                          <li>Altura: ${this.altura}</li>
                          <li>Año de nacimiento: ${this.añoNacimiento}</li>
                        </ul>`;
  }
}

elementoSection += `<article class="col-lg-6 text-md-center text-lg-start">
                      <img src="../IMG/generaciones.jpg" class="img-fluid imgGeneration">
                    </article>`;

let persona = new Persona("Bruno", 27, "H", "63 kg", "170 cm", 1996);


elementoSection += `<article class="col-lg-6 ms-5 ms-lg-0">`;
persona.mostrarDatos();
persona.mostrarGeneracion();
persona.esMayorDeEdad();
persona.generarDNI();
elementoSection += `</article>`;

elementoSection += `</div></section>`;
elementoMain.innerHTML = elementoSection;