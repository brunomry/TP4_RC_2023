let elementoMain = document.getElementById("main");

let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°10 - TP4</h2>`;

class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }

  agregarAvion(avion) {
    this.listaAviones.push(avion);
  }

  buscarAvion(nombreAvion) {
    for (let avion of this.listaAviones) {
      if (avion.nombre === nombreAvion) {
        return avion;
      }
    }
    return null;
  }
}

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = [];
  }

  abordar(pasajero) {
    if (this.listaPasajeros.length < this.capacidad) {
      this.listaPasajeros.push(pasajero);
      elementoSection += `<p>El pasajero ${pasajero} abordó el avión "${this.nombre}"</p>`;
    } else {
      elementoSection += `<p>El avión "${this.nombre}" está lleno. El ${pasajero} no pudo abordar el avión.</p>`;
    }
  }
}

let aeropuerto = new Aeropuerto("Aeropuerto Internacional");

elementoSection += `<h4>${aeropuerto.nombreAeropuerto}</h4>`;

let avion1 = new Avion("Vuelo1", 200, "California");
let avion2 = new Avion("Vuelo2", 300, "Londres");
let avion3 = new Avion("Vuelo3", 150, "Abu Dhabi");

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

let nombreAvionABuscar; 
do{
  nombreAvionABuscar = prompt(`Aeropuerto \n Buscar un avión \n Ingrese el nombre del avión a buscar:`);

  if(nombreAvionABuscar === null){
    elementoSection += `<p>Se canceló la búsqueda</p>`;
    break;
  }

  let avionEncontrado = aeropuerto.buscarAvion(nombreAvionABuscar);

  if (avionEncontrado) {
    avionEncontrado.abordar("Bruno Madozzo");
  } else {
    elementoSection += `<p>No se encontró el avión "${nombreAvionABuscar}"</p>`;
  }
}while(nombreAvionABuscar === "");

elementoSection += `</section>`;
elementoMain.innerHTML = elementoSection;