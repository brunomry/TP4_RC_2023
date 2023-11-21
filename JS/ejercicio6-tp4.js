let elementoMain = document.getElementById("main");

let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°6 - TP4</h2>`;

class Libro{
  constructor(ISBN, titulo, autor, nroPaginas){
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.nroPaginas = nroPaginas;
  }

  get getISBN(){
    return this.ISBN;
  }

  set setISBN(ISBN){
    this.ISBN = this.ISBN;
  }

  get getTitulo(){
    return this.titulo;
  }

  set setTitulo(titulo){
    this.titulo = titulo;
  }

  get getAutor(){
    return this.autor;
  }

  set setAutor(autor){
    this.autor = autor;
  }

  get getNroPaginas(){
    return this.nroPaginas;
  }

  set setNroPaginas(nroPaginas){
    this.nroPaginas = nroPaginas;
  }

  mostrarLibro(){
    alert(`El libro "${this.getTitulo}" con ISBN ${this.getISBN} creado por el autor "${this.getAutor}" tiene ${this.getNroPaginas} páginas`);
  }
}

const libro1 = new Libro(9789585549319,"Si lo crees, lo creas","Bryan Tracy",240)
const libro2 = new Libro(9788495787590,"Metas","Bryan Tracy",320)
const libro3 = new Libro(9788466371803,"Habla menos, Actúa más","Bryan Tracy",54)

const libros = [];
libros.push(libro1,libro2,libro3);

let ISBN;
let titulo;
let autor;
let nroPaginas;
do{
  ISBN = prompt(`Mostrar Libro \n Ingrese ISBN del libro:`);;
  titulo = prompt(`Mostrar Libro \n Ingrese título del libro:`);
  autor = prompt(`Mostrar Libro \n Ingrese autor del libro:`);
  nroPaginas = prompt(`Mostrar Libro \n Ingrese número de páginas del libro:`);;

  if(!isNaN(ISBN) && ISBN >= 1000000000000 && ISBN <= 9999999999999 && titulo !== "" && !isNaN(nroPaginas) && nroPaginas > 0){
    libros.push(new Libro(ISBN, titulo, autor, nroPaginas));
  }else{
    alert(`Uno o más valores ingresados no son válidos. Por favor, ingrese nuevamente!`)
  }
}while(isNaN(ISBN) || ISBN < 1000000000000 || ISBN > 9999999999999 || titulo === "" || isNaN(nroPaginas) || nroPaginas < 0);

elementoSection += `<table class="table text-center table-striped-rows table-bordered border">
                      <thead class="bg-bg-body-tertiary">
                        <tr>
                          <th colspan="5">LIBROS CARGADOS</th>
                        </tr>
                        <tr>
                          <th>ISBN</th>
                          <th>Título</th>
                          <th>Autor</th>
                          <th>Cantidad de páginas</th>
                        </tr>
                      </thead>
                      <tbody>`;

let id = 0;
libros.map(libro =>{
  id++;
  elementoSection += `<tr>
                        <td>${libro.getISBN}</td>
                        <td>${libro.getTitulo.charAt(0).toUpperCase()+libro.getTitulo.slice(1)}</td>
                        <td>${libro.getAutor.charAt(0).toUpperCase()+libro.getAutor.slice(1)}</td>
                        <td>${libro.getNroPaginas}</td>
                        <td><button class="btn btn-success" id="btnVerLibro${id}">Ver Libro</button></td>
                      </tr>`;
});

elementoSection += `</tbody></table>`;

let max;
let libro;
libros.forEach(objeto => {
  if(max === undefined){
    max = objeto.nroPaginas;
    libro = objeto.titulo;
  }else if(objeto.nroPaginas > max){
    max = objeto.nroPaginas;
    libro = objeto.titulo;
  }
});

elementoSection += `<p>El libro "<span class="fw-bold">${libro.charAt(0).toUpperCase()+libro.slice(1)}</span>" es el que tiene mayor cantidad de páginas con <span class="fw-bold">${max}</span></p>`

elementoSection += `</div></section>`;
elementoMain.innerHTML = elementoSection;

const btnVerLibro1 = document.getElementById('btnVerLibro1');
const btnVerLibro2 = document.getElementById('btnVerLibro2');
const btnVerLibro3 = document.getElementById('btnVerLibro3');
const btnVerLibro4 = document.getElementById('btnVerLibro4');

btnVerLibro1.addEventListener('click', () =>{
  libro1.mostrarLibro()
})

btnVerLibro2.addEventListener('click', () =>{
  libro2.mostrarLibro()
})

btnVerLibro3.addEventListener('click', () =>{
  libro3.mostrarLibro()
})

btnVerLibro4.addEventListener('click', () =>{
  libros[libros.length-1].mostrarLibro()
})