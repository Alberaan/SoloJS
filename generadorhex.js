var maxWidth = 5;
var maxHeight = 5;

function generar() {
  // Aquí puedes añadir el código para generar el contenido deseado
  var textArea = document.getElementById("hex-text");
  let hexesExplorados = [];
  maxWidth = document.getElementById("anchura").value;
  maxHeight= document.getElementById("altura").value;

  if(maxWidth == null || maxWidth < 1 || maxWidth > 99){
    textArea.innerHTML = "La anchura debe de ser entre 1 y 99";
    return;
  }
  if(maxHeight == null || maxHeight < 1 || maxHeight> 99){
    textArea.innerHTML = "La altura debe de ser entre 1 y 99";
    return;
  }

  let casillaInicial = obtenerCasillaInicial(maxWidth, maxHeight);
  const hexInicial = { coordenadas: casillaInicial, tipo_terreno: null };

  explorarHexagonos(hexInicial, hexesExplorados, null);

  texto = imprimirHexagonosExplorados(hexesExplorados);
  textArea.innerHTML= texto; 
  cargarImagen(texto);
}

function cargarImagen(texto){
  texto = texto + "\n" + "include gnomeyland.txt"
  var imagenMapa = document.getElementById("imagen-mapa");
  var url = "https://campaignwiki.org/text-mapper/render?map=";

  url = url + encodeURIComponent(texto);

  imagenMapa.src = url;
}
function imprimirHexagonosExplorados(explorados){
  texto = "";
  for (var i = 0; i < explorados.length; i++){
    texto = texto + convertirIntACoordenadas(explorados[i].coordenadas[0], explorados[i].coordenadas[1]) + " " + convertirATextMapper(explorados[i].tipo_terreno) + "\n";
  }
  return texto;
}

function convertirATextMapper(terreno){
  if(terreno == "Llanuras"){
    return "green"
  }
  if(terreno == "Colinas"){
    return "green hill"
  }
  if(terreno == "Montañas"){
    return "green mountains"
  }
  if(terreno == "Pantano"){
    return "rock lake"
  }
  console.log("Este es un undefined: " + terreno);
}

function comprobarHexagonoHaSidoExplorado(hexagono, explorados){
  for (i =0; i < explorados.length; i++){
    if (explorados[i].coordenadas[0] == hexagono.coordenadas[0] && explorados[i].coordenadas[1] == hexagono.coordenadas[1]){
      return true;
    }
  }
  return false;
}
function explorarHexagonos(hexagono, explorados, hexagonoAnterior) {

  if(comprobarHexagonoHaSidoExplorado(hexagono, explorados)){
    return;
  }

  var terreno = obtenerTerreno(hexagonoAnterior);
  hexagono.tipo_terreno = terreno;
  explorados.push(hexagono);

  var hexagonosContiguos = obtenerHexagonosContiguos(hexagono);

  for (var i = 0; i < hexagonosContiguos.length; i++) {
    if(!comprobarHexagonoHaSidoExplorado(hexagonosContiguos[i], explorados)){
      explorarHexagonos(hexagonosContiguos[i], explorados, hexagono);
    }
  }
}

function obtenerTerreno(hexagonoAnterior){
  if (hexagonoAnterior == null){
    return "Llanuras"
  }

  if (hexagonoAnterior.tipo_terreno == "Montañas"){
    nuevoTerreno = origenMontañas[Math.floor(Math.random() * origenMontañas.length)];
    return nuevoTerreno;
  }

  if (hexagonoAnterior.tipo_terreno == "Colinas"){
    nuevoTerreno = origenColinas[Math.floor(Math.random() * origenColinas.length)];
    return nuevoTerreno;
  }

  if (hexagonoAnterior.tipo_terreno == "Llanuras"){
    nuevoTerreno = origenLlanuras[Math.floor(Math.random() * origenLlanuras.length)];
    return nuevoTerreno;
  }

  if (hexagonoAnterior.tipo_terreno == "Pantano"){
    nuevoTerreno = origenPantano[Math.floor(Math.random() * origenPantano.length)];
    return nuevoTerreno;
  }
  console.log("Antes del error: " + hexagonoAnterior.tipo_terreno)
  return "error";
}

function obtenerCasillaInicial(maxWidth, maxHeight){
  var xPosition = Math.trunc(maxWidth/2);
  var yPosition = Math.trunc(maxHeight/2);

  if (xPosition == 0){
    xPosition = 1;
  }
  if (yPosition == 0){
    yPosition = 1;
  }
  return [xPosition, yPosition];
}

function convertirCoordenadasAInt(cadena){
  if (typeof cadena !== "string" || cadena.length !== 4) {
    throw new Error("La cadena debe tener 4 caracteres");
  }

  const x = parseInt(cadena.substring(0, 2));
  const y = parseInt(cadena.substring(2, 4));

  return [x, y];
}

function convertirIntACoordenadas(intX, intY){
  if(intX < 10){
    intX = "0" + intX.toString();
  } else{
    intX = intX.toString();
  }

  if(intY < 10){
    intY = "0" + intY.toString();
  } else{
    intY = intY.toString();
  }

  return intX + intY;
}

function hexagonoValido(x, y){
  if (x > maxWidth){
    return false;
  }
  if (y > maxHeight){
    return false;
  }
  if (x < 1){
    return false;
  }
  if (y < 1 ){
    return false;
  }

  return true;
}

function obtenerHexagonosContiguos(hexagono){
  let contiguos = [];

  if (hexagono.coordenadas[0] % 2 == 0){
    contiguos = obtenerHexagonosContiguosPar(hexagono);
  } else {
    contiguos = obtenerHexagonosContiguosImpar(hexagono);
  }

  return contiguos;
}

function obtenerHexagonosContiguosImpar(hexagono){
  x = hexagono.coordenadas[0];
  y = hexagono.coordenadas[1];
  let contiguos = [];

  if(hexagonoValido(x - 1, y - 1)){
    contiguos.push({ coordenadas: [x - 1, y - 1], tipo_terreno: null});
  }

  if(hexagonoValido(x, y - 1)){
    contiguos.push({ coordenadas: [x, y - 1], tipo_terreno: null});
  }

  if(hexagonoValido(x + 1, y - 1)){
    contiguos.push({ coordenadas: [x + 1, y - 1], tipo_terreno : null});
  }

  if(hexagonoValido(x - 1, y)){
    contiguos.push({ coordenadas: [x - 1 , y], tipo_terreno: null});
  }

  if(hexagonoValido(x, y + 1)){
    contiguos.push({ coordenadas: [x , y + 1], tipo_terreno: null});
  }

  if(hexagonoValido(x + 1, y)){
    contiguos.push({ coordenadas: [x + 1, y], tipo_terreno: null});
  }

  return contiguos;
}

function obtenerHexagonosContiguosPar(hexagono){
  x = hexagono.coordenadas[0];
  y = hexagono.coordenadas[1];
  let contiguos = [];

  if(hexagonoValido(x - 1, y)){
    contiguos.push({ coordenadas: [x - 1, y], tipo_terreno: null});
  }

  if(hexagonoValido(x, y - 1)){
    contiguos.push({ coordenadas: [x, y - 1], tipo_terreno: null});
  }

  if(hexagonoValido(x + 1, y)){
    contiguos.push({ coordenadas: [x + 1, y], tipo_terreno : null});
  }

  if(hexagonoValido(x - 1, y + 1)){
    contiguos.push({ coordenadas: [x - 1 , y + 1], tipo_terreno: null});
  }

  if(hexagonoValido(x, y + 1)){
    contiguos.push({ coordenadas: [x , y + 1], tipo_terreno: null});
  }

  if(hexagonoValido(x + 1, y + 1)){
    contiguos.push({ coordenadas: [x + 1, y + 1], tipo_terreno: null});
  }

  return contiguos;
}
