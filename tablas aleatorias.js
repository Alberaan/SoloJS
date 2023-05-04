 // Leer el JSON almacenado en el LocalStorage


//cargarDatosDefault();

cargarDatosOnLoad();


function importarTablas() {
  const input = document.createElement('input');
  input.type = 'file';

  input.onchange = function(event) {
    const archivo = event.target.files[0];
    const lector = new FileReader();
    lector.readAsText(archivo);

    lector.onload = function() {
      datos = JSON.parse(lector.result);
      localStorage.setItem("datos_sistemas", lector.result);
      cargarDatos();
      rellenarBotones();
    };

    lector.onerror = function() {
      console.log('Error al leer el archivo');
    };
  };

  input.click();
}

function exportarTablas(){
  console.log(datos);
  text = JSON.stringify(datos);
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', "tablas.txt");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function cargarDatosOnLoad(){
  datos = JSON.parse(localStorage.getItem("datos_sistemas"));

  if (datos == null){
    localStorage.setItem("datos_sistemas", jsonDatos);
    const datos = cargarDatosNavegador();
  }
  cargarDatos();
  rellenarBotones();
}

function cargarDatosDefault(){
  localStorage.setItem("datos_sistemas", jsonDatos);
  datos = cargarDatosNavegador();
  cargarDatos();
  rellenarBotones();
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

function crearTabla(){
  const sistemaSelect = document.getElementById('sistemas');

  let nuevaTabla = prompt("Nombre de la nueva tabla:", "Nueva tabla");

  if (nuevaTabla == null || nuevaTabla == "") {
    console.log("Cancelado");
    return
  } 

  for (sistema of datos.sistemas){
    if(sistema.nombre == sistemaSelect.value){
      fichero = {"nombre":nuevaTabla, "contenido": ""};
      sistema.ficheros.push(fichero);
    }
  }
  localStorage.setItem("datos_sistemas", JSON.stringify(datos));
  clickSistemas();
  rellenarBotones();
}

function crearSistema(){
  const sistemaSelect = document.getElementById('sistemas');

  let nuevoSistema = prompt("Nombre del nuevo sistema:", "Nuevo sistema");


  if (nuevoSistema== null || nuevoSistema== "") {
    console.log("Cancelado");
    return
  } 

  sistema = {"nombre": nuevoSistema, "ficheros":[]}
  datos.sistemas.push(sistema);

  localStorage.setItem("datos_sistemas", JSON.stringify(datos));
  cargarDatos();
  rellenarBotones();
}

function actualizarContenido(){
  const sistemaSelect = document.getElementById('sistemas');
  const ficheroSelect = document.getElementById('ficheros');
  const contenidoTextarea = document.getElementById('contenido').value;


  for (sistema of datos.sistemas){
    if(sistema.nombre == sistemaSelect.value){
      for (fichero of sistema.ficheros){
        if(fichero.nombre == ficheroSelect.value){
          fichero.contenido = contenidoTextarea;
        }
      }
    }
  }
  localStorage.setItem("datos_sistemas", JSON.stringify(datos));
  alert("Contenido actualizado");
}

function borrarTabla(){
  const sistemaSelect = document.getElementById('sistemas');
  const ficheroSelect = document.getElementById('ficheros');

  for (sistema of datos.sistemas){
    if(sistema.nombre == sistemaSelect.value){
      sistema.ficheros = sistema.ficheros.filter( el => el.nombre != ficheroSelect.value );
    }
  }
  localStorage.setItem("datos_sistemas", JSON.stringify(datos));
  clickSistemas();
  rellenarBotones();
}

function borrarSistema(){
  const sistemaSelect = document.getElementById('sistemas');
  const ficheroSelect = document.getElementById('ficheros');

  datos.sistemas = datos.sistemas.filter( el => el.nombre != sistemaSelect.value );

  localStorage.setItem("datos_sistemas", JSON.stringify(datos));
  cargarDatos();
  rellenarBotones();
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
  let sistemasElement = document.getElementById("sistemas");
  let ficherosElement = document.getElementById("ficheros");
  let contenido = document.getElementById("contenido");
  let sistemasFiltrosElement = document.getElementById("filtro-sistemas-combo");

  sistemasElement.innerHTML = null;
  ficherosElement.innerHTML = null;
  contenido.value = null;
  sistemasFiltrosElement.innerHTML = null;

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
