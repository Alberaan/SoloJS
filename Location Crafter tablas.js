    const tablaEspecial = [
        [1, 10, "EXTRA GRANDE: Tira en la Tabla de Elementos de Área (si obtienes Especial nuevamente, trátalo como Esperado). Realza el elemento obtenido tanto como sea posible. Hazlo más intenso, del modo que sea."], 
        [11, 20, "APENAS ESTÁ AHÍ: Tira en la Tabla de Elementos de Área (si obtienes Especial nuevamente, trátalo como Esperado). Minimiza el elemento obtenido tanto como sea posible. Disminuye su intensidad, del modo que sea."], 
        [21, 30, "ESTO ES MALO: Tira en la Tabla de Elementos de Área (si obtienes Especial nuevamente, trátalo como Esperado). Interpreta lo que hayas obtenido de forma que sea perjudicial para los PJs. Puede ser un encuentro peligroso, una trampa o algo roto o inservible. Dale una connotación negativa a cualquier detalle que generes."], 
        [31, 40, "ESTO ES BUENO: Tira en la Tabla de Elementos de Área (si obtienes Especial nuevamente, trátalo como Esperado). Interpreta lo que hayas obtenido de forma que sea positivo para los PJs. Puede ser un encuentro amistoso, una salida o algo útil. Dale una connotación positiva a cualquier detalle que generes."], 
        [41, 50, "MULTIELEMENTO: Tira dos veces en la Tabla de Elementos de Área (si obtienes Especial nuevamente, trátalo como Esperado) y combina ambos Elementos."], 
        [51, 65, "SALIDA: Esta Área, además de todo lo que contiene, también tiene una salida de la Región (si es posible). Si este resultado no tiene sentido, ignóralo y trátalo como un elemento Esperado."], 
        [66, 80, "RETORNO: A parte del resto de cosas en esta Área, también tiene acceso a otra Área previamente explorada de la Región. Esto solo es posible si hay forma de llegar de un Área a otra (como puertas o vías que los Personajes aún no habían explorado). Elige la conexión con el Área más lógica. Si este resultado no tiene sentido, ignóralo y trátalo como un elemento Esperado."], 
        [81, 90, "AVANCE: Considera este elemento como un elemento Esperado. PP+2."], 
        [91, 100, "NADA NUEVO: Considera este elemento como un elemento Esperado. PP-3."]
    ];

    const tablaElementosDelAreaLocalizacionGrande = [
        [1, 5, "Esperado"], 
        [6, 8, "Esperado"], 
        [9, 10, "Al azar"],
        [11, 11, "Conocido, o al azar"], 
        [12, 12, "Conocido, o al azar"],
        [13, 13, "Especial"],
        [14, 14, "Completado"], 
        [15, 15, "Completado"],
        [16, 999, "Esperado, PP-6"]
    ];

    const tablaElementosDelAreaLocalizacionPequenya = [
        [1, 5, "Esperado"], 
        [6, 8, "Esperado"], 
        [9, 10, "Al azar"],
        [11, 11, "Conocido, o al azar"], 
        [12, 12, "Completado"],
        [13, 13, "Conocido, o Especial"],
        [14, 14, "Completado"], 
        [15, 15, "Completado"],
        [16, 999, "Esperado, PP-6"]
    ];

    const tablaElementosDelAreaEncuentrosYObjetos = [
        [1, 5, "Ninguno"], 
        [6, 8, "Esperado"], 
        [9, 10, "Al azar"],
        [11, 11, "Conocido, o al azar"], 
        [12, 12, "Ninguno"],
        [13, 13, "Conocido, o Especial"],
        [14, 14, "Esperado"], 
        [15, 15, "Esperado"], 
        [16, 999, "Esperado, PP-6"]
    ];

    const tablaNaturaleza = [
        [1, 5, "Seca y árida"],
        [6, 10, "Húmeda"],
        [11, 15, "Densa vegetación"],
        [16, 20, "Rocosa"],
        [21, 25, "Mucho espacio abierto"],
        [26, 30, "Arenosa, polvorienta, o accidentada"],
        [31, 35, "Estéril"],
        [36, 40, "Elementos naturales activos (volcán, catarata, río, viento, lluvia)"],
        [41, 45, "Cálida"],
        [46, 50, "Fría"],
        [51, 60, "Difícil de atravesar"],
        [61, 65, "Flora"],
        [66, 70, "Fauna activa"],
        [71, 75, "Montañosa"],
        [76, 80, "Con acantilados"],
        [81, 85, "Peligrosa"],
        [86, 90, "Masa de agua"],
        [91, 95, "Exótica"],
        [96, 100, "*!*"]
        ];

    const tablaCiudad = [
        [1, 5, "Grande y floreciente"],
        [6, 10, "Grande y floreciente"],
        [11, 15, "Moderna"],
        [16, 20, "Antigua"],
        [21, 25, "Próspera y bulliciosa"],
        [26, 30, "Inactiva o abandonada"],
        [31, 35, "Tranquila, dormida"],
        [36, 40, "Añade un elemento natural: consulta en la columna Naturaleza"],
        [41, 45, "Peligrosa"],
        [46, 50, "Ordenada y organizada"],
        [51, 60, "En crisis"],
        [61, 65, "Rica, en auge"],
        [66, 70, "Densamente poblada"],
        [71, 75, "Limpia"],
        [76, 80, "Amistosa"],
        [81, 85, "Hostil"],
        [86, 90, "Con propósito específico"],
        [91, 95, "Exótica"],
        [96, 100, "*!*"]
        ];

      const tablaEdificacion = [
        [1, 5, "Cuidada y bien construída"],
        [6, 10, "Deteriorada"],
        [11, 15, "En uso"],
        [16, 20, "Inactiva o abandonada"],
        [21, 25, "Antigua, de una era anterior"],
        [26, 30, "Vieja"],
        [31, 35, "Moderna"],
        [36, 40, "Añade un elemento natural: consulta en la columna Naturaleza"],
        [41, 45, "Sencilla o pequeña"],
        [46, 50, "Grande o alta"],
        [51, 60, "Acogedora"],
        [61, 65, "Funcional"],
        [66, 70, "Tranquila"],
        [71, 75, "Sólida"],
        [76, 80, "Peligrosa"],
        [81, 85, "Ocupada"],
        [86, 90, "Con propósito específico"],
        [91, 95, "Exótica"],
        [96, 100, "*!*"]
        ];

const tablaLocalizacion = [
      [1, 1, "Abandonada"], 
      [2,	2, "Divertida"], 
      [3,	3, "Antigua"], 
      [4,	4, "Aromática"], 
      [5,	5, "Hermosa"], 
      [6,	6, "Sombría"], 
      [7,	7, "Típica"], 
      [8,	8, "Extraña"], 
      [9,	9, "Tranquila"], 
      [10, 10, "Elegante"], 
      [11, 11, "Limpia"], 
      [12, 12, "Colorida"], 
      [13, 13, "Espeluznante"], 
      [14, 14, "Fría"], 
      [15, 15, "Bonita"], 
      [16, 16, "Dañada"], 
      [17, 17, "Peligrosa"], 
      [18, 18, "Oscura"], 
      [19, 19, "Sucia"], 
      [20, 20, "Deliciosa"], 
      [21, 21, "Gris"], 
      [22, 22, "Repugnante"], 
      [23, 23, "Enorme"], 
      [24, 24, "Seca"], 
      [25, 25, "Vacía"], 
      [26, 26, "Enorme"], 
      [27, 27, "Exótica"], 
      [28, 28, "Afortunada"], 
      [29, 29, "Familiar"], 
      [30, 30, "Aterrador"], 
      [31, 31, "Repleta"], 
      [32, 32, "Sofisticada"], 
      [33, 33, "Festiva"], 
      [34, 34, "Ruda"], 
      [35, 35, "Horrible"], 
      [36, 36, "Importante"], 
      [37, 37, "Útil"], 
      [38, 38, "Lujoso"], 
      [39, 39, "Magnífica"], 
      [40, 40, "Intensa"], 
      [41, 41, "Desordenada"], 
      [42, 42, "Militar"], 
      [43, 43, "Ruidosa"], 
      [44, 44, "Moderna"], 
      [45, 45, "Majestuosa"], 
      [46, 46, "Significativa"], 
      [47, 47, "Extravagante"], 
      [48, 48, "Mundana"], 
      [49, 49, "Misteriosa"], 
      [50, 50, "Natural"], 
      [51, 51, "Rara"], 
      [52, 52, "Oficial"], 
      [53, 53, "Pacífica"], 
      [54, 54, "Pequeña"], 
      [55, 55, "Favorable"], 
      [56, 56, "Reconfortante"], 
      [57, 57, "Pintoresca"], 
      [58, 58, "Tranquila"], 
      [59, 59, "Ruinosa"], 
      [60, 60, "Rústica"], 
      [61, 61, "Simple"], 
      [62, 62, "Amenazadora"], 
      [63, 63, "Maloliente"], 
      [64, 64, "Tranquila"], 
      [65, 65, "Cálida"], 
      [66, 66, "Acuosa"], 
      [67, 67, "Negativa"], 
      [68, 68, "Cerrada"], 
      [69, 69, "Doméstica"], 
      [70, 70, "Nueva"], 
      [71, 71, "Abierta"], 
      [72, 72, "Segura"], 
      [73, 73, "Esperada"], 
      [74, 74, "Inesperada"], 
      [75, 75, "Desconocida"], 
      [76, 76, "Activa"], 
      [77, 77, "Inactiva"], 
      [78, 78, "Dañina"], 
      [79, 79, "Primitiva"], 
      [80, 80, "Protección"], 
      [81, 81, "Única"], 
      [82, 82, "Brillante"], 
      [83, 83, "Adornada"], 
      [84, 84, "Atmósfera"], 
      [85, 85, "Sonidos"], 
      [86, 86, "Habilidosa"], 
      [87, 87, "Intencionada"], 
      [88, 88, "Personal"], 
      [89, 89, "Exclusiva"], 
      [90, 90, "Intrigante"], 
      [91, 91, "Eco"], 
      [92, 92, "Inestable"], 
      [93, 93, "Móvil"], 
      [94, 94, "Abarrotada"], 
      [95, 95, "Almacenaje"], 
      [96, 96, "Confusa"], 
      [97, 97, "Solitaria"], 
      [98, 98, "Larga"], 
      [99, 99, "Alta"], 
      [100, 100, "Artística"] 
];

const tablaEncuentro = [
[1, 1, "Anormal"], 
[2, 2, "Agresivo"], 
[3, 3, "Enfadado"], 
[4, 4, "Ansioso"], 
[5, 5, "Hermoso"], 
[6, 6, "Típico"], 
[7, 7, "Valiente"], 
[8, 8, "Ocupado"], 
[9, 9, "Tranquilo"], 
[10, 10, "Descuidado"], 
[11, 11, "Cauteloso"], 
[13, 13, "Combativo"], 
[14, 14, "Extraño"], 
[12, 12, "Alegre"], 
[15, 15, "Loco"], 
[16, 16, "Curioso"], 
[17, 17, "Peligroso"], 
[18, 18, "Desafiante"], 
[19, 19, "Elegante"], 
[20, 20, "Delicioso"], 
[21, 21, "Terrorífico"], 
[22, 22, "Enérgico"], 
[23, 23, "Enorme"], 
[24, 24, "Excitado"], 
[25, 25, "Asustado"], 
[26, 26, "Feroz"], 
[27, 27, "Tonto"], 
[28, 28, "Fortuito"], 
[29, 29, "Frenético"], 
[30, 30, "Aterrador"], 
[31, 31, "Bonito"], 
[32, 32, "Generoso"], 
[33, 33, "Cuidadoso"], 
[34, 34, "Alegre"], 
[35, 35, "Grácil"], 
[36, 36, "Feliz"], 
[37, 37, "Útil"], 
[38, 38, "Indefenso"], 
[39, 39, "Inocente"], 
[40, 40, "Intenso"], 
[41, 41, "Perezoso"], 
[42, 42, "Derrotado"], 
[43, 43, "Ruidoso"], 
[44, 44, "Leal"], 
[45, 45, "Majestuoso"], 
[46, 46, "Asqueroso"], 
[47, 47, "Enorme"], 
[48, 48, "Miserable"], 
[49, 49, "Misterioso"], 
[50, 50, "Débil"], 
[51, 51, "Raro"], 
[52, 52, "Oficial"], 
[53, 53, "Pacífico"], 
[54, 54, "Juguetón"], 
[55, 55, "Favorable"], 
[56, 56, "Poderoso"], 
[57, 57, "Exótico"], 
[58, 58, "Familiar"], 
[59, 59, "Lento"], 
[60, 60, "Horrible"], 
[61, 61, "Rápido"], 
[62, 62, "Amenazador"], 
[63, 63, "Violento"], 
[64, 64, "Salvaje"], 
[65, 65, "Importante"], 
[66, 66, "Solitario"], 
[67, 67, "Poderoso"], 
[68, 68, "Militar"], 
[69, 69, "Mundano"], 
[70, 70, "Potente"], 
[71, 71, "Tranquilizador"], 
[72, 72, "Pequeño"], 
[73, 73, "Maloliente"], 
[74, 74, "Fuerte"], 
[75, 75, "Acuoso"], 
[76, 76, "Débil"], 
[77, 77, "Emboscada"], 
[78, 78, "Dañino"], 
[79, 79, "Trampa"], 
[80, 80, "Amigo"], 
[81, 81, "Enemigo"], 
[82, 82, "Negativo"], 
[83, 83, "Malvado"], 
[84, 84, "Animal"], 
[85, 85, "Esperado"], 
[86, 86, "Inesperado"], 
[87, 87, "Foráneo"], 
[88, 88, "Armado"], 
[89, 89, "Activo"], 
[90, 90, "Inactivo"], 
[91, 91, "Múltiple"], 
[92, 92, "Solitario"], 
[93, 93, "Primitivo"], 
[94, 94, "Inusual"], 
[95, 95, "Rápido"], 
[96, 96, "Oculto"], 
[97, 97, "Natural"], 
[98, 98, "Silencioso"], 
[99, 99, "Antinatural"], 
[100, 100, "Habilidoso"]
];

const tablaObjetos = [
[1, 1, "Divertido"], 
[2,	2, "Antiguo"], 
[3,	3, "Aromático"], 
[4,	4, "Típico"], 
[5,	5, "Hermoso"], 
[6,	6, "Extraño"], 
[7,	7, "Elegante"], 
[8,	8, "Colorido"], 
[9,	9, "Espeluznante"], 
[10, 10, "Bonito"], 
[11, 11, "Dañado"], 
[12, 12, "Delicado"], 
[13, 13, "Asqueroso"], 
[14, 14, "Frío"], 
[15, 15, "Vacío"], 
[16, 16, "Enorme"], 
[17, 17, "Peligroso"], 
[18, 18, "Exótico"], 
[19, 19, "Deliberado"], 
[20, 20, "Delicioso"], 
[21, 21, "Desvanecido"], 
[22, 22, "Familiar"], 
[23, 23, "Enorme"], 
[24, 24, "Sofisticado"], 
[25, 25, "Duro"], 
[26, 26, "Pesado"], 
[27, 27, "Horrible"], 
[28, 28, "Afortunado"], 
[29, 29, "Importante"], 
[30, 30, "Aterrador"], 
[31, 31, "Grande"], 
[32, 32, "Letal"], 
[33, 33, "Glorioso"], 
[34, 34, "Militar"], 
[35, 35, "Moderno"], 
[36, 36, "Extravagante"], 
[37, 37, "Útil"], 
[38, 38, "Mundano"], 
[39, 39, "Natural"], 
[40, 40, "Potente"], 
[41, 41, "Inusual"], 
[42, 42, "Ligero"], 
[43, 43, "Ruidoso"], 
[44, 44, "Reconfortante"], 
[45, 45, "Majestuoso"], 
[46, 46, "Significativo"], 
[47, 47, "Mecánico"], 
[48, 48, "Estropeado"], 
[49, 49, "Misterioso"], 
[50, 50, "Nuevo"], 
[51, 51, "Raro"], 
[52, 52, "Oficial"], 
[53, 53, "Pequeño"], 
[54, 54, "Maloliente"], 
[55, 55, "Favorable"], 
[56, 56, "Poderoso"], 
[57, 57, "Suave"], 
[58, 58, "Valioso"], 
[59, 59, "Cálido"], 
[60, 60, "Blando"], 
[61, 61, "Acuoso"], 
[62, 62, "Amenazador"], 
[63, 63, "Arma"], 
[64, 64, "Útil"], 
[65, 65, "Ropa"], 
[66, 66, "Viaje"], 
[67, 67, "Herramienta"], 
[68, 68, "Negativo"], 
[69, 69, "Comunicación"], 
[70, 70, "Comida"], 
[71, 71, "Doméstico"], 
[72, 72, "Artístico"], 
[73, 73, "Esperado"], 
[74, 74, "Inesperado"], 
[75, 75, "Desconocido"], 
[76, 76, "Recurso"], 
[77, 77, "Combustible"], 
[78, 78, "Dañino"], 
[79, 79, "Energía"], 
[80, 80, "Múltiple"], 
[81, 81, "Único"], 
[82, 82, "Diferente"], 
[83, 83, "Brillante"], 
[84, 84, "Adornado"], 
[85, 85, "Roto"], 
[86, 86, "Líquido"], 
[87, 87, "Personal"], 
[88, 88, "Intrigante"], 
[89, 89, "Activo"], 
[90, 90, "Inactivo"], 
[91, 91, "Basura"], 
[92, 92, "Inútil"], 
[93, 93, "Primitivo"], 
[94, 94, "Deseado"], 
[95, 95, "Curación"], 
[96, 96, "Oculto"], 
[97, 97, "Apreciado"], 
[98, 98, "Flora"], 
[99, 99, "Móvil"], 
[100, 100, "Complejo"] 
];

