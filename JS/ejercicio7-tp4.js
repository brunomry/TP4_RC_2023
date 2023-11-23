let elementoMain = document.getElementById("main");

let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°7 - TP4</h2>`;

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
  get getNombre() {
    return this.nombre;
  }
  get getTelefono() {
    return this.telefono;
  }
}

class AgendaTelefonica {
  constructor(){
    this.agenda = [];
  }

  aniadirContacto(contacto){
    if(this.agendaLlena()){
      alert(`La Agenda está llena`);
      return;
    }

    if(this.existeContacto(contacto)){
      alert(`El contacto ya existe!`);   
      return;
    }else{
      this.agenda.push(contacto);
      alert(`El contacto fue agregado a la Agenda`);
    }
  }

  existeContacto(contacto){
    return this.agenda.find(contactoAgenda => contactoAgenda.getNombre === contacto.getNombre);
  }

  listarContactos(){
    elementoSection += `<div class="container">
                          <h3 class="text-center my-3">Agenda de Contactos</h3>
                          <table class="table w-50 table-striped-colums border m-auto text-center">
                            <thead>
                              <tr>
                                <th scope="col" class="lead fw-bold">Nombre</th>
                                <th scope="col" class="lead fw-bold">Teléfono</th>
                              </tr>
                            </thead>
                            <tbody>`;
    this.agenda.map(contacto => {
        elementoSection += `<tr>
                              <td class="w-50">${contacto.getNombre}</td>
                              <td class="w-50">${contacto.getTelefono}</td>
                            </tr>`;
    });
    elementoSection += `</tbody></table></div>`;
  }

  buscarContacto(nombre) {
    let contactoBuscado = this.agenda.find(contactoAgenda => contactoAgenda.getNombre === nombre);
    (contactoBuscado) 
      ? alert(`El contacto buscado si existe!. Su Télefono es: ${contactoBuscado.getTelefono}`)
      : alert(`El contacto buscado no se encuentra en tu Agenda Telefónica!`);
  }

  eliminarContacto(contacto) {
    if (this.existeContacto(contacto)) {
      const posicion = this.agenda.findIndex(contactoAgenda => contactoAgenda.getNombre === contacto.getNombre);
  
      if (posicion !== -1) {
        this.agenda = this.agenda.slice(0, posicion).concat(this.agenda.slice(posicion + 1));
        alert(`El contacto ${contacto.getNombre} fue eliminado`);
      } else {
        alert(`No se pudo eliminar el contacto`);
      }
    } else {
      alert(`El contacto no existe en tu Agenda`);
    }
  }

  agendaLlena() {
    return this.agenda.length === 10;
  }

  huecosLibres() {
    (this.agendaLlena())
      ? alert(`Ya no puedes agregar más contactos. Tu Agenda está llena!`)
      : alert(`Aún puedes añadir a tu Agenda ${10 - this.agenda.length} contacto/s más.`);   
  }
}

let agenda = new AgendaTelefonica();

agenda.agenda = [new Contacto("bruno", "3816161401"),
                new Contacto("franco", "3816262402"),
                new Contacto("marina", "3816363403"),
                new Contacto("pia", "3816464404"),
                new Contacto("jorge", "3816565405"),
                new Contacto("estela", "3816666406"),
                new Contacto("lorena", "3816767407"),
                new Contacto("maia", "3816868408")];

let opcion;
do {
  opcion = prompt(`Agenda Telefónica \n 
    Seleccione una opción: 
        [1]- Añadir un Contacto
        [2]- Buscar Contacto 
        [3]- Listar Contactos
        [4]- Eliminar Contacto 
        [5]- Verificar cuántos contactos más se puede añadir a la Agenda`);

    opcion = parseInt(opcion);
    switch (opcion){
      case 1:
        let nombre = prompt(`Añadir Contacto \n Ingrese Nombre del Contacto Nuevo:`);
        let telefono = prompt(`Añadir Contacto \n Ingrese Teléfono del Contacto Nuevo:`);

        (nombre !== "" && telefono !== "" && telefono.length === 10 && !isNaN(telefono))
          ? agenda.aniadirContacto(new Contacto(nombre, telefono))
          : alert(`Nombre y/o Teléfono no válido! Por favor, ingrese nuevamente.`);        
        break;
      case 2:
        let contactoBuscado = prompt(`Buscar contacto \n Ingrese Nombre del Contacto a buscar:`);

        (contactoBuscado !== "")
          ? agenda.buscarContacto(contactoBuscado)
          : alert(`Ingrese un Nombre válido!`);       
          break;
      case 3:
        agenda.listarContactos();
        break;       
      case 4:
        let nombreE = prompt(`Eliminar Contacto \n Ingrese Nombre del Contacto a eliminar:`);
        const c = new Contacto(nombreE, '');

        (nombreE !== "")
          ? agenda.eliminarContacto(c)
          : alert(`Ingrese un Nombre válido!`);
        break;
      case 5:
        agenda.huecosLibres();
        break;
      default:
        alert(`Por favor, Ingrese una opción valida!`);
    }
}while(confirm(`¿Desea realizar otra operación?`));

if(opcion !== 3){
  agenda.listarContactos();
}

elementoSection += `</div></section>`;
elementoMain.innerHTML = elementoSection;