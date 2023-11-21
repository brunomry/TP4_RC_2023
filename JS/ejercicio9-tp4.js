let elementoMain = document.getElementById("main");

let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°9 - TP4</h2>`;
                          
class Animal{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
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

  emitirSonido(){
    elementoSection += `<p>- Hola soy un animal, mi nombre es ${this.getNombre}, tengo ${this.getEdad} años y hago tengo mi sonido propio</p>`;
  }
}

class Perro extends Animal{
  constructor(nombre, edad){
    super(nombre,edad);
  }

  emitirSonido(){
    elementoSection += `<div class="text-center">
                          <p>- Hola soy un perro, me llamo ${this.getNombre}, tengo ${this.getEdad} años y hago guaaauu </p>
                          <img src="../IMG/perro.jpg" class="img-fluid imgDog" alt="soy un perro">
                        </div>`;
  }
}

class Gato extends Animal{
  constructor(nombre, edad){
    super(nombre,edad);
  }
  
  emitirSonido(){
    elementoSection += `<div class="text-center mt-4">
                          <p>- Hola soy un gato, mi nombre es ${this.getNombre}, tengo ${this.getEdad} años y hago miaauu</p>
                          <img src="../IMG/gato.gif" alt="soy un gato">
                        </div>`;
  }
}

const firulais = new Perro("firulais",7);
firulais.emitirSonido();

const misha = new Gato("misha",5);
misha.emitirSonido();

elementoSection += `</section>`;
elementoMain.innerHTML = elementoSection;