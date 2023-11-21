let elementoMain = document.getElementById("main");

let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°8 - TP4</h2>`;
                          
let elementoP = "";
class Persona{
  constructor(nombre, edad, profesion){
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }
  
  get getNombre(){
    return this.nombre;
  }

  set setNombre(nombre){
    this.nombre = nombre;
  }

  get getEdad(){
    return this.edad;
  }

  set setEdad(edad){
    this.edad = edad;
  }

  get getProfesion(){
    return this.profesion;
  }

  set setProfesion(profesion){
    this.profesion = profesion;
  }

  saludar(){
    elementoP += `<p>- Hola mi nombre es ${this.getNombre}, tengo ${this.getEdad} años y soy ${this.getProfesion}</p>`;
  }

  despedirse(){
    elementoP += `<p class="mb-5">- Bueno, me despido gente. Hasta luego!</p>`
  }
}

const bruno = new Persona("Bruno Madozzo",27,"Desarrollador Full Stack");
const jose = new Persona("Jose",25,"Profesor");

elementoSection += `<h4 class="text-center my-4">Saludar y Despedirse</h4>`;

bruno.saludar();
bruno.despedirse();

jose.saludar();
jose.despedirse();

elementoSection += `<div class="text-center">${elementoP}</div>`;

elementoSection += `</div></section>`;
elementoMain.innerHTML = elementoSection;