 // Leer el JSON almacenado en el LocalStorage


cargarDatosDefault();
const datos = cargarDatosNavegador();
rellenarBotones();

function cargarDatosDefault(){
  localStorage.setItem("datos_sistemas", jsonDatos);
}

function rellenarBotones(){
  const containerBotones = document.getElementById('botones');
  cont = 0;
  var row = document.createElement('div');
  row.className = 'row mt-3';

  for (const sistema of datos.sistemas){
    for (const fichero of sistema.ficheros){
      btn = crearBoton(sistema, fichero);
      var col1 = document.createElement('div');
      col1.className = 'col-md-3';
      col1.appendChild(btn);
      
      //containerBotones.appendChild(btn);

      if(cont === 0){
        containerBotones.appendChild(row);
        var row = document.createElement('div');
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
  sistemaSelect.addEventListener('change', clickSistemas);
  ficheroSelect.addEventListener('change', clickFicheros);
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

  for (const sistema of datos.sistemas) {
    const option = document.createElement("option");
    option.value = sistema.nombre;
    option.textContent = sistema.nombre;
    sistemasElement.appendChild(option);
  }

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

  if (elementoAleatorio == "undefined"){
    console.log("ble");
  }

  stringAdevolver = resultadoTextarea.value + elementoAleatorio + "\n";

  resultadoTextarea.value = stringAdevolver;
  var textarea = document.getElementById("resultado");
  textarea.scrollTop = textarea.scrollHeight;
}

function resetResultados(){
  const resultadoTextarea = document.getElementById('resultado');
  resultadoTextarea.value = "";

}
