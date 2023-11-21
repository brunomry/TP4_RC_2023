let elementoMain = document.getElementById("main");

let elementoSection = `<section class="container">
                          <h2 class="pb-3 text-center text-primary">Resolución de Ejercicio N°3 - TP4</h2>
                          <div class="row m-auto">`;

class Rectangulo{
  constructor(base, altura){
    this.base = base;
    this.altura = altura;
  }

  get getBase(){
    return this.base;
  }

  set setBase(base){
    this.base = this.base;
  }

  get getAltura(){
    return this.altura;
  }

  set setAltura(altura){
    this.altura = altura;
  }

  calcularPerimetro(){
    return 2 * this.base + 2 * this.altura;
  }

  calcularArea(){
    return this.base * this.altura;
  }

  mostrarValores(){
    elementoSection += `<article class="col-lg-6">
                          <h4 class="text-center">Rectángulo</h4>
                          <div class="rectangulo w-75 h-75 m-auto ms-lg-auto bg-white border border-1 border-dark">
                            <p class="text-center">Base = <span class="fw-bold">${this.getBase}</span></p>
                            <p class="text-end mt-5 me-2">Altura = <span class="fw-bold">${this.getAltura}</span></p>
                          </div>
                        </article>`
  }
}

const validarEntrada = nombre => {
  let valor;

  do{
    valor = prompt(`PERÍMETRO Y ÁREA DE UN RECTÁNGULO \n Ingrese la ${nombre}`);
    if(isNaN(valor) || valor <=0){
      alert(`El valor ingresado no es válido. Por favor, ingrese nuevamente`);
    }
  }while(isNaN(valor) || valor <= 0);

  return parseFloat(valor);
}

do{
  const base = validarEntrada("Base");
  const altura = validarEntrada("Altura");
  const rectangulo = new Rectangulo(base, altura);
  rectangulo.mostrarValores();

  elementoSection += `<article class="col-lg-6 mt-2 m-auto">
                      <div class="text-center text-lg-start">
                        <h5 class="my-4">Perímetro del rectángulo:</h5>
                          <p>Perímetro = 2 x Base + 2 x Altura = 2 x ${rectangulo.getBase} + 2 x ${rectangulo.getAltura} = <span class="fw-bold">${rectangulo.calcularPerimetro()}</span></p>
                        <h5 class="my-4">Área del rectángulo:</h5>
                          <p>Área = Base x Altura = ${rectangulo.getBase} x ${rectangulo.getAltura} = <span class="fw-bold">${rectangulo.calcularArea()}</span></p>
                      </div>  
                    </article>`;
}while(confirm("¿Desea ingresar otro rectángulo?"));

elementoSection += `</div></section>`;
elementoMain.innerHTML = elementoSection;