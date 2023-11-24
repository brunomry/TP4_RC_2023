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
      elementoSection += `<p class="mt-3">${this.nombre} es <span class="fw-bold">Mayor de Edad</span></p>`;
    }else{
      elementoSection += `<p class="mt-3">${this.nombre} es <span class="fw-bold">Menor de Edad</span></p>`;
    }
  }

  mostrarGeneracion(){
    if(this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948){
      elementoSection += `<p class="mt-3">${this.nombre} es <span class="fw-bold">Generación Silent Generation</span> y su Rasgo característico es <span class="fw-bold">Austeridad</span></p>`;
    }
    if(this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968){
      elementoSection += `<p class="mt-3">${this.nombre} es <span class="fw-bold">Generación Baby Boom</span> y su Rasgo característico es <span class="fw-bold">Ambición</span></p>`;
    }
    if(this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980){
      elementoSection += `<p class="mt-3">${this.nombre} es <span class="fw-bold">Generación X</span> y su Rasgo característico es <span class="fw-bold">Obsesión por el éxito</span></p>`;
    }
    if(this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993){
      elementoSection += `<p class="mt-3">${this.nombre} es <span class="fw-bold">Generación Y</span> y su Rasgo característico es <span class="fw-bold">Frustración</span></p>`;
    }
    if(this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010){
      elementoSection += `<p class="mt-3">${this.nombre} es <span class="fw-bold">Generación Z</span> y su Rasgo característico es <span class="fw-bold">Irreverencia</span></p>`;
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