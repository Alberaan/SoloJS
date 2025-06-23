let maxHeight = 100;
let maxWidth = 100;
let maxHeightSala = maxHeight/10;
let maxWidthSala = maxWidth/10;
let numeroSalas = 50;
let radioSeparacion = 8;
let probabilidad = 0.8;

function leerParametrosUsuario() {
  maxHeight = parseInt(document.getElementById("maxHeight").value);
  maxWidth = parseInt(document.getElementById("maxWidth").value);
  numeroSalas = parseInt(document.getElementById("numeroSalas").value);
  radioSeparacion = parseInt(document.getElementById("radioSeparacion").value);
  probabilidad = parseFloat(document.getElementById("probabilidad").value);

  const maxHeightSala = Math.floor(maxHeight / 10);
  const maxWidthSala = Math.floor(maxWidth / 10);

  //return {
    //maxHeight,
    //maxWidth,
    //maxHeightSala,
    //maxWidthSala,
    //numeroSalas,
    //radioSeparacion,
    //probabilidad
  //};
}


function generarMapa() {
    leerParametrosUsuario();
    // Generación de mapa ASCII de ejemplo
    const mapaConSalas = generarMapaConSalas(numeroSalas)
    const centrosNoConectados = obtenerCentrosNoConectados(mapaConSalas.mapa, mapaConSalas.centros)
    const mapaConTuneles = conectarCentros(mapaConSalas.mapa, centrosNoConectados)
    const mapaConParedes = colocarParedes(mapaConTuneles);
    const mapaConPuertas = colocarPuertas(mapaConParedes, radioSeparacion, probabilidad);
    //const mapaConParedes = colocarParedes(mapaConSalas.mapa);
    const mapaTexto = matrizATexto(mapaConPuertas);

    document.getElementById("mapa").textContent = mapaTexto;
}

function generarMapaVacio(alto, ancho) {
  const matriz = [];

  for (let y = 0; y < alto; y++) {
    const fila = [];
    for (let x = 0; x < ancho; x++) {
      fila.push(' ');
    }
    matriz.push(fila);
  }

  return matriz;
}

function matrizATexto(matriz) {
    return matriz.map(fila => fila.join("")).join("\n");
}

function generarSalaRectangulo() {
  // Tamaños aleatorios dentro de los límites
  const alto = Math.floor(Math.random() * (maxHeightSala - 2)) + 2; // entre 2 y maxHeight
  const ancho = Math.floor(Math.random() * (maxWidthSala - 2)) + 2; // entre 2 y maxWidth

  // Crear la matriz de la sala
  const sala = [];

  for (let y = 0; y < alto; y++) {
    const fila = [];
    for (let x = 0; x < ancho; x++) {
      fila.push(".");
    }
    sala.push(fila);
  }

  return sala;
}

function generarSalaCirculo() {
  // Diámetro mínimo: 2, máximo: limitado por alto/ancho global
  const diametro = Math.floor(Math.random() * (Math.min(maxHeightSala, maxWidthSala) - 2)) + 2;
  const radio = Math.floor(diametro / 2);
  const alto = diametro;
  const ancho = diametro;

  const sala = [];

  for (let y = 0; y < alto; y++) {
    const fila = [];
    for (let x = 0; x < ancho; x++) {
      // Centro del círculo en el centro de la matriz
      const dx = x - radio + 0.5;
      const dy = y - radio + 0.5;
      const distancia = Math.sqrt(dx * dx + dy * dy);

      if (distancia <= radio) {
        fila.push(".");
      } else {
        fila.push(" ");
      }
    }
    sala.push(fila);
  }

  return sala;
}

function colocarSala(mapa, sala) {
  const mapaAlto = mapa.length;
  const mapaAncho = mapa[0].length;
  const salaAlto = sala.length;
  const salaAncho = sala[0].length;

  // Dejar un margen de 1 celda para permitir colocar paredes sin salirse
  const maxY = mapaAlto - salaAlto - 1;
  const maxX = mapaAncho - salaAncho - 1;

  if (maxY < 1 || maxX < 1) {
    console.warn("La sala es demasiado grande para el mapa con margen.");
    return { mapa, centro: null };
  }

  const offsetY = Math.floor(Math.random() * (maxY)) + 1;
  const offsetX = Math.floor(Math.random() * (maxX)) + 1;

  const nuevoMapa = mapa.map(fila => [...fila]);

  for (let y = 0; y < salaAlto; y++) {
    for (let x = 0; x < salaAncho; x++) {
      const char = sala[y][x];
      if (char !== ' ') {
        nuevoMapa[offsetY + y][offsetX + x] = char;
      }
    }
  }

  // Asegurar que el centro esté sobre una celda de suelo real ('.')
  let centroY = offsetY + Math.floor(salaAlto / 2);
  let centroX = offsetX + Math.floor(salaAncho / 2);

  if (nuevoMapa[centroY][centroX] !== '.') {
    outer:
    for (let y = 0; y < salaAlto; y++) {
      for (let x = 0; x < salaAncho; x++) {
        if (sala[y][x] === '.') {
          centroY = offsetY + y;
          centroX = offsetX + x;
          break outer;
        }
      }
    }
  }

  return {
    mapa: nuevoMapa,
    centro: { x: centroX, y: centroY }
  };
}



function generarSalaAleatoria() {
  const tipos = [
    generarSalaRectangulo,
    generarSalaCirculo
    // Aquí podrías añadir más en el futuro, como blobs, pasillos, etc.
  ];

  const indice = Math.floor(Math.random() * tipos.length);
  return tipos[indice](); // llama a la función seleccionada
}

function generarMapaConSalas(nSalas) {
  let mapa = generarMapaVacio(maxHeight, maxWidth);
  const centros = [];

  for (let i = 0; i < nSalas; i++) {
    const sala = generarSalaAleatoria();
    const resultado = colocarSala(mapa, sala); // ahora devuelve { mapa, centro }

    mapa = resultado.mapa;

    if (resultado.centro) {
      centros.push(resultado.centro);
    }
  }

  return {
    mapa: mapa,
    centros: centros
  };
}

function conectarCentros(mapa, centros) {
  const nuevoMapa = mapa.map(fila => [...fila]); // clon profundo

  for (let i = 0; i < centros.length - 1; i++) {
    const origen = centros[i];
    const destino = centros[i + 1];

    let x = origen.x;
    let y = origen.y;

    // Movimiento horizontal primero
    while (x !== destino.x) {
      if (nuevoMapa[y][x] === " "){
        nuevoMapa[y][x] = '.';
      }
      x += x < destino.x ? 1 : -1;
    }

    // Luego movimiento vertical
    while (y !== destino.y) {
      nuevoMapa[y][x] = '.';
      y += y < destino.y ? 1 : -1;
    }

    // Marcar la intersección final
    nuevoMapa[y][x] = '.';
  }

  return nuevoMapa;
}


function colocarParedes(mapa) {
  const alto = mapa.length;
  const ancho = mapa[0].length;

  // Clonar el mapa original
  const nuevoMapa = mapa.map(fila => [...fila]);

  // Función auxiliar para comprobar si una casilla es válida y no vacía
  function esDentro(y, x) {
    return y >= 0 && y < alto && x >= 0 && x < ancho;
  }

  for (let y = 0; y < alto; y++) {
    for (let x = 0; x < ancho; x++) {
      if (mapa[y][x] === ' ') {
        // Mirar las 8 casillas adyacentes
        const vecinos = [
          [y - 1, x],     // arriba
          [y + 1, x],     // abajo
          [y, x - 1],     // izquierda
          [y, x + 1],     // derecha
          [y - 1, x - 1], // esquina sup-izq
          [y - 1, x + 1], // esquina sup-der
          [y + 1, x - 1], // esquina inf-izq
          [y + 1, x + 1]  // esquina inf-der
        ];

        for (const [ny, nx] of vecinos) {
          if (esDentro(ny, nx) && mapa[ny][nx] !== ' ') {
            nuevoMapa[y][x] = '#';
            break;
          }
        }
      }
    }
  }

  return nuevoMapa;
}

function obtenerCentrosNoConectados(mapa, centros) {
  const alto = mapa.length;
  const ancho = mapa[0].length;
  const visitado = Array.from({ length: alto }, () => Array(ancho).fill(false));
  const regiones = [];

  const esValido = (y, x) =>
    y >= 0 && y < alto && x >= 0 && x < ancho &&
    !visitado[y][x] &&
    mapa[y][x] !== ' ' && mapa[y][x] !== '#';

  // Flood fill para encontrar regiones
  function floodFill(y, x) {
    const region = [];
    const cola = [[y, x]];

    while (cola.length > 0) {
      const [cy, cx] = cola.pop();

      if (!esValido(cy, cx)) continue;

      visitado[cy][cx] = true;
      region.push({ x: cx, y: cy });

      const vecinos = [
        [cy - 1, cx],
        [cy + 1, cx],
        [cy, cx - 1],
        [cy, cx + 1]
      ];

      for (const [ny, nx] of vecinos) {
        if (esValido(ny, nx)) {
          cola.push([ny, nx]);
        }
      }
    }

    return region;
  }

  // Construir todas las regiones
  for (let y = 0; y < alto; y++) {
    for (let x = 0; x < ancho; x++) {
      if (esValido(y, x)) {
        regiones.push(floodFill(y, x));
      }
    }
  }

  // Asociar cada centro a una región
  const centrosPorRegion = regiones.map(() => []);

  for (const centro of centros) {
    for (let i = 0; i < regiones.length; i++) {
      if (regiones[i].some(p => p.x === centro.x && p.y === centro.y)) {
        centrosPorRegion[i].push(centro);
        break;
      }
    }
  }

  // Encontrar la región más grande
  let mayor = 0;
  for (let i = 1; i < centrosPorRegion.length; i++) {
    if (centrosPorRegion[i].length > centrosPorRegion[mayor].length) {
      mayor = i;
    }
  }

  // Centros no conectados: los que no están en la región principal
  const centrosNoConectados = centros.filter(c =>
    !centrosPorRegion[mayor].some(p => p.x === c.x && p.y === c.y)
  );

  return ordenarCentrosPorProximidad(centrosNoConectados);
}
function ordenarCentrosPorProximidad(centros) {
  if (centros.length === 0) return [];

  const ordenados = [];
  const restantes = [...centros];
  
  // Empezar desde el primer centro
  let actual = restantes.shift();
  ordenados.push(actual);

  while (restantes.length > 0) {
    // Buscar el más cercano al actual
    let masCercanoIndex = 0;
    let distanciaMin = distancia(actual, restantes[0]);

    for (let i = 1; i < restantes.length; i++) {
      const dist = distancia(actual, restantes[i]);
      if (dist < distanciaMin) {
        distanciaMin = dist;
        masCercanoIndex = i;
      }
    }

    actual = restantes.splice(masCercanoIndex, 1)[0];
    ordenados.push(actual);
  }

  return ordenados;
}

// Distancia de Manhattan
function distancia(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function colocarPuertas(mapa, radioSeparacion, probabilidad) {
  const alto = mapa.length;
  const ancho = mapa[0].length;
  const nuevoMapa = mapa.map(fila => [...fila]);

  const esSuelo = c => c === '.';
  const esPared = c => c === '#';
  const esPuerta = c => c === '+';

  // Verifica si ya hay una puerta cerca en un radio configurable
  function puertaCerca(y, x) {
    for (let dy = -radioSeparacion; dy <= radioSeparacion; dy++) {
      for (let dx = -radioSeparacion; dx <= radioSeparacion; dx++) {
        const ny = y + dy;
        const nx = x + dx;
        if (
          ny >= 0 && ny < alto &&
          nx >= 0 && nx < ancho &&
          (dy !== 0 || dx !== 0) &&
          esPuerta(nuevoMapa[ny][nx])
        ) {
          return true;
        }
      }
    }
    return false;
  }

  for (let y = radioSeparacion; y < alto - radioSeparacion; y++) {
    for (let x = radioSeparacion; x < ancho - radioSeparacion; x++) {
      if (mapa[y][x] !== '.') continue;

      const arriba = mapa[y - 1][x];
      const abajo  = mapa[y + 1][x];
      const izq    = mapa[y][x - 1];
      const der    = mapa[y][x + 1];

      const vertical = esPared(arriba) && esPared(abajo);
      const horizontal = esPared(izq) && esPared(der);

      if ((vertical || horizontal) && !puertaCerca(y, x) && Math.random() < probabilidad) {
        nuevoMapa[y][x] = '+';
      }
    }
  }

  return nuevoMapa;
}
