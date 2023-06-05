const cartasPoker = ["As de picas", "2 de picas", "3 de picas", "4 de picas", "5 de picas", "6 de picas", "7 de picas", "8 de picas", "9 de picas", "10 de picas", "J de picas", "Q de picas", "K de picas", "As de treboles", "2 de treboles", "3 de treboles", "4 de treboles", "5 de treboles", "6 de treboles", "7 de treboles", "8 de treboles", "9 de treboles", "10 de treboles", "J de treboles", "Q de treboles", "K de treboles", "As de corazones", "2 de corazones", "3 de corazones", "4 de corazones", "5 de corazones", "6 de corazones", "7 de corazones", "8 de corazones", "9 de corazones", "10 de corazones", "J de corazones", "Q de corazones", "K de corazones", "As de diamantes", "2 de corazones", "3 de diamantes", "4 de diamantes", "5 de diamantes", "6 de diamantes", "7 de diamantes", "8 de diamantes", "9 de diamantes", "10 de diamantes", "J de diamantes", "Q de diamantes", "K de diamantes", "joker rojo", "joker negro"];
cargarDatosonLoad();
//cartasPoker = ["As de picas", "As de diamantes"];

function crearBaraja(){
  datos = JSON.parse(localStorage.getItem("barajas"));
  let nuevaBaraja = prompt("Nombre de la nueva baraja:", "nueva baraja");
  if (nuevaBaraja == null || nuevaBaraja == ""){
    console.log("Cancelado");
  }

  baraja = {"nombre": nuevaBaraja, "mazo": cartasPoker, "descartes": []};
  datos.barajas.push(baraja);
  localStorage.setItem("barajas", JSON.stringify(datos));
  cargarBarajas(datos);
  cargarDatos();
}

function borrarBaraja(){
  datos = JSON.parse(localStorage.getItem("barajas"));
  const barajaSelect = document.getElementById('seleccionar-baraja');

  datos.barajas = datos.barajas.filter( el => el.nombre != barajaSelect.value );

  localStorage.setItem("barajas", JSON.stringify(datos));
  cargarBarajas(datos);
  cargarDatos();
  alert("Baraja eliminada");

}

function editarBaraja(){
  const barajaSelect = document.getElementById('seleccionar-baraja').value;
  datos = JSON.parse(localStorage.getItem("barajas"));

  if (barajaSelect == "" || barajaSelect == null){
    alert("Debes de seleccionar una baraja");
    return;
  }

  let nuevaBaraja = prompt("Nuevo nombre para la baraja:", barajaSelect);

  if (nuevaBaraja == null || nuevaBaraja == "") {
    alert("Cancelado. Introduce un nombre válido");
    return
  } 
  for (baraja of datos.barajas){
    if(baraja.nombre == barajaSelect){
      baraja.nombre = nuevaBaraja;
    }
  }
  localStorage.setItem("barajas", JSON.stringify(datos));
  cargarBarajas(datos);
  cargarDatos();
  alert("Nombre de la baraja actualizado");
  return;

}

function cargarImagen(){
  const barajaSelect = document.getElementById('seleccionar-baraja').value;
  datos = JSON.parse(localStorage.getItem("barajas"));
  var ultimaCartaRobada = null;

  for (const baraja of datos.barajas){
    if(baraja.nombre == barajaSelect){
      ultimaCartaRobada = baraja.descartes.slice(-1)[0];
    }
  }

  var rutaImagen = "";

  const image = document.getElementById("ultima-carta-robada");

  if (ultimaCartaRobada == null){
    rutaImagen = "./poker/back.jpg"
    image.style.width = "50%";
    image.style.height = "auto";

    image.src = rutaImagen;
    return
  }

  if (!cartasPoker.includes(ultimaCartaRobada)){
    rutaImagen = "./poker/error.jpg";
    image.style.width = "50%";
    image.style.height = "auto";
    image.src = rutaImagen;
    return
  }


  rutaImagen = "./poker/" + ultimaCartaRobada +".svg";
  image.src = rutaImagen;
}

function robarCarta(){
  datos = JSON.parse(localStorage.getItem("barajas"));
  const barajaSelect = document.getElementById('seleccionar-baraja').value;

  for (let baraja of datos.barajas){
    if (baraja.nombre == barajaSelect){
      if (baraja.mazo.length > 0){
        cartaRobada = obtenerElementoAleatorioArray(baraja.mazo);
        baraja.mazo = baraja.mazo.filter( el => el !== cartaRobada);
        baraja.descartes.push(cartaRobada);
        console.log(cartaRobada);
        localStorage.setItem("barajas", JSON.stringify(datos));
        cargarDatos();
      }
    }
  }
}

function resetMazo(){
  datos = JSON.parse(localStorage.getItem("barajas"));
  const barajaSelect = document.getElementById('seleccionar-baraja').value;


  for (let baraja of datos.barajas){
    if (baraja.nombre == barajaSelect){
      for (const carta of baraja.descartes){
        baraja.mazo.push(carta);
      }
      baraja.descartes = [];
      localStorage.setItem("barajas", JSON.stringify(datos));
      cargarDatos();
    }
  }
}

function obtenerElementoAleatorioArray(miArray){
  const numeroAleatorio = Math.floor(Math.random() * miArray.length);
  return miArray[numeroAleatorio];
}

function guardarCambiosRobo(){
  datos = JSON.parse(localStorage.getItem("barajas"));
  const barajaSelect = document.getElementById('seleccionar-baraja').value;
  const mazoRoboTexto = document.getElementById('mazo-robo-texto');

  for (let baraja of datos.barajas){
    if (baraja.nombre == barajaSelect){
      cartasNuevas = mazoRoboTexto.value.split("\n");
      baraja.mazo = cartasNuevas;
      localStorage.setItem("barajas", JSON.stringify(datos));
      cargarDatos();
      alert("Contenido del mazo actualizado");
    }
  }
}

function guardarCambiosDescartes(){
  datos = JSON.parse(localStorage.getItem("barajas"));
  const barajaSelect = document.getElementById('seleccionar-baraja').value;
  const mazoRoboTexto = document.getElementById('mazo-descartes-texto');

  for (let baraja of datos.barajas){
    if (baraja.nombre == barajaSelect){
      cartasNuevas = mazoRoboTexto.value.split("\n");
      baraja.descartes = cartasNuevas;
      localStorage.setItem("barajas", JSON.stringify(datos));
      cargarDatos();
      alert("Contenido del mazo de descartes actualizado");
    }
  }

}

function cargarDatosonLoad(){
  datos = JSON.parse(localStorage.getItem("barajas"));

  if (datos == null){
    datos = {"barajas":[{"nombre":"Baraja 1","mazo": cartasPoker,"descartes":[]},{"nombre":"Baraja 2","mazo":cartasPoker,"descartes":[]},{"nombre":"Baraja 3","mazo": cartasPoker,"descartes":[]}]};
  localStorage.setItem("barajas", JSON.stringify(datos));
  }

  datos = JSON.parse(localStorage.getItem("barajas"));
  cargarBarajas(datos);
  cargarDatos(datos);

}

function cargarDatos(datos){
  datos = JSON.parse(localStorage.getItem("barajas"));
  const barajaSelect = document.getElementById("seleccionar-baraja");

  barajaSelect.addEventListener('change', clickBarajas);
  cargarMazoRobo(datos, barajaSelect.value);
  cargarMazoDescartes(datos, barajaSelect.value);
  cargarImagen();
}

function clickBarajas(){
  let barajasElement = document.getElementById("seleccionar-baraja");
  datos = JSON.parse(localStorage.getItem("barajas"));

  barajaSeleccionada = barajasElement.value;
  cargarMazoRobo(datos, barajaSeleccionada);
  cargarMazoDescartes(datos, barajaSeleccionada);
  cargarImagen();
}

function cargarBarajas(){
  let barajasElement = document.getElementById("seleccionar-baraja");
  datos = JSON.parse(localStorage.getItem("barajas"));

  barajasElement.innerHTML = null;

  for (const baraja of datos.barajas){
    const option = document.createElement("option");
    option.value = baraja.nombre;
    option.textContent = baraja.nombre;

    barajasElement.appendChild(option);
  }
}

function cargarMazoRobo(datos, barajaSeleccionada){
  let mazoRoboTexto = document.getElementById("mazo-robo-texto");
  var text = "";

  if (barajaSeleccionada === null || barajaSeleccionada === ""){
    mazoRoboTexto.value = "";
    return;
  }

  for (const baraja of datos.barajas){
    if (baraja.nombre === barajaSeleccionada){
      for (const carta of baraja.mazo){
        text = text + carta + "\n";
      }
    }
  }

  text = text.slice(0, -1);
  mazoRoboTexto.value = text;
}

function cargarMazoDescartes(datos, barajaSeleccionada){
  let mazoDescartesTexto = document.getElementById("mazo-descartes-texto");
  var text = "";

  if (barajaSeleccionada === null || barajaSeleccionada === ""){
    mazoDescartesTexto.value = "";
    return;
  }
  for (const baraja of datos.barajas){
    if (baraja.nombre === barajaSeleccionada){
      for (const carta of baraja.descartes){
        text = text + carta + "\n";
      }
    }
  }

  text = text.slice(0, -1);
  mazoDescartesTexto.value = text;
}
