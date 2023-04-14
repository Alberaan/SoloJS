
function cargarImagen() {
  // Genera un número aleatorio entre 1 y 10
  var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  
  carta = obtenerCartaAleatoria();
  // Construye la ruta de la imagen utilizando el número aleatorio
  var rutaImagen = "./Cartas/" + carta[0];
  
  // Actualiza la fuente de la imagen en la página HTML
  //const image = document.getElementById("imagen").src = rutaImagen;
  const image = document.getElementById("imagen");
  image.src = rutaImagen[0];
  document.getElementById("imagen").src = rutaImagen;
  document.getElementById("significado-robada").innerHTML = "Significado: " + carta[1];

  const debeRotar = Math.floor(Math.random() * 2);

  if (debeRotar === 1){
    image.style.transform = 'rotate(180deg)';
    return;
  }
  image.style.transform = 'rotate(0deg)';
}

function obtenerCartaAleatoria(){
  miTablaTarot = tablaTarot;
  const indiceAleatorio = Math.floor(Math.random() * miTablaTarot.length);
  const elementoAleatorio = miTablaTarot[indiceAleatorio];

  return elementoAleatorio;
}

function rellenarCombos(){
  const select1 = document.getElementById("combo-jugador-1");
  const select2 = document.getElementById("combo-jugador-2");
  const select3 = document.getElementById("combo-jugador-3");
  
  // Iteramos a través del array para crear opciones y agregarlas al select
  tablaTarot.forEach(element => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    //optionElement.value = option;
    option1.text = element[0];
    option2.text = element[0];
    option3.text = element[0];

    select1.add(option1);
    select2.add(option2);
    select3.add(option3);
  });
}

function obtenerSignificado(nombreCarta){
  for (let i = 0; i < tablaTarot.length; i++){
    if (tablaTarot[i][0] === nombreCarta){
      return tablaTarot[i][1];
    }
  }
  return "Error";
};

function cambiarImagenSeleccionada(combobox, nombreImagen, significadoJugador){
  const imagen = document.getElementById(nombreImagen);
  imagen.src = "./Cartas/" + combobox;

  document.getElementById(significadoJugador).innerHTML = "Significado: " + obtenerSignificado(combobox);
}
