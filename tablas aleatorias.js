 // Leer el JSON almacenado en el LocalStorage


cargarDatosDefault();
const datos = cargarDatosNavegador();
cargarDatos();
rellenarBotones();

function cargarTablasDefault(){
  
  sistemas = cargarTablasDefaultSistemas();
  for (sistema of sistemas){
    ficheros = cargarTablasDefaultFicheros(sistema);
    for (fichero of ficheros){
      contenido = cargarTablasDefaultContenido(sistema, fichero);
    }
  }
}

function cargarTablasDefaultSistemas(){
  var request = new XMLHttpRequest();
  texto = "";

  request.open('GET', './Tablas/index.txt', false);
  request.overrideMimeType('text/json; UTF-8');
  request.send(null);
  
  if (request.status === 200) {
    texto = request.responseText;
  } else {
    console.error(request.status);
    return;
  }
  sistemas = texto.split("\n");
  sistemas = sistemas.filter(e => e != "index.txt");
  sistemas = sistemas.filter(e => e != "");
  return sistemas;
}
function cargarTablasDefaultFicheros(sistema){
  var request = new XMLHttpRequest();
  texto = "";

  request.open('GET', './Tablas/' + sistema.replace(".txt", "") + '/index.txt', false);
  request.overrideMimeType('text/json; UTF-8');
  request.send(null);
  
  if (request.status === 200) {
    texto = request.responseText;
  } else {
    console.error(request.status);
    return;
  }
  ficheros = texto.split("\n");
  ficheros = ficheros.filter(e => e != "index.txt");
  ficheros = ficheros.filter(e => e != "");
  return ficheros;
}

function cargarTablasDefaultContenido(sistema, fichero){
  var request = new XMLHttpRequest();
  texto = "";

  request.open('GET', './Tablas/' + sistema.replace(".txt", "") + '/' + fichero, false);
  request.overrideMimeType('text/json; UTF-8');
  request.send(null);
  
  if (request.status === 200) {
    texto = request.responseText;
  } else {
    console.error(request.status);
    return;
  }
  contenido = texto;
  return contenido;
}

function cargarDatosDefault(){
  localStorage.setItem("datos_sistemas", jsonDatos);
}

function rellenarBotones(){
  const containerBotones = document.getElementById('botones');
  let sistemaSelect = document.getElementById('filtro-sistemas-combo');
  const filtroTexto = document.getElementById('filtro-sistemas-texto');
  var sistemaSeleccionado = Array.from(sistemaSelect.selectedOptions).map(option => option.value)[0];
  cont = 0;
  var row = document.createElement('div');
  var rowAux = document.createElement('div');
  row.className = 'row mt-3';

  containerBotones.innerHTML = null;

  for (const sistema of datos.sistemas){
    if(sistema.nombre === sistemaSeleccionado || sistemaSeleccionado === "Todos"){
        for (const fichero of sistema.ficheros){
          if(fichero.nombre.replace(".txt", "").toLowerCase().includes(filtroTexto.value.toLowerCase())){
            btn = crearBoton(sistema, fichero);
            var col1 = document.createElement('div');
            col1.className = 'col-md-3';
            col1.appendChild(btn);

            if(cont === 0){
              containerBotones.appendChild(row);
              var rowAux = document.createElement('div');
              row = rowAux;
              row.className = 'row mt-3';
            }
            row.appendChild(col1);
            cont++;

            if (cont >= 4){
              cont = 0;
            }
          }
        }
    }

  containerBotones.appendChild(row);

  }
}

function crearBoton(sistema, fichero){
  var btn = document.createElement('button');
  btn.className = 'btn btn-primary btn-block';
  btn.innerHTML = fichero.nombre.replace(".txt", "").replaceAll("_", " ");
  btn.style = "white-space:normal;display:inline-flex";

  btn.addEventListener('click', function() {
    botonClickado(sistema.nombre, fichero.nombre);
  });
  return btn;
}

function botonClickado(sistema, fichero){
  obtenerElementoAleatorioBoton(sistema, fichero);
}

function cargarDatosNavegador(){
  return JSON.parse(localStorage.getItem("datos_sistemas"));
}

function cargarDatos() {
  const sistemaSelect = document.getElementById('sistemas');
  const ficheroSelect = document.getElementById('ficheros');
  const sistemaFiltroSelect = document.getElementById('filtro-sistemas-combo');
  const sistemaFiltroTexto = document.getElementById('filtro-sistemas-texto');
  sistemaSelect.addEventListener('change', clickSistemas);
  ficheroSelect.addEventListener('change', clickFicheros);
  sistemaFiltroSelect.addEventListener('change', rellenarBotones);
  //sistemaFiltroTexto.addEventListener('keypress', rellenarBotones);
  cargarSistemas();
}

function clickSistemas(){
  const sistemaSelect = document.getElementById('sistemas');
  const ficheroSelect = document.getElementById('ficheros');
  const contenidoTextarea = document.getElementById('contenido');
  
  ficheroSelect.innerHTML = "";
  contenidoTextarea.value = "";

  const sistemaSeleccionado = Array.from(sistemaSelect.selectedOptions).map(option => option.value)[0];

  for (const sistema of datos.sistemas){
    if (sistema.nombre == sistemaSeleccionado){
      for (const fichero of sistema.ficheros){
        const option = document.createElement("option");
        option.value = fichero.nombre;
        option.textContent = fichero.nombre;
        ficheroSelect.appendChild(option);
      }
    }
  }
}

function clickFicheros(){
  const sistemaSelect = document.getElementById('sistemas');
  const ficheroSelect = document.getElementById('ficheros');
  const contenidoTextarea = document.getElementById('contenido');

  const sistemaSeleccionado = Array.from(sistemaSelect.selectedOptions).map(option => option.value)[0];
  const ficheroSeleccionado = Array.from(ficheroSelect.selectedOptions).map(option => option.value);

  for (const sistema of datos.sistemas){
    if (sistema.nombre == sistemaSeleccionado){
      for (const fichero of sistema.ficheros){
        if (fichero.nombre == ficheroSeleccionado){
          contenidoTextarea.value = fichero.contenido;
        }
      }
    }
  }
}

function cargarSistemas(){
  const sistemasElement = document.getElementById("sistemas");
  const sistemasFiltrosElement = document.getElementById("filtro-sistemas-combo");

  for (const sistema of datos.sistemas) {
    const option = document.createElement("option");
    option.value = sistema.nombre;
    option.textContent = sistema.nombre;
    sistemasElement.appendChild(option);

    const optionFiltro = document.createElement("option");
    optionFiltro.value = sistema.nombre;
    optionFiltro.textContent = sistema.nombre;
    sistemasFiltrosElement.appendChild(optionFiltro);
  }

    const optionFiltro = document.createElement("option");
    optionFiltro.value = "Todos";
    optionFiltro.textContent = "Todos";
    sistemasFiltrosElement.appendChild(optionFiltro);

}

function generarTablaAleatoria(tabla) {
  const numeroAleatorio = Math.floor(Math.random() * tabla.length);
  return tabla[numeroAleatorio];
}

function obtenerElementoAleatorio(){
  const contenidoTextarea = document.getElementById('contenido');
  const resultadoTextarea = document.getElementById('resultado');

  elementos = contenidoTextarea.value.split("\n");
  elementos = elementos.filter(item => item);
  elementoAleatorio = generarTablaAleatoria(elementos);

  stringAdevolver = resultadoTextarea.value + elementoAleatorio + "\n";

  resultadoTextarea.value = stringAdevolver;
  var textarea = document.getElementById("resultado");
  textarea.scrollTop = textarea.scrollHeight;
}

function obtenerElementoAleatorioBoton(sistemaSeleccionado, ficheroSeleccionado){
  for (const sistema of datos.sistemas){
    if (sistema.nombre == sistemaSeleccionado){
      for (const fichero of sistema.ficheros){
        if (fichero.nombre == ficheroSeleccionado){
          contenidoTabla = fichero.contenido;
        }
      }
    }
  }

  const resultadoTextarea = document.getElementById('resultado');

  elementos = contenidoTabla.split("\n");
  elementos = elementos.filter(item => item);
  elementoAleatorio = generarTablaAleatoria(elementos);

  stringAdevolver = resultadoTextarea.value + elementoAleatorio + "\n";

  resultadoTextarea.value = stringAdevolver;
  var textarea = document.getElementById("resultado");
  textarea.scrollTop = textarea.scrollHeight;
}

function resetResultados(){
  const resultadoTextarea = document.getElementById('resultado');
  resultadoTextarea.value = "";

}
