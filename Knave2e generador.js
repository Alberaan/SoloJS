function generarPersonaje() {
const nombre = generarNombre();
const apellido = generarApellido();
const personalidad = generarPersonalidad();

const atributos = {
  fuerza: 0,
  destreza: 0,
  constitucion: 0,
  inteligencia: 0,
  sabiduria: 0,
  carisma: 0
};

generarAtributos(atributos);

const xp = 0;                          // puntos de experiencia
const inventario = generarHuecosDeInventario(atributos.constitucion);  // huecos de inventario
const puntosdegolpe = generarPuntosDeGolpe();    // puntos de golpe
const carrera = generarCarrera();                // tipo de profesión
const armadura = generarArmadura();              // ya existente
const detalle = generarDetalle();                // algún rasgo extra
const objetivo = generarObjetivo();              // motivación o meta
const impedimento = generarImpedimento();        // obstáculo o debilidad
const manerismo = generarManerismo();            // tic o costumbre

  
  // Mostrar los valores en la página
document.getElementById("nombre").textContent = nombre;
document.getElementById("apellido").textContent = apellido;
document.getElementById("personalidad").textContent = personalidad;

document.getElementById("fuerza").textContent = atributos.fuerza;
document.getElementById("destreza").textContent = atributos.destreza;
document.getElementById("constitucion").textContent = atributos.constitucion;
document.getElementById("inteligencia").textContent = atributos.inteligencia;
document.getElementById("sabiduria").textContent = atributos.sabiduria;
document.getElementById("carisma").textContent = atributos.carisma;

document.getElementById("xp").textContent = xp;
document.getElementById("inventario").textContent = inventario;
document.getElementById("puntosdegolpe").textContent = puntosdegolpe;
document.getElementById("carrera").textContent = carrera;
document.getElementById("armadura").textContent = armadura;
document.getElementById("detalle").textContent = detalle;
document.getElementById("objetivo").textContent = objetivo;
document.getElementById("impedimento").textContent = impedimento;
document.getElementById("manerismo").textContent = manerismo;

}

function generarAtributos(atributos) {
  for (let i = 0; i < 3; i++) {
    const tirada = Math.floor(Math.random() * 6) + 1;

    switch (tirada) {
      case 1: atributos.fuerza += 1; break;
      case 2: atributos.destreza += 1; break;
      case 3: atributos.constitucion += 1; break;
      case 4: atributos.inteligencia += 1; break;
      case 5: atributos.sabiduria += 1; break;
      case 6: atributos.carisma += 1; break;
    }
  }
}

function generarNombre(){
  nombres = tablaNombres;
  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const elementoAleatorio = nombres[indiceAleatorio];

  return elementoAleatorio;
}

function generarApellido() {
  const prefijo = tablaApellidos1[Math.floor(Math.random() * tablaApellidos1.length)];
  const sufijo = tablaApellidos2[Math.floor(Math.random() * tablaApellidos2.length)];
  return prefijo + sufijo;
}

function generarPersonalidad() {
  const indice = Math.floor(Math.random() * tablaPersonalidades.length);
  return tablaPersonalidades[indice];
}

function generarHuecosDeInventario(constitucion){
  return constitucion + 10;
}

function generarPuntosDeGolpe(){
  return Math.floor(Math.random() * 6) + 1;
}

function generarCarrera() {
  const total = tablaCarreras.length;

  const indice1 = Math.floor(Math.random() * total);

  let indice2;
  do {
    indice2 = Math.floor(Math.random() * total);
  } while (indice2 === indice1); // Evita que salgan iguales

  const carrera1 = tablaCarreras[indice1];
  const carrera2 = tablaCarreras[indice2];

  return `${carrera1} | ${carrera2}`;
}

function generarArmadura(){
  return "11 + AP"
}

function generarDetalle() {
  const indice = Math.floor(Math.random() * tablaDetalles.length);
  return tablaDetalles[indice];
}

function generarObjetivo() {
  const indice = Math.floor(Math.random() * tablaObjetivos.length);
  return tablaObjetivos[indice];
}

function generarImpedimento() {
  const indice = Math.floor(Math.random() * tablaImpedimentos.length);
  return tablaImpedimentos[indice];
}

function generarManerismo() {
  const indice = Math.floor(Math.random() * tablaManerismos.length);
  return tablaManerismos[indice];
}
