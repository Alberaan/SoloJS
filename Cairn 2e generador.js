function generarPersonaje() {
  // Tirar 3d6 para cada atributo
  const fue = tirarDados();
  const des = tirarDados();
  const vol = tirarDados();
  const nombre = generarNombre();
  const apellido = generarApellido();
  const trasfondo = generarTrasfondo();
  const fisico = generarFisico();
  const piel = generarPiel();
  const cabello = generarCabello();
  const rostro = generarRostro();
  const voz = generarVoz();
  const vestimenta = generarVestimenta();
  const virtud = generarVirtud();
  const defecto = generarDefecto();
  const reputacion = generarReputacion();
  const desgracia = generarDesgracia();
  const armadura = generarArmadura();
  const yelmosyescudos = generarYelmoYEscudo();
  const armas = generarArma();
  const equipoparaexpediciones = generarEquipoParaExpediciones();
  const herramientas = generarHerramienta();
  const baratijas = generarBaratija();
  const objetosadicionales = generarObjetosAdicional() + ", raciones para tres días, una antorcha";
  const edad = generarEdad();
  const oro = generarOro();
  
  // Mostrar los valores en la página
  document.getElementById("fue").textContent = fue;
  document.getElementById("des").textContent = des;
  document.getElementById("vol").textContent = vol;
  document.getElementById("nombre").textContent = nombre;
  document.getElementById("apellido").textContent = apellido;
  document.getElementById("trasfondo").textContent = trasfondo;
  document.getElementById("fisico").textContent = fisico;
  document.getElementById("piel").textContent = piel;
  document.getElementById("cabello").textContent = cabello;
  document.getElementById("rostro").textContent = rostro;
  document.getElementById("voz").textContent = voz;
  document.getElementById("vestimenta").textContent = vestimenta;
  document.getElementById("virtud").textContent = virtud;
  document.getElementById("defecto").textContent = defecto;
  document.getElementById("reputacion").textContent = reputacion;
  document.getElementById("desgracia").textContent = desgracia;
  document.getElementById("armadura").textContent = armadura;
  document.getElementById("yelmosyescudos").textContent = yelmosyescudos;
  document.getElementById("armas").textContent = armas;
  document.getElementById("equipoparaexpediciones").textContent = equipoparaexpediciones;
  document.getElementById("herramientas").textContent = herramientas;
  document.getElementById("baratijas").textContent = baratijas ;
  document.getElementById("objetosadicionales").textContent = objetosadicionales;
  document.getElementById("edad").textContent = edad;
  document.getElementById("oro").textContent = oro;
}

function tirarDados() {
  // Generar un número aleatorio entre 1 y 6, 3 veces
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const dado3 = Math.floor(Math.random() * 6) + 1;
  
  // Sumar los resultados de los dados
  const resultado = dado1 + dado2 + dado3;
  
  return resultado;
}

function generarNombre(){
  nombres = tablaNombres;
  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const elementoAleatorio = nombres[indiceAleatorio];

  return elementoAleatorio;
}

function generarApellido(){
  apellidos = tablaApellidos;
  const indiceAleatorio = Math.floor(Math.random() * apellidos.length);
  const elementoAleatorio = apellidos[indiceAleatorio];

  return elementoAleatorio;
}

function generarTrasfondo(){
  trasfondos = tablaTrasfondos;
  const indiceAleatorio = Math.floor(Math.random() * trasfondos.length);
  const elementoAleatorio = trasfondos[indiceAleatorio];

  return elementoAleatorio;
}

function generarFisico(){
  fisicos = tablaFisicos;
  const indiceAleatorio = Math.floor(Math.random() * fisicos.length);
  const elementoAleatorio = fisicos[indiceAleatorio];

  return elementoAleatorio;
}

function generarPiel(){
  pieles = tablaPieles;
  const indiceAleatorio = Math.floor(Math.random() * pieles.length);
  const elementoAleatorio = pieles[indiceAleatorio];

  return elementoAleatorio;
}

function generarCabello(){
  cabellos = tablaCabellos;
  const indiceAleatorio = Math.floor(Math.random() * cabellos.length);
  const elementoAleatorio = cabellos[indiceAleatorio];

  return elementoAleatorio;
}

function generarRostro(){
  rostros = tablaRostros;
  const indiceAleatorio = Math.floor(Math.random() * rostros.length);
  const elementoAleatorio = rostros[indiceAleatorio];

  return elementoAleatorio;
}

function generarVoz(){
  voces = tablaVoces;
  const indiceAleatorio = Math.floor(Math.random() * voces.length);
  const elementoAleatorio = voces[indiceAleatorio];

  return elementoAleatorio;
}

function generarVestimenta(){
  vestimentas = tablaVestimentas;
  const indiceAleatorio = Math.floor(Math.random() * vestimentas.length);
  const elementoAleatorio = vestimentas[indiceAleatorio];

  return elementoAleatorio;
}

function generarVirtud(){
  virtudes = tablaVirtudes;
  const indiceAleatorio = Math.floor(Math.random() * virtudes.length);
  const elementoAleatorio = virtudes[indiceAleatorio];

  return elementoAleatorio;
}

function generarDefecto(){
  defectos = tablaDefectos;
  const indiceAleatorio = Math.floor(Math.random() * defectos.length);
  const elementoAleatorio = defectos[indiceAleatorio];

  return elementoAleatorio;
}

function generarReputacion(){
  reputaciones = tablaReputaciones;
  const indiceAleatorio = Math.floor(Math.random() * reputaciones.length);
  const elementoAleatorio = reputaciones[indiceAleatorio];

  return elementoAleatorio;
}

function generarDesgracia(){
  desgracias = tablaDesgracias;
  const indiceAleatorio = Math.floor(Math.random() * desgracias.length);
  const elementoAleatorio = desgracias[indiceAleatorio];

  return elementoAleatorio;
}
function generarArmadura(){

  const tiradadado = Math.floor(Math.random() * 20) + 1;

  if(tiradadado >= 1 && tiradadado <= 3)
    return "Ninguna";
  if(tiradadado >= 4 && tiradadado <= 14)
    return "Brigantina";
  if(tiradadado >= 15 && tiradadado <= 19)
    return "Cota de malla"
  if(tiradadado === 20)
    return "Armadura completa";
  
  return "Error";
}

function generarYelmoYEscudo(){

  const tiradadado = Math.floor(Math.random() * 20) + 1;

  if(tiradadado >= 1 && tiradadado <= 13)
    return "Ninguno";
  if(tiradadado >= 14 && tiradadado <= 16)
    return "Yelmo";
  if(tiradadado >= 17 && tiradadado <= 19)
    return "Escudo";
  if(tiradadado === 20)
    return "Yelmo y escudo";
  
  return "Error";
}
function generarArma(){
  const tiradadado = Math.floor(Math.random() * 20) + 1;

  if(tiradadado >= 1 && tiradadado <= 5)
    return "Daga, garrote o báculo";
  if(tiradadado >= 6 && tiradadado <= 14)
    return "Espada, maza o hacha";
  if(tiradadado >= 15 && tiradadado <= 19)
    return "Arco largo, ballesta u honda";
  if(tiradadado === 20)
    return "Alabarda, martillo de guerra o hacha de batalla";
  
  return "Error";
}

function generarEquipoParaExpediciones(){
  equipoParaExpediciones = tablaEquipoParaExpediciones;
  const indiceAleatorio = Math.floor(Math.random() * equipoParaExpediciones.length);
  const elementoAleatorio = equipoParaExpediciones[indiceAleatorio];

  return elementoAleatorio;
}

function generarHerramienta(){
  herramientas = tablaHerramientas;
  const indiceAleatorio = Math.floor(Math.random() * herramientas.length);
  const elementoAleatorio = herramientas[indiceAleatorio];

  return elementoAleatorio;
}

function generarBaratija(){
  baratijas = tablaBaratijas;
  const indiceAleatorio = Math.floor(Math.random() * baratijas.length);
  const elementoAleatorio = baratijas[indiceAleatorio];

  return elementoAleatorio;
}

function generarObjetosAdicional(){
  const tiradadado = Math.floor(Math.random() * 20) + 1;
  if(tiradadado >= 1 && tiradadado <= 5)
    return generarHerramienta() + ", " + generarBaratija();
  if(tiradadado >= 6 && tiradadado <= 13)
    return generarEquipoParaExpediciones();
  if(tiradadado >= 14 && tiradadado <= 17)
    return generarArmadura() + ", " + generarArma();
  if(tiradadado === 20)
    return "Libro de hechizos: " + generarLibroDeHechizos();
  
  return "Error";
}

function generarLibroDeHechizos(){
  hechizos = tablaHechizos;
  const indiceAleatorio = Math.floor(Math.random() * hechizos.length);
  const elementoAleatorio = baratijas[indiceAleatorio];

  return elementoAleatorio;
}

function generarEdad(){
  const dado1 = Math.floor(Math.random() * 20) + 1;
  const dado2 = Math.floor(Math.random() * 20) + 1;

  return dado1 + dado2 + 10;
}

function generarOro(){
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const dado3 = Math.floor(Math.random() * 6) + 1;

  return dado1 + dado2 + dado3;
}
