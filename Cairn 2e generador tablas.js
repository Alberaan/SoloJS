const BACKSTORY_BARBERO_CIRUJANO = {
  id: "barbero_cirujano", 
  label: "Barbero Cirujano", 
  descripcion: "Caminas en la delgada línea entre quien sana y provoca sufrimiento. Conoces la fragilidad de la carne, pero también los secretos que se esconden en su interior. Con las herramientas adecuadas, vida y muerte son meras palabras..",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Sierra amputadora, Vendajes (3 usos), Sanguijuela (restaura 1 de FUE, 3 usos), Instrumentos quirúrgicos ensangrentados (Insignificante)",
  pregunta1: "¿Qué mejoras añadiste a tu cuerpo?", 
  pregunta2: "¿Qué herramienta extraña necesitas en tu oficio?",
  subtablas: {
    detalle1: [
      "Tienes un ojo de cristal que puede magnificar objetos, como si fuera un catalejo, y proporciona una visión nocturna mínima. No puedes llevar nada metálico en la cabeza. Los imanes potentes pueden provocarte la condición Exhausto.",
      "Un pie es en su mayoría metálico (patada, 1d6), y al moverte por terreno duro es como si lo hicieras en uno fácil. Llevas una lata de aceite (6 usos). Sin una aplicación diaria, quedas Exhausto y al caminar haces mucho ruido.",
      "Reemplazaste uno de tus dedos. Sustituiste el hueso con una mezcla de oro y hierro. Tienes un gancho y un destornillador que se pueden enroscar fácilmente en la punta del dedo reemplazado.",
      "Mejoraste quirúrgicamente ambos oídos, triplicando tu capacidad auditiva. Gracias a ellos puedes concentrarte en un sonido específico lejano, como una conversación. Tienes un protector auditivo para prevenir el efecto de los ruidos fuertes repentinos (Salvación de VOL para evitar quedar paralizado temporalmente).",
      "Tu pecho está revestido de sigilos alquímicos que endurecen la piel (Armadura 1). Si llevas otra armadura metálica, el efecto se anula.",
      "Un brazo completamente metálico se desprende de tu cuerpo a la altura del hombro. Puede usarse como arma (1d8, Voluminoso cuando no está unido a tu cuerpo) y puede moverse independientemente si lo tienes a la vista."
    ],
    detalle2: [
      "Ungüento regenerador. Regenera una parte del cuerpo en el transcurso de un día (1 uso).",
      "Larva injertadora. Pequeño gusano que puede fusionar objetos inanimados con partes del cuerpo (1 uso).",
      "Cera para heridas. Únicamente cura heridas químicas o causadas por fuego. Al hacerlo restaura la FUE por completo (2 usos).",
      "Mercurio. Estimulante. En combate, atacas primero. Superas automáticamente cualquier Salvación de VOL durante una hora. Es adictivo: Salvación de FUE o quedas Exhausto después de 24 horas sin poder consumir (4 usos).",
      "Bombeador de aliento. Pulmones de acero portátiles (Voluminoso). Permiten realizar intervenciones quirúrgicas para salvar vidas o respirar bajo el agua.",
      "Calamita. Extrae del cuerpo elementos peligrosos y actúa como una poderosa fuerza magnética."
    ]
  },
  nombres: ["Wilmot", "Patch", "Lancet", "Sawbones", "Theo", "Cutwell", "Humor", "Landsford", "Goodeye", "Johanna"]
};

const BACKSTORY_CALDERERO = {
  id: "calderero",
  label: "Calderero",
  descripcion: "Se te conoce por el olor a metal fundido y el tintineo de la hojalata. No eres un simple comerciante, sino un artesano del fuego y el metal.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Tenazas, Rollo de hojalata, Guantes (Insignificante), Martillo (1d6)",

  pregunta1: "¿A qué te dedicas?",
  pregunta2: "¿Cuál de tus pertenencias siempre te saca de problemas?",

  subtablas: {
    detalle1: [
      "Creas pequeños artilugios para los gremios locales (y no haces demasiadas preguntas al respecto). Tienes 40 mo extra y un cartel de 'Se busca' con tu cara. Con tiempo y materiales, puedes abrir casi cualquier puerta o cámara acorazada.",
      "Te dedicas a vender artículos para el hogar y herramientas varias, pregonando tus productos a los habitantes de los pueblos por todas las regiones. Tienes 20 mo en artículos de la tabla de equipo. Hablas con fluidez el argot de los viajeros.",
      "Eras un armero militar, antes de que la paz destruyera tu sustento. Tienes un martillo de fundición (1d10, Voluminoso) y un yelmo de hojalata (+1 de Armadura). Con el tiempo y los materiales adecuados, puedes reparar cualquier armadura.",
      "Vendes artículos raros y de calidad, tanto a monasterios como a nobles. Tienes un catalejo, un collar (Insignificante) valorado en 20 mo y un pergamino de Puerta espejo. Puerta espejo: conviertes un espejo en una puerta que conduce a otro espejo donde te hayas mirado hoy.",
      "Ofreces protección, vigilas silenciosamente en busca de amenazas mientras el dinero cambia de mano. Comienzas con +1d4 PG y tienes una espada larga (1d10, Voluminosa) y un gambesón (+1 de Armadura).",
      "Recoges estaño y hierro de los campos de batalla, arrancando dientes de cadáveres aún temblorosos. Tienes un burro joven (+4 espacios, lento), una ballesta (1d8 daño, Voluminosa) y una sierra (1d6)."
    ],

    detalle2: [
      "Huevos de fuego. Seis pequeñas bolitas hechas de sal marina, madera y polvo de loza. Explotan a baja temperatura (1d8, Estallido), pero las llamas se disipan rápidamente.",
      "Alquitrán. Versátil: tanto pegajoso como altamente inflamable (3 usos).",
      "Botas con pinchos. Romper cabezas (1d8) es tan fácil como quebrar hielo o estiércol. Viajar es un poco más lento, pero es más fácil.",
      "Pasta moldeable. Sella cualquier agujero del tamaño de un puño (3 usos).",
      "Fuegos artificiales. Un espectáculo deslumbrante aunque peligroso. Suficiente material explosivo como para volarse un dedo o tres (aún quedan 2 usos).",
      "Gato carroñero. Un familiar inteligente, lo suficientemente pequeño como para esconderlo en tu mochila (Voluminoso), pero lo suficientemente fuerte como para ahuyentar a depredadores más pequeños. Consume una ración de carne al día."
    ]
  },

  nombres: ["Fergus", "Eon", "Bram", "Idris", "Hester", "Darragh", "Seren", "Rónán", "Berek", "Lorenz"]
};

const BACKSTORY_CAMPERO = {
  id: "campero",
  label: "Campero",

  descripcion: "Protector de la cosecha, defensor contra plagas, ladrones y bestias. Un puesto de gran honor, siempre y cuando no te maten antes. Muchos camperos no logran morir de viejos.",

  equipo: "3d6 monedas de oro, Ración (3 usos), Antorcha (3 usos), Brigantina (Armadura 1, Voluminosa), Honda (1d6), Hacha de mano (1d6), Repelente (elige el que quieras, tres usos)",

  pregunta1: "¿Qué te superó?",
  pregunta2: "¿Qué herramienta entre tus pertenencias te salvó la vida?",

  subtablas: {
    detalle1: [
      "Una voraz plaga que engullía cultivos y animales por igual. Sin nada que defender, huiste. Tienes un extracto de semilla de vendaval (3 usos). Ingerirlo te permite correr cuatro veces más rápido. Después marca en tu Inventario dos casillas de Fatiga.",
      "Un espíritu de la cosecha, enfurecido por un mal tributo. Los incendios lo consumieron casi todo; sin embargo, pudiste reunir una bolsa de semillas explosivas (1d8, Estallido, 4 usos).",
      "Un demonio cornudo y dentudo que casi acaba contigo. Tienes un cuchillo de hueso manchado de sangre (1d6). Si haces Daño Crítico, en tu próximo ataque se potencia por entrar en contacto con la sangre.",
      "La Marchitez, un tipo de podredumbre del tallo proveniente de las Raíces. Tienes una muestra de cultivo enfermo (6 usos) que pudre cualquier planta que toque.",
      "Unos lobos, o eso creías. Ahora eres un hombre lobo [PG 8, FUE 15, DES 14, garras (1d6+1d6), mordedura (1d8)]. Tu VOL sigue siendo la misma. Puedes convertirte a voluntad (una vez al día), pero debes hacer una Salvación de VOL para volver a tu estado natural. Cualquiera que quede vivo a causa de tus ataques debe realizar una Salvación de VOL para evitar contagiarse.",
      "Unos ladrones de cosechas. No todos sobrevivieron, pero te superaban en número. Comienzas con +1d4 PG y un bracamarte (1d8)."
    ],

    detalle2: [
      "Látigo de vid sangrienta. 1d8 de daño. Al hacer Daño Crítico, desangra al objetivo, obteniendo la cualidad Estallido en su siguiente ataque.",
      "Estruendizador. Una herramienta de manivela que emite un fuerte ruido capaz de asustar a la mayoría de criaturas.",
      "Vara solar. Proporciona calor y luz durante una hora (1 uso). Recarga: dejar a pleno sol durante un día entero.",
      "Lazo de raíces. Cuando se arroja, ata al suelo a una criatura tan grande como un lobo durante un breve periodo de tiempo.",
      "Flautilla verde. Una pequeña flauta que encanta a las plantas, facilitando el paso por zonas con mucha vegetación.",
      "Banda siempre floreciente. Un collar adornado con flores que nunca se marchitan. En caso de Daño Crítico, las flores se deshacen en polvo, pero actúas como si tu Salvación hubiera tenido éxito (sigues perdiendo los puntos de FUE)."
    ]
  },

  nombres: ["Seed", "Thresh", "Dibber", "Sow", "Stalk", "Harrow", "Cobb", "Flax", "Briar", "Rye"]
};

const BACKSTORY_CHARLATAN = {
  id: "charlatan",
  label: "Charlatán",

  descripcion: "Tu ingenio es tu arma más afilada, una fachada tu escudo más fuerte. Pero cuando fallas, lo pierdes todo.",

  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Carreta (+4 espacios, Voluminosa cuando se empuja), Sombrero fino (Insignificante), Espada de bastón (1d6)",

  pregunta1: "¿Cómo quedaron expuestos tus engaños?",
  pregunta2: "¿Qué objeto entre tus pertenencias puede delatarte?",

  subtablas: {
    detalle1: [
      "Tus 'pacientes' dijeron que se recuperaron milagrosamente, a pesar de tu falta de conocimientos médicos. Tienes vendajes (3 usos) y una habilidad innata para curar.",
      "Tras seducir a una persona adinerada, su familia contrató a una banda de criminales para capturarte. Has escapado y necesitas ocultarte. Tienes una crema embellecedora (2 usos). Úsala para ganar una belleza irresistible durante las próximas 12 horas.",
      "Solías vender profecías falsas, pero cuando una de ellas resultó ser cierta, atrajiste atención no deseada. Tira en la Tabla de Presagios (pág. 14), pero no le digas a nadie el resultado que obtengas. Tienes un cuchillo ocultable (1d6, Insignificante).",
      "Tu última hazaña destruyó un artefacto invaluable y lesionó a una docena de transeúntes. Tienes un uniforme de capitán (Insignificante), una espada ceremonial (Inofensiva, 60 mo) y un ramo de flores.",
      "Fuiste maldecido por una bruja del seto por engañar a algunos aldeanos santurrones. La magia actúa de manera impredecible en tus manos (Salvación de VOL para evitar el caos). Si eres el objetivo de la magia, lo mismo se aplica a quien la maneje.",
      "Tus 'sesiones espiritistas' eran en realidad un engaño que involucraba un Libro de Hechizos de Ilusión auditiva hábilmente oculto. Inevitablemente, un cliente descubrió tu secreto. Tienes el Libro de Hechizos y un fajo de pañuelos. Ilusión auditiva: Creas sonidos ilusorios que parecen provenir de una dirección a tu elección. Produce sonidos aleatorios y ocasionalmente inoportunos a lo largo del día."
    ],

    detalle2: [
      "Emblema real. Nacido en la realeza, elegiste una vida diferente. El escudo te abre muchas puertas; pero, al mismo tiempo alerta a tu familia sobre tu paradero.",
      "Aceite milagroso. Una mezcla maloliente y resbaladiza (2 usos).",
      "Jabón de cirujano. Un bloque de lejía y ceniza que hace que la piel se vuelva temporalmente transparente, revela la anatomía interna de la persona a la que se aplica (4 usos).",
      "Polvo de cabra. Hecho con placenta obtenida del alumbramiento de un cabrito. Cura temporalmente cualquier enfermedad. Los síntomas regresan a las pocas horas.",
      "Zafiro maldito. Vale 200 mo. Regresa a tu bolsillo poco después de gastar lo que te hayan pagado por él. No te puedes deshacer de él.",
      "Tatuaje alquímico. Tienes tatuado un perro, gato o pájaro que puede abandonar tu cuerpo cuando se lo pidas. Sigue tus órdenes lo mejor que puede y te transmitirá las heridas que recibe haciéndote perder puntos de FUE (Insignificante)."
    ]
  },

  nombres: ["Ambrose", "Lucius", "Beauregard", "Cornelius", "Aria", "Toph", "Indigo", "Delphine", "Solene", "Noa"]
};
const BACKSTORY_CORTABOLSAS = {
  id: "cortabolsas",
  label: "Cortabolsas",

  descripcion: "Habitas el espacio gris entre los que tienen poder y los que no. Encuentras oportunidades donde otros solo ven caos. Con dedos ágiles, despojas tanto al mercader más rico como al guardia más humilde.",

  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Dagas gemelas (1d6+1d6, Voluminosa), Armadura de cuero acolchado (Armadura 1), Ganzúas, Ropa negra (Insignificante)",

  pregunta1: "¿Dónde fue tu última gran hazaña?",
  pregunta2: "¿Con qué te ayudas en tus robos?",

  subtablas: {
    detalle1: [
      "En la casa de verano de un noble. El lugar estaba lleno de vino caro (+20 mo) pero nada más de valor. Tienes un cortacadenas.",
      "En un banco. (¡Te atraparon con las manos en la masa!). Tienes una marca visible a la luz del fuego, y cualquiera que vea la marca puede pedirte una cerveza. Tienes alambre retráctil.",
      "En un almacén gremial. Tienes una escalera (Voluminosa, 3 metros) y polvo cegador (1 uso).",
      "En el negocio de un prestamista. Alguien se te adelantó, pero dejó abandonado un pergamino de Ojo arcano (Insignificante). Ojo arcano: puedes ver a través de un globo ocular mágico flotante que vuela a tus órdenes.",
      "En el cuartel del alguacil. Lograste huir, pero dejaste atrás a algunos amigos. Tienes una cuerda de seda resistente y una sensación de mareo.",
      "En una universidad. Te vieron, pero no fueron tras de ti. Aún no sabes por qué. Tienes bombas de humo (3 usos)."
    ],

    detalle2: [
      "Anillo felino. 2 cargas. Puedes trepar por las paredes y caer con seguridad. Recarga: Pon el anillo en la cola de un gato callejero.",
      "Dedo dorado. 1 carga. Un dedal que imita cualquier llave común. Recarga: Deposítalo con al menos 100 mo durante una noche.",
      "Vidrio esclarecedor. 3 usos. Un monóculo que te permite ver a través de paredes u otros obstáculos. Se rompe tras su tercer uso.",
      "Silbato encantador. 1 carga. Los oyentes escuchan una voz encantadora y familiar que no pueden resistirse a seguir. Recarga: Tu personaje pierde un recuerdo apreciado (describe cuál es).",
      "Velo del errante. 1 carga. Úsalo para mezclarte entre la multitud y parecer un simple indigente. Recarga: Dona todas las ganancias del día a los pobres (Insignificante).",
      "Peonza invertida. 1 uso. Al girar, el tiempo retrocede 30 segundos. Todo el mundo recuerda lo acontecido."
    ]
  },

  nombres: ["Arlo", "Lyra", "Eamon", "Salina", "Elara", "Freya", "Bull", "Sparrow", "Ivy", "Silas"]
};

const BACKSTORY_DOMADOR_DE_BESTIAS = {
  id: "domador_de_bestias",
  label: "Domador de Bestias",

  descripcion: "Solo tú puedes caminar entre las criaturas salvajes, sin miedo y al mando para ordenarles qué hacer. Compartes una conexión con los animales con la que otros solo pueden soñar… ¡siempre que no te conviertas en su comida!",

  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Látigo de cuero (1d6), Dardos somníferos (Salvación de FUE o cae dormido, 6 usos), Señuelo, Soga (7.5 metros)",

  pregunta1: "¿Qué criaturas son tu especialidad?",
  pregunta2: "¿Qué capacidad única te ofrecen a ti las criaturas salvajes?",

  subtablas: {
    detalle1: [
      "Arácnidos. Tienes una vara de llama rápida y una lata de aceite (6 usos). Puede destruir un gran nido de arañas en segundos.",
      "Felinos. Tienes un saco de hipérico. Su olor puede calmar y dominar incluso a los gatos más grandes.",
      "Caninos. Tienes una corona de acónito y una red grande. También es efectiva contra hombres lobo.",
      "Aves. Tienes un silbato de trino (3 cargas). Puede imitar el canto de cualquier pájaro e incluso utilizarse para enviar mensajes sencillos. Recarga: Alimenta a una cría de pájaro como lo haría su madre y luego sopla de nuevo.",
      "Roedores. Tienes una flauta de hueso que emite un sonido agudo que solo pueden oír los roedores. Mientras toques, te seguirán, incluso hasta la muerte.",
      "Serpientes. Tienes una piedra calefactora que genera un calor irresistible y, además, un vial de antitoxina (2 usos)."
    ],

    detalle2: [
      "Hay más mundo del que alcanzamos a ver. Con un poco de concentración y guardando silencio, puedes tomar prestados los sentidos de una criatura de tu especialidad que esté cerca de ti y percibir a través de ellos.",
      "El comportamiento de las bestias dice más de lo que podemos percibir. Cuando observas a una bestia de tu especialidad, obtienes información sobre patrones climáticos y desastres inminentes.",
      "El instinto de caza es muy poderoso, siempre prevalece. Percibes cuando los depredadores, incluso los que no son de tu especialidad, están cerca.",
      "Hay lazos muy íntimos que, sin saber, te unen a tierras desconocidas. Tu probabilidad de perderte en un terreno dominado por las bestias de tu especialidad se reduce un paso (p. ej.: 4 en 6 se reduce a 3 en 6).",
      "La melodía de la naturaleza puede escucharse si sintonizas con su ritmo. Cuando estás rodeado de criaturas de tu especialidad, ellas pueden alertarte con antelación de peligros acechantes.",
      "La supervivencia no es más que la capacidad para adaptarse a la situación. Una vez al día, puedes adoptar una característica simple de una criatura de tu especialidad (dedos palmeados, visión nocturna, etc.). Añade una Fatiga tras cada uso."
    ]
  },

  nombres: ["Amara", "Wulf", "Mireille", "Soren", "Freki", "Aster", "Gerrik", "Boreas", "Veda", "Matheus"]
};

const BACKSTORY_ERRADICADOR_DE_BRUJERIA = {
  id: "erradicador_de_brujeria",
  label: "Erradicador de Brujería",

  descripcion: "Eres un mero dígito en la infalible mano de la justicia. Vas donde otros temen pisar, íntegro y tenaz.",

  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Uniforme de tu Orden (Insignificante), Tinturas benditas, Cuchillo de plata (1d6), Ballesta (1d8, Voluminosa)",

  pregunta1: "¿A qué Orden perteneces?",
  pregunta2: "¿Qué votos hiciste?",

  subtablas: {
    detalle1: [
      "Orden de las Encrucijadas. Tienes un buscador de Líneas Ley de bolsillo. Apunta hacia las Líneas Ley cercanas y otras fuentes de poder arcano. Si lo pierdes, el castigo es la muerte.",
      "Orden de la Estrella Sangrante. Tienes una maza de hierro estelar (1d8). Brilla tenuemente en la oscuridad y se calienta mucho en presencia de brujería.",
      "Orden del Sello de Vidrio. Tienes una espada corta (1d8) y una cota de mallas (Armadura 2, Voluminosa). Tienes contactos en casi todos los pueblos (cuanto más rural, mejor) que están dispuestos a proporcionarte ayuda, comida o incluso armas.",
      "Orden del Ojo Blanco. Tienes un fragmento de cristal del Vacío. Mira a través de él con un ojo para ver marcas invisibles, criaturas u otros efectos mágicos. Pierdes la visión de ese ojo durante la siguiente hora (quedas Exhausto).",
      "Orden de Canaas. Una vez al día puedes transformarte en lobo. Tienes una cadena de azogue. Sin ella, no puedes volver a tu forma original.",
      "Orden del Velo Silencioso. Tienes una piedra apaga fuegos (2 usos) envuelta en una arpillera. Una vez expuesta al aire extingue cualquier llama cercana."
    ],

    detalle2: [
      "Honestidad. Elige un tipo de arma (contundente, cortante, etc.). Los ataques contra ti de este tipo tienen Desventaja. Si rompes tu voto de honestidad, pierdes 1d4 de VOL.",
      "Pobreza. Tienes un Libro de Hechizos (Desmontar). Solo tú puedes usarlo. Si rompes tu voto de pobreza, explota (1d12 de daño a FUE). Desmontar: Puedes separar y volver a unir cualquier parte de tu cuerpo a voluntad, sin sufrir daño ni dolor. Mantienes el control sobre las partes separadas. Regenera cualquier página rasgada o dañada.",
      "Altruismo. Eres inmune a efectos mágicos como Encantar, Odio, Frenesí, etc. Si rompes tu voto, pierdes 1d6 de VOL.",
      "Misericordia. Elige un tipo de arma (contundente, cortante, etc.). Tus ataques con ese tipo de arma tienen Ventaja. Si rompes tus votos de misericordia, nunca podrás usar de nuevo ese tipo de arma.",
      "Caridad. Una vez al día puedes librarte de una Fatiga. Si rompes tus votos de caridad, pierdes para siempre un espacio de tu Inventario.",
      "Valentía. Cuando infringes Daño Crítico por primera vez, ganas +4 PG, recuperando tu cantidad previa de PG al final de ese combate. Si rompes tus votos de valentía, mueres."
    ]
  },

  nombres: ["Percival", "Felix", "Isolde", "Wolfram", "Aldric", "Eira", "Oswin", "Ivor", "Brunhilda", "Beatrix"]
};

const tablaNombres = [
];

const tablaApellidos = [
];

const tablaTrasfondos = [
];

const tablaFisicos = [
];

const tablaPieles = [
];

const tablaCabellos = [
];

const tablaRostros = [
];

const tablaVoces = [
];

const tablaVestimentas = [
];

const tablaVirtudes = [
];

const tablaDefectos = [
];

