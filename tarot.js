
function cargarImagen() {
  // Genera un número aleatorio entre 1 y 10
  var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  
  carta = obtenerCartaAleatoria();
  // Construye la ruta de la imagen utilizando el número aleatorio
  var rutaImagen = "./Cartas/" + carta;
  
  // Actualiza la fuente de la imagen en la página HTML
  //const image = document.getElementById("imagen").src = rutaImagen;
  const image = document.getElementById("imagen");
  image.src = rutaImagen;
  document.getElementById("imagen").src = rutaImagen;

  const debeRotar = Math.floor(Math.random() * 2);

  if (debeRotar === 1){
    console.log(debeRotar);
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
    option1.text = element;
    option2.text = element;
    option3.text = element;

    select1.add(option1);
    select2.add(option2);
    select3.add(option3);
  });
}

function cambiarImagenSeleccionada(combobox, nombreImagen){
  //const combobox = document.getElementById(combobox);
  const imagen = document.getElementById(nombreImagen);
  imagen.src = "./Cartas/" + combobox;
  console.log(imagen.src)
}
