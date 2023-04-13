    function reset() {
      document.getElementById("input-localizacion-grande").value = 0;
      document.getElementById("input-localizacion-pequenya").value = 0;
      document.getElementById("input-encuentros").value = 0;
      document.getElementById("input-objetos").value = 0;
      document.getElementById("output-exploracion").value = "";

    }
    function explorar() {
      ppLocalizacionGrande = Number(document.getElementById("input-localizacion-grande").value);
      ppLocalizacionPequenya = Number(document.getElementById("input-localizacion-pequenya").value);
      ppEncuentros = Number(document.getElementById("input-encuentros").value);
      ppObjetos = Number(document.getElementById("input-objetos").value);
      area = "";
      exploradoTexto = document.getElementById("output-exploracion").value;
      
      if (exploradoTexto == null){
        exploradoTexto = "";
      }

      textoExplorarLocalizacionGrande = explorarLocalizacionGrande(ppLocalizacionGrande);
      textoExplorarLocalizacionPequenya = explorarLocalizacionPequenya(ppLocalizacionPequenya);
      textoExplorarEncuentros = explorarEncuentros(ppEncuentros);
      textoExplorarObjetos = explorarObjetos(ppObjetos);


      area = exploradoTexto + "Localización grande: " + textoExplorarLocalizacionGrande;
      area = area + "\n" + "Localización pequeña: " + textoExplorarLocalizacionPequenya;
      area = area + "\n" + "Encuentro: " + textoExplorarEncuentros;
      area = area + "\n" + "Objeto: " + textoExplorarObjetos;
      area = area + "\n\n";
      
      if(textoExplorarLocalizacionGrande.includes("PP-6")){
        ppLocalizacionGrande = ppLocalizacionGrande - 6;
      }
      if(textoExplorarLocalizacionGrande.includes("PP+2")){
        ppLocalizacionGrande = ppLocalizacionGrande + 2;
      }
      if(textoExplorarLocalizacionGrande.includes("PP-3")){
        ppLocalizacionGrande = ppLocalizacionGrande - 3;
      }
      if(textoExplorarLocalizacionPequenya.includes("PP-6")){
        ppLocalizacionPequenya= ppLocalizacionPequenya- 6;
      }
      if(textoExplorarLocalizacionPequenya.includes("PP+2")){
        ppLocalizacionPequenya= ppLocalizacionPequenya+ 2;
      }
      if(textoExplorarLocalizacionPequenya.includes("PP-3")){
        ppLocalizacionPequenya = ppLocalizacionPequenya - 3;
      }
      if(textoExplorarEncuentros.includes("PP-6")){
        ppEncuentros = ppEncuentros - 6;
      }
      if(textoExplorarEncuentros.includes("PP+2")){
        ppEncuentros = ppEncuentros + 2;
      }
      if(textoExplorarEncuentros.includes("PP-3")){
        ppEncuentros = ppEncuentros - 3;
      }

      if(textoExplorarObjetos.includes("PP-6")){
        ppObjetos = ppObjetos - 6;
      }
      if(textoExplorarObjetos.includes("PP+2")){
        ppObjetos = ppObjetos + 2;
      }
      if(textoExplorarObjetos.includes("PP-3")){
        ppObjetos = ppObjetos - 3;
      }

      if (ppLocalizacionGrande < 0){
        ppLocalizacionGrande = 0;
      }
      if (ppLocalizacionPequenya< 0){
        ppLocalizacionPequenya= 0;
      }
      if (ppEncuentros < 0){
        ppEncuentros = 0;
      }
      if (ppObjetos < 0){
        ppObjetos = 0;
      }
      document.getElementById("output-exploracion").value = area;
      document.getElementById("input-localizacion-grande").value = ppLocalizacionGrande + 1;
      document.getElementById("input-localizacion-pequenya").value = ppLocalizacionPequenya + 1;
      document.getElementById("input-encuentros").value = ppEncuentros + 1;
      document.getElementById("input-objetos").value = ppObjetos + 1;
      var textarea = document.getElementById("output-exploracion");
      textarea.scrollTop = textarea.scrollHeight;}

    function procesarConocidos(tipo){
      if (tipo == "Localizaciones"){
        objetoABuscar = "input-localizaciones-conocidas";
      }
      if (tipo == "Encuentros"){
        objetoABuscar = "input-encuentros-conocidos";
      }
      if (tipo == "Objetos"){
        objetoABuscar = "input-objetos-conocidos";
      }
      conocidos = document.getElementById(objetoABuscar).value.split("\n");
      
      var randomElement = conocidos[Math.floor(Math.random()*conocidos.length)];


      const index = conocidos.indexOf(randomElement);
      if (index > -1) { // only splice array when item is found
        conocidos.splice(index, 1); // 2nd parameter means remove one item only
      }
      
      nuevosConocidos = conocidos.join("\n");

      document.getElementById(objetoABuscar).value = nuevosConocidos;
      return randomElement;
    }

    function procesarEspecial(tipoEspecial){

      consultaEspecial = generarTablaAleatoria(tablaEspecial);

      if (tipoEspecial === "Localizacion grande"){
        elementoArea1 = generarTablaAleatoria(tablaElementosDelAreaLocalizacionGrande);
        elementoArea2 = generarTablaAleatoria(tablaElementosDelAreaLocalizacionGrande);
      };

      if (tipoEspecial === "Localizacion pequenya"){
        elementoArea1 = generarTablaAleatoria(tablaElementosDelAreaLocalizacionPequenya);
        elementoArea2 = generarTablaAleatoria(tablaElementosDelAreaLocalizacionPequenya);
      };

      if (tipoEspecial === "Encuentros"){
        elementoArea1 = generarTablaAleatoria(tablaElementosDelAreaEncuentrosYObjetos);
        elementoArea2 = generarTablaAleatoria(tablaElementosDelAreaEncuentrosYObjetos);
      };

      if (tipoEspecial === "Objetos"){
        elementoArea1 = generarTablaAleatoria(tablaElementosDelAreaEncuentrosYObjetos);
        elementoArea2 = generarTablaAleatoria(tablaElementosDelAreaEncuentrosYObjetos);
      };

      if (consultaEspecial.includes("EXTRA GRANDE")){
        if (elementoArea1.includes("Especial")){
          return "Extra grande: " + "Esperado" + ". Realza el elemento obtenido tanto como sea posible. Hazlo más intenso, del modo que sea.";
        }
        return "Extra grande: " + elementoArea1 + ". Realza el elemento obtenido tanto como sea posible. Hazlo más intenso, del modo que sea.";
      }

      if (consultaEspecial.includes("APENAS ESTÁ AHÍ")){
        if (elementoArea1.includes("Especial")){
          return "Apenas está ahí: " + "Esperado" + ". Minimiza el elemento obtenido tanto como sea posible. Disminuye su intensidad, del modo que sea.";
        }
        return "Extra grande: " + elementoArea1 + ". Minimiza el elemento obtenido tanto como sea posible. Disminuye su intensidad, del modo que sea.";
      }

      if (consultaEspecial.includes("ESTO ES MALO")){
        if (elementoArea1.includes("Especial")){
          return "Esto es malo: " + "Esperado" + ". Interpreta lo que hayas obtenido de forma que sea perjudicial para los PJs. Puede ser un encuentro peligroso, una trampa o algo roto o inservible. Dale una connotación negativa a cualquier detalle que generes.";
        }
        return "Esto es malo: " + elementoArea1 + ". Interpreta lo que hayas obtenido de forma que sea perjudicial para los PJs. Puede ser un encuentro peligroso, una trampa o algo roto o inservible. Dale una connotación negativa a cualquier detalle que generes.";
      }

      if (consultaEspecial.includes("ESTO ES BUENO")){
        if (elementoArea1.includes("Especial")){
          return "Esto es bueno: " + "Esperado" + ". Interpreta lo que hayas obtenido de forma que sea positivo para los PJs. Puede ser un encuentro amistoso, una salida o algo útil. Dale una connotación positiva a cualquier detalle que generes.";
        }
        return "Esto es bueno: " + elementoArea1 + ". Interpreta lo que hayas obtenido de forma que sea positivo para los PJs. Puede ser un encuentro amistoso, una salida o algo útil. Dale una connotación positiva a cualquier detalle que generes.";
      }

      if (consultaEspecial.includes("MULTIELEMENTO")){
        if (elementoArea1.includes("Especial")){
          elementoArea1 = "Esperado";
        }
        if (elementoArea2.includes("Especial")){
          elementoArea2 = "Esperado";
        }
        return "Multielemento: " + elementoArea1 + ". " + elementoArea2;
      }

      if (consultaEspecial.includes("SALIDA")){
        return consultaEspecial;
      }

      if (consultaEspecial.includes("RETORNO")){
        return consultaEspecial;
      }

      if (consultaEspecial.includes("AVANCE")){
        return consultaEspecial;
      }

      if (consultaEspecial.includes("NADA NUEVO")){
        return consultaEspecial;
      }

    }

    function explorarLocalizacionGrande(ppExploracion){
      devolver = generarTablaAleatoriaExplorar(tablaElementosDelAreaLocalizacionGrande, Number(ppExploracion));

      if(devolver === "Al azar"){
        devolver = devolver.replace("Al azar", "Al azar (" + generarTablaAleatoria(tablaLocalizacion) + " | " + generarTablaAleatoria(tablaLocalizacion) + ")");
        return devolver;
      }

      if(devolver.includes("Conocido")){
        localizacionConocida = procesarConocidos("Localizaciones");

        if (localizacionConocida === ""){
          if (devolver.includes("al azar")){
            devolver = "No hay localizaciones conocidas. Se tira al azar (" + generarTablaAleatoria(tablaLocalizacion) + " | " + generarTablaAleatoria(tablaLocalizacion) + ")";
            return devolver;
          }
        }
        devolver = "Conocida: " + localizacionConocida;
        return devolver;
      }

      if(devolver === "Especial"){
        devolver = "Especial (" + procesarEspecial("Localizacion grande") + ")";
        return devolver;
      }

      return devolver;
    }

    function explorarLocalizacionPequenya(ppExploracion){
      devolver = generarTablaAleatoriaExplorar(tablaElementosDelAreaLocalizacionPequenya, Number(ppExploracion));

      if(devolver === "Al azar"){
        devolver = "Al azar (" + generarTablaAleatoria(tablaLocalizacion) + " | " + generarTablaAleatoria(tablaLocalizacion) + ")";
        return devolver;
      }

      if(devolver.includes("Conocido")){
        localizacionConocida = procesarConocidos("Localizaciones");

        if (localizacionConocida === ""){
          if (devolver.includes("al azar")){
            devolver = "No hay localizaciones conocidas. Se tira al azar (" + generarTablaAleatoria(tablaLocalizacion) + " | " + generarTablaAleatoria(tablaLocalizacion) + ")";
            return devolver;
          }
          if (devolver.includes("Especial")){
            devolver = "No hay localizaciones conocidas. Se tira Especial (" + procesarEspecial("Localizacion pequenya") +")";
            return devolver;
          }
        }
        devolver = "Conocido: " + localizacionConocida;
        return devolver;
      }

      return devolver;
    }

    function explorarEncuentros(ppExploracion){
      devolver = generarTablaAleatoriaExplorar(tablaElementosDelAreaEncuentrosYObjetos, Number(ppExploracion));
      if(devolver === "Al azar"){
        devolver = "Al azar (" + generarTablaAleatoria(tablaEncuentro) + " | " + generarTablaAleatoria(tablaEncuentro) + ")";
        return devolver;
      }

      if(devolver.includes("Conocido")){
        encuentroConocido = procesarConocidos("Encuentros");

        if (encuentroConocido === ""){
          if (devolver.includes("al azar")){
            devolver = "No hay encuentros conocidos. Se tira al azar (" + generarTablaAleatoria(tablaEncuentro) + " | " + generarTablaAleatoria(tablaEncuentro) + ")";
            return devolver;
          }
          if (devolver.includes("Especial")){
            devolver = "No hay encuentros conocidos. Se tira especial (" + procesarEspecial("Encuentros") + ")";
            return devolver;
          }
        }
        devolver = "Conocido: " + encuentroConocido;
        return devolver;
      }
      return devolver;
    }

    function explorarObjetos(ppExploracion){
      devolver = generarTablaAleatoriaExplorar(tablaElementosDelAreaEncuentrosYObjetos, Number(ppExploracion));
      if(devolver === "Al azar"){
        devolver = "Al azar (" + generarTablaAleatoria(tablaObjetos) + " | " + generarTablaAleatoria(tablaObjetos) + ")";
        return devolver;
      }

      if(devolver.includes("Conocido")){
        objetoConocido = procesarConocidos("Objetos");

        if (objetoConocido === ""){
          if (devolver.includes("al azar")){
            devolver = "No hay objetos conocidos. Se tira al azar (" + generarTablaAleatoria(tablaObjetos) + " | " + generarTablaAleatoria(tablaObjetos) + ")";
            return devolver;
          }
          if (devolver.includes("Especial")){
            devolver = "No hay objetos conocidos. Se tira especial (" + procesarEspecial("Objetos") + ")";
            return devolver;
          }
        }
        devolver = "Conocido: " + objetoConocido;
        return devolver;
      }
      return devolver;
    }

    function generarLocalizacion() {
      const tipoRegion = document.getElementById("tipo-region").value;
      let localizacion;

      switch (tipoRegion) {
        case "naturaleza":
          localizacion = generarLocalizacionNaturaleza();
          break;
        case "ciudad":
          localizacion = generarLocalizacionCiudad();
          break;
        case "edificacion":
          localizacion = generarLocalizacionEdificacion();
          break;
        default:
          localizacion = "Tipo de región inválido";
      }

      document.getElementById("output-region").innerHTML = localizacion;
    }

    function generarLocalizacionNaturaleza() {
      // Lógica para generar localizaciones de naturaleza
  
      descriptor1 = generarTablaAleatoria(tablaNaturaleza);
      descriptor2 = generarTablaAleatoria(tablaNaturaleza);

      if (descriptor1 === "*!*"){
        descriptor1 = generarDescriptorAlAzar("localizacion")
      }
      if (descriptor2 === "*!*"){
        descriptor2 = generarDescriptorAlAzar("localizacion")
      }

      return descriptor1 + "\n" + descriptor2; 
    }

    function generarLocalizacionCiudad() {
  
      descriptor1 = generarTablaAleatoria(tablaCiudad);
      descriptor2 = generarTablaAleatoria(tablaCiudad);

      
      if (descriptor1 === "Añade un elemento natural: consulta en la columna Naturaleza"){
        descriptor1 = descriptor1 + " -> " + generarTablaAleatoria(tablaNaturaleza);
      }
      if (descriptor2 === "Añade un elemento natural: consulta en la columna Naturaleza"){
        descriptor2 = descriptor2 + " -> " + generarTablaAleatoria(tablaNaturaleza);
      }

      if (descriptor1.includes("*!*")){
        descriptor1 = descriptor1.replace("!", generarDescriptorAlAzar("localizacion"));
      }
      if (descriptor2.includes("*!*")){
        descriptor2 = descriptor2.replace("*!*", generarDescriptorAlAzar("localizacion"));
      }

      return descriptor1 + "\n" + descriptor2; 

    }

    function generarLocalizacionEdificacion() {
      // Lógica para generar localizaciones de edificación

      descriptor1 = generarTablaAleatoria(tablaEdificacion);
      descriptor2 = generarTablaAleatoria(tablaEdificacion);

      if (descriptor1 === "Añade un elemento natural: consulta en la columna Naturaleza"){
        descriptor1 = descriptor1 + " -> " + generarTablaAleatoria(tablaNaturaleza);
      }
      if (descriptor2 === "Añade un elemento natural: consulta en la columna Naturaleza"){
        descriptor2 = descriptor2 + " -> " + generarTablaAleatoria(tablaNaturaleza);
      }
      if (descriptor1.includes("*!*")){
        descriptor1 = descriptor1.replace("*!*", generarDescriptorAlAzar("localizacion"));
      }
      if (descriptor2.includes("*!*")){
        descriptor2 = descriptor2.replace("*!*", generarDescriptorAlAzar("localizacion"));
      }

      return descriptor1 + "\n" + descriptor2; 
    }

function generarDescriptorAlAzar(tipoElemento){

  if (tipoElemento === "localizacion"){
      return "Descriptor localización: " + generarTablaAleatoria(tablaLocalizacion);
  }
  if (tipoElemento === "encuentro"){
      return "Descriptor encuentro: " + generarTablaAleatoria(tablaEncuentro);
  }
  if (tipoElemento === "objeto"){
      return "Descriptor objeto: " + generarTablaAleatoria(tablaObjeto);
  }
  return "Error";
}

function generarTablaAleatoria(tabla) {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  for (const rango of tabla) {
    if (numeroAleatorio >= rango[0] && numeroAleatorio <= rango[1]) {
      return rango[2];
    }
  }
}

function generarTablaAleatoriaExplorar(tabla, ppExploracion) {
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1 + ppExploracion;
  for (const rango of tabla) {
    if (numeroAleatorio >= rango[0] && numeroAleatorio <= rango[1]) {
      return rango[2];
    }
  }
}

