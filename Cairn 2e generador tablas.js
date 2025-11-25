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

const BACKSTORY_ESCRIBA = {
  id: "escriba",
  label: "Escriba",
  descripcion: "Copias textos antiguos e iluminas manuscritos, grabando las voces de los ingeniosos, los grandes y los poderosos. Demostrarás que la pluma es más poderosa que la espada.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Pluma para escribir y tinta, Libro en blanco, Punzón (1d6), Insignia (Insignificante)",
  pregunta1: "¿Qué obras te has guardado?",
  pregunta2: "¿Qué utilizas cuando necesitas compartir información confidencial?",
  subtablas: {
    detalle1: [
      "Lenguas Salvajes. Un conjunto de pergaminos encuadernados en cuero. Una obra seminal que cataloga los lenguajes ocultos de las bestias y cómo entenderlos.",
      "Sinfonía Silenciosa. Encuadernada en una envoltura fluorescente. Es muy rara, cataloga los signos sutiles utilizados por aquellos que emplean la magia de invisibilidad.",
      "Tratado sobre el Abismo. Un libro negro sin descripción. Un texto profundo y en gran parte teórico que describe las Raíces, así como información sobre la ubicación exacta de un Portal cercano.",
      "Vals de las Estrellas. Encuadernado con una fina cubierta de cuero y un cierre en forma de cometa. Detallados mapas astronómicos, movimientos celestes y festividades estelares. Muy valorado (100 mo) por su utilidad para los viajeros.",
      "La catedral y el Pabellón. Grandes pliegos con encuadernación rústica cubierta de vitela. Es realmente un libro de cuentos infantiles, pero los márgenes contienen información sobre viajar, comer y dormir en la floresta nubosa.",
      "Jardín de Cristal. Encuadernado en la cubierta de otro libro. Una obra herética, describe los materiales, procedimientos y ubicaciones óptimas para abrir un Portal."
    ],
    detalle2: [
      "Tinta contra mentirijillas. Brilla cuando se usa para escribir afirmaciones verdaderas, pero se desvanece si se usa para escribir falsedades.",
      "Piedras encriptadoras. Un par de piedras negras afiladas. Cada una descifra cualquier mensaje escrito por la otra.",
      "Pluma siemprepinta. Una pluma que puede escribir sobre cualquier superficie, pero sigue necesitando tinta (Insignificante).",
      "Vial susurrador. Susurra un mensaje dentro del vial, y este lo reproducirá a quien lo abra a continuación.",
      "Lente sanguínea. Extrae sangre de un objetivo sin que este lo sepa. Una gota robada, colocada en el ojo, revela recuerdos del objetivo del día anterior.",
      "Páginas reveladoras. Un pergamino blanco. Quien lo despliegue verá cómo sus acciones del día se revelan lentamente escritas en una caligrafía apretada."
    ]
  },
  nombres: ["Lazlo", "Stilo", "Akshara", "Pisa", "Ji-Yun", "Kalamos", "Hugo", "Shui", "Kalam", "Julius"]
};

const BACKSTORY_FLECHAVELOZ = {
  id: "flechaveloz",
  label: "Flechaveloz",
  descripcion: "Atacas desde lejos, pero eso no te convierte en cobarde. Haces música, la canción de la cuerda de tu arco no es más que una advertencia, entonando la silenciosa promesa de una muerte rápida.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Arco (consulta tablas), Cuchillo dentado (1d6), Armadura de cuero hervido (Armadura 1), Bálsamo de esencia de corazón (restaura 1d4 FUE, 1 uso)",
  pregunta1: "¿Cómo aprendiste a usar tu arco?",
  pregunta2: "¿De qué tipo de madera está hecho tu arco?",
  subtablas: {
    detalle1: [
      "En combate. Si eres el primero en atacar, tu arco gana la cualidad Estallido en la primera ronda.",
      "Practicando cetrería. Tienes un halcón [PG 3, FUE 5, DES 16, VOL 4, garras (1d6+1d6), mordedura (1d8)]. Solo come animales vivos.",
      "Cazando. Al realizar la acción de supervivencia Forrajear, tu capacidad para conseguir raciones aumenta en un paso (por ejemplo, 1d4 se convierte en 1d6).",
      "Participando en torneos de tiro. Realizas el ataque con Ventaja si tu objetivo está inmóvil.",
      "Entrenando. Si eres el primero en atacar, los ataques contra ti se realizan con Desventaja hasta que recibas daño en FUE.",
      "Viajando. Cuando realizas la acción Viajar, tu experiencia reduce la posibilidad de perderte en un paso (por ejemplo: 4 en 6 se convierte en 3 en 6)."
    ],
    detalle2: [
      "Tejo del oeste. (1d6, Voluminoso). Puede blandirse como arma contundente (1d6). Ruidoso.",
      "Roble albar. (1d8, Voluminoso). Si al golpear con él a un objetivo causas Daño Crítico, arrancas algo del blanco.",
      "Pino piñonero. (1d6, Voluminoso). Segrega una carga de savia pegajosa al día, puede ser utilizada (1 uso). La savia es altamente explosiva.",
      "Fresno blanco. (1d6, Voluminoso). Puede ser usado como escudo en combate cuerpo a cuerpo (+1 de Armadura).",
      "Bambú estriado. (1d6). Plegable, solo ocupa un espacio en el Inventario (pero se usa con las dos manos).",
      "Olmo montano. (1d6, Voluminoso). Protege al portador de venenos y toxinas siempre que lo lleve en la mano."
    ]
  },
  nombres: ["Flint", "Feather", "Crier", "Thunder", "Falcon", "Pluck", "Needle", "Warsong", "Hawk", "Cai"]
};

const BACKSTORY_GUARDAHUESOS = {
  id: "guardahuesos",
  label: "Guardahuesos",
  descripcion: "Eres el protector de los que ya no están. Escuchas los últimos susurros de los muertos cuando descienden bajo la fría e inquebrantable tierra. Sabes que para celebrar plenamente el don de la vida, debemos honrar también su final.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Linterna, Lata de aceite (6 usos), Estaca larga (1d6), Cadenas (3 metros)",
  pregunta1: "¿Qué obtuviste de los muertos?",
  pregunta2: "¿Qué herramienta es indispensable en tu trabajo?",
  subtablas: {
    detalle1: [
      "Un amuleto con forma de cuervo. Puedes formular una pregunta a los muertos, pero ganarás una Fatiga por cada uso.",
      "Una herida mortal provocada por un resucitado desenfrenado. Te curaron, pero el daño que te hizo te convirtió en un paria. No necesitas aire ni sustento, pero eres susceptible al dolor y la muerte. Atrapado entre dos mundos, los muertos te ven como a uno de los suyos.",
      "Un balde con sangre (Voluminoso) de un culto local a la muerte. Vacíalo para invocar a un seguidor hecho de lo que sea que esté enterrado bajo el suelo. Tendrá PG 6, Armadura 1, FUE 13, DES 11, VOL 4, puños con esquirlas (d8+d8). Solo se puede invocar un seguidor a la vez. Si es derrotado, pierdes 1d4 de FUE permanentemente. Recarga: Llénalo de nuevo con la sangre de un guerrero moribundo.",
      "Un carromato funerario (+6 espacios) que utilizaste en tu último trabajo. Es tirado por un burro viejo y testarudo (+4 espacios, solo +2 espacios si tira del carromato, lento).",
      "Un Libro de Hechizos (Detectar Magia), robado de una antigua biblioteca. Tu familia sirve a una oscura deidad del inframundo, pero tú perdiste la fe. Aunque exiliado, continúas sirviéndola, incluso como apóstata. Detectar magia: puedes ver u oír auras mágicas cercanas. El libro se calienta al tocarlo cuando se usa magia cerca.",
      "Una máscara de médico de la peste, después de que su dueño sucumbiera a la enfermedad que acabó con todos tus conocidos. ¡Debería habérsela puesto!"
    ],
    detalle2: [
      "Grillete. Aunque viejo, sigue siendo efectivo incluso con los muy fuertes. No tienes la llave.",
      "Esponja. Supuestamente hecha de los restos de una rara criatura marina. Parece que nunca se seca.",
      "Polea. Ideal para mover lápidas, rocas o incluso cadáveres.",
      "Incienso. Perfecto para rituales o para mantener a raya a las moscas. Tranquilizante.",
      "Palanca. Provoca 1d6 de daño. ¡A veces simplemente necesitas abrir esa maldita cosa!",
      "Repelente. Un producto potente. Sin embargo, su etiqueta descolorida no deja claro qué es lo que repele. Quizás todo. 3 usos."
    ]
  },
  nombres: ["Rook", "Ebon", "Moro", "Yew", "Pall", "Leth", "Lenore", "Barnaby", "Vesper", "Leder"]
};

const BACKSTORY_GUARDIA_FRONTERIZO = {
  id: "guardia_fronterizo",
  label: "Guardia Fronterizo",
  descripcion: "Hiciste un juramento de sangre para patrullar la frontera y proteger el reino. Una vez hecho, el juramento no puede romperse. La Guardia siempre encuentra a los suyos.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Linterna, Lata de aceite (6 usos), Espada larga (1d10, Voluminosa), Armadura de cuero hervido (Armadura 1)",
  pregunta1: "¿Por qué decidiste hacer el juramento?",
  pregunta2: "¿Qué portas como recordatorio de tu juramento?",
  subtablas: {
    detalle1: [
      "Tu familia tiene una larga tradición de servicio, y fuiste entrenado desde pequeño en cómo sobrevivir en la naturaleza. Al realizar la acción de supervivencia Forrajear, tu rendimiento aumenta en un paso (por ejemplo, de 1d4 a 1d6).",
      "Como convicto, hacer el juramento es un medio de evitar tu castigo. Tienes un juego de ganzúas y una llave (Insignificante) de un refugio seguro.",
      "Siendo noble de nacimiento, te uniste para escapar de los problemas familiares. Tienes una lona de plumas de ganso (para dos personas), la robaste al irte de casa.",
      "Cuando tu familia lo perdió todo, hiciste el juramento para evitar convertirte en una carga. Tienes raciones extra (3 usos) y cuchillos arrojadizos (1d6).",
      "Tu vida fue salvada por un miembro de la Guardia Fronteriza, y eso te inspiró a unirte a sus filas. Tienes una trampa de lazo y un cuaderno de bocetos lleno de dibujos detallados.",
      "Estabas en un lugar oscuro y decidiste que tu vida necesitaba un poco de disciplina. Aún no estás seguro de que haya sido una elección correcta. Tienes un abrigo de tela encerada y papel para mapear."
    ],
    detalle2: [
      "Insignia imponente. Insignia de metal de honor de la Guardia. Puede abrirte puertas, pero siempre deja un rastro (Insignificante).",
      "Brújula de juramento. No apunta al norte, sino al integrante de la Guardia más cercano. También te permite saber cuándo están cerca de tu posición.",
      "Piedras de atracción. Dos piedras negras como el azabache. Cuando se separan, siempre ruedan una hacia la otra.",
      "Vial de fuego. Altamente alcohólico, pero extrañamente delicioso. Cuando se lanza, crea un muro de llamas de 3 metros de altura que se apaga después de unos minutos (1 uso).",
      "Anillo de dolor. Toca a una criatura herida para transferirte sus heridas (intercambia sus puntos de FUE perdida con la tuya). Recarga: Usa el anillo mientras estás completamente sano. Perderás 1 punto de FUE permanentemente (Insignificante).",
      "Desdicha cazadora. Flechas de fuerte olor (3 usos). El aroma es lo suficientemente potente como para rastrearlas fácilmente."
    ]
  },
  nombres: ["Gann", "Light", "Saoirse", "Frost", "Thorn", "Reed", "Dirk", "Ragnar", "Brie", "Aasim"]
};

const BACKSTORY_HUERFANO = {
  id: "huerfano",
  label: "Huérfano",
  descripcion: "Una marca de nacimiento extraña, un olor peculiar: de alguna manera, el toque de otro lugar aún persiste. Dondequiera que estés, tienes dificultades para encajar. Tira en la Tabla de Presagios (aunque no seas el jugador más joven), pero mantén los resultados en secreto por ahora.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Bolsa de sal, Amuleto (reliquia familiar, Insignificante, brilla en presencia de magia), Honda (1d6), Daga (1d6)",
  pregunta1: "¿Quién se hizo cargo de ti?",
  pregunta2: "¿Cuál de tus posesiones te da suerte?",
  subtablas: {
    detalle1: [
      "Un viejo cazador. Ambos eran muy felices, hasta que la relación terminó. Coges un arco largo desgastado (1d8, Voluminoso) y un jubón de cuero (Armadura 1).",
      "Un boticario sabio que te enseñó las artes curativas pero siempre guardó las distancias. Tienes un bálsamo curativo (restaura 1d4 de FUE, 1 uso).",
      "Un druida que te enseñó el lenguaje de los árboles. Cuando llegó el momento de partir, solo te llevaste un báculo nudoso (1d8) y dejaste la promesa de que algún día volverías.",
      "Un rudo herrero de un aletargado pueblo ribereño. Siempre te mantuvo aislado. Ahora la forja está fría y has seguido adelante. Tienes un delantal de herrero (Insignificante) y una cota de malla remendada (Armadura 2, Voluminosa).",
      "Una compañía de artistas ambulantes. Durante un tiempo, fueron como tu familia. Un día te despertaste y habían partido sin ninguna explicación. Tienes un libro de cuentos, una daga (1d6) y algunas preguntas sin respuestas.",
      "Monjes de un aislado monasterio en la floresta. Cuando sus normas se volvieron demasiado estrictas, te escapaste. Tienes un hábito de monje (cálido, Insignificante) y un Libro de Hechizos (controlar plantas). Controlar Plantas: Las plantas y árboles cercanos te obedecen y adquieren la habilidad de moverse a paso lento. Crecen hojas a lo largo de tu lomo y hueles ligeramente a podredumbre."
    ],
    detalle2: [
      "Hierbas para pipa. Tu carisma es tu amuleto. Las conversaciones tienden a fluir estupendamente tras fumar (6 usos).",
      "Jarra apestosa. Al romper este frasco, se libera un olor tan repugnante que todos los que estén cerca deben realizar una Salvación de FUE o vomitar en el acto (1 uso).",
      "Gusano de hiedra. Gusano verde que a menudo se confunde con una mala hierba. Tragado entero, absorbe cualquier toxina o putrefacción del organismo antes de salir por la vía habitual.",
      "Piedra del sueño. Piedra azul suave que ayuda a recordar los sueños con mayor claridad. Si se usa en exceso, puede causar adicción a los sueños.",
      "Vara mágica. Un palo de madera del tamaño de un dedo que duplica su tamaño cada vez que se sumerge completamente en agua. No vuelve a encogerse.",
      "Pata de conejo. La tienes desde siempre. Dicen que pertenecía a quien te abandonó, protege de la magia (salvación)."
    ]
  },
  nombres: ["Faunus", "Snowdrop", "Wisp", "Silverdew", "Brim", "Solstice", "Steeleye", "Artea", "Gossamer", "Hazel"]
};

const BACKSTORY_JINETE_ESCOLTA = {
  id: "jinete_escolta",
  label: "Jinete Escolta",
  descripcion: "Tus ingresos provienen de proteger caravanas, rastrear fugitivos o prestar tu espada a una causa. Has sido una salvadora, una verduga, una heroína e incluso una villana. Sin embargo, tu camino no es solitario: siempre tendrás a tu caballo a tu lado.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Espada larga (1d10, Voluminosa), Jubón de cuero (1 de Armadura), Ballesta (1d8, Voluminosa), Catalejo",
  pregunta1: "¿Qué principio rige tu vida?",
  pregunta2: "¿De qué raza es tu caballo?",
  subtablas: {
    detalle1: [
      "No derramar sangre inocente: ningún testigo sufrirá daño bajo tu presencia. Tienes una rodela hecha a la medida (+1 de Armadura). Mientras la sostengas, no puedes ser movido por nadie siempre que ambos pies estén plantados en suelo firme.",
      "Venerar las herramientas de la muerte. Las armas deben ser respetadas y cuidadas meticulosamente. Tienes una piedra de afilar de hueso de dragón. Tras un ritual de afilado de media hora, los ataques con el arma tienen Ventaja hasta que provocan daño a FUE.",
      "Hasta la muerte, siempre: Nunca retrocedes en una pelea, sin importar tus probabilidades. Toma un silbato de la muerte, 1 carga. Su sonido asusta a todos los que lo oyen (Salvación de VOL o huyen). Recarga: Captura el último aliento de un guerrero moribundo.",
      "Respeta a los muertos: La muerte es un viaje que todos emprendemos y merece respeto. Tienes 30 mo adicionales. Siempre colocas dos piezas de oro en los párpados de un enemigo abatido. De alguna manera, siempre vuelven a ti.",
      "Cumple tu palabra: Tu palabra lo es todo. Una vez que has aceptado un trabajo, no lo sueltas hasta que lo terminas. Tienes un palo de cuentas viejo. Una vez que un juramento se marque en su superficie, el palo se endurece (1d8) hasta que se complete. El palo se romperá en dos si el juramento es roto.",
      "Paga tus deudas siempre: devuelves lo que debes, ya sea en monedas o en especies. No esperas menos de los demás. Tienes un libro de registros negruzco, y tira otra vez en la tabla de Vínculos."
    ],
    detalle2: [
      "Destrero pesado. Una bestia hecha para la guerra, una criatura imponente. PG 8, Armadura 1, Pezuñas (1d10+1d10). +2 espacios.",
      "Dandi patinegro. Resistente y adaptable. Los terrenos Duros o Peligrosos se vuelven un paso más fáciles. PG 6, +4 espacios.",
      "Colmillo firme. Impresionantemente fuerte, capaz de transportar cargas pesadas. PG 4, +6 espacios (solo +2 espacios si transporta a dos personas).",
      "Cob Pío. Inteligente, puede entender órdenes sencillas e incluso tiene instinto para el peligro. PG 6, +4 espacios.",
      "Pálido de Linden. Altamente entrenado y ágil, puede realizar maniobras complejas en momentos de necesidad (no requiere Salvación de DES para huir). +3 espacios.",
      "Niebla errante. Salvaje pero muy rápido, incluso en terrenos duros. Montura ligera. PG 4, +2 espacios."
    ]
  },
  nombres: ["Ambrose", "Lucius", "Beauregard", "Cornelius", "Aria", "Toph", "Indigo", "Delphine", "Solene", "Noa"]
};

const BACKSTORY_JUGLAR = {
  id: "juglar",
  label: "Juglar",
  descripcion: "¿Qué inspira más al alma que una canción, unas estrofas y una buena actuación? ¿Por qué practicar durante años para dominar lo arcano cuando ya tienes la verdadera magia dentro de ti?",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Disfraz, Instrumento sencillo (flauta, laúd, etc.), Jubón de la suerte (+1 de Armadura), Honda (1d6)",
  pregunta1: "¿Qué pasó en tu última actuación?",
  pregunta2: "¿De qué baratija no te puedes desprender?",
  subtablas: {
    detalle1: [
      "A pesar de tu preparación para realizar actos peligrosos, un actor murió y te culparon. Tienes un estoque corto (1d6) y usas una identidad falsa.",
      "Al público le encantó tu melodía pegadiza sobre un noble y sus fracasos amorosos. Tienes un Libro de Hechizos (Leer mentes) y una orden de arresto. Leer mentes: Puedes oír los pensamientos superficiales de las criaturas cercanas. Utilizarlo prolongadamente puede hacer que el lector confunda los pensamientos de los demás con los suyos propios.",
      "Tu composición inaugural redujo a la audiencia a un amasijo balbuceante, murmurando sobre brillantes criaturas descendiendo del cielo nocturno. Más tarde notaste que las notas se parecían a constelaciones estelares. Tienes un libro de astronomía y muchas preguntas.",
      "Te burlaste de un olvidado dios de las mentiras y te maldijo por ello. Solo puedes hablar en rima perfecta. Irónicamente, esto te ha hecho más popular entre los tuyos. Tienes un tesauro (20 mo), si lo pierdes quedas Exhausto.",
      "Un accidente en el escenario te dejó una cicatriz. La multitud aplaudió pensando que era parte del acto. Tienes una cota de malla de atrezo gastada (Armadura 1), una cicatriz memorable y miedo a los aplausos.",
      "Tus dotes como titiritero solo eran superadas por tus capacidades como imitador. Eras tan bueno que te marcaron como brujo (literalmente) y te desterraron. Tienes una marioneta inquietante y un cráneo de conejo (Insignificante) que te protege contra encantamientos de control."
    ],
    detalle2: [
      "Grilletes falsos. Cómodos y de aspecto realista. Solo tú conoces el truco para liberarte de ellos.",
      "Teatrillo de bolsillo. Incluye juego de marionetas pequeñas y un escenario plegable. Bueno para distracciones rápidas.",
      "Violín espectral. Un violín gris oscuro cuya inquietante melodía es replicada por un gemelo distante.",
      "Librillo de cuentos trágicos. Está prohibido en círculos respetables, este libro se vuelve menos obsceno y más estremecedor hacia el final. Valor: 100 mo.",
      "Máscara de mitos. Una máscara de yeso que permite tomar la apariencia de un monstruo. Cuando te la quites, ganas una Fatiga.",
      "Vidrio recuperable. Una copa de vino que se puede romper varias veces y se reconstruye después de 24 horas. Hace un ruido muy fuerte."
    ]
  },
  nombres: ["Jax", "Selene", "Baladria", "Ada", "Mort", "Saylor", "Tripp", "Lantos", "Echo", "Jubilo"]
};

const BACKSTORY_MERODEADOR = {
  id: "merodeador",
  label: "Merodeador",
  descripcion: "Eres un espectro en la noche, una sombra fugaz que se desliza junto a su presa, invisible. Cada asesinato es una prueba de astucia y determinación animal, una lucha entre la vida y la muerte. Sabes que un día no te saldrás con la tuya. Lo esperas con ansias.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Lona (alberga a 1 persona), Cuero hervido (1 de Armadura), Espada corta (1d6), Trampa de resorte (4 de daño a FUE)",
  pregunta1: "¿Qué fue lo último que cazaste?",
  pregunta2: "¿Qué herramienta está siempre en tu mochila?",
  subtablas: {
    detalle1: [
      "Una luciérnaga falsa. Atraía a acarreadores de agua con su cebo. Tienes una extremidad alquímica (1d8, Insignificante cuando se usa) para reemplazar la que te arrancó, y una lata de aceite (6 usos). La extremidad es inmune al calor y al veneno. Necesita ser engrasada diariamente.",
      "Una ortiga de hielo que atrapaba y absorbía la fuerza vital a las ovejas. Perdiste tu paga porque el hongo que usaste para matarla terminó matando a la mitad del rebaño. Tienes una semilla de hielo (1 uso). Congela cualquier cuerpo de agua, sin importar el tamaño. ¡No te arriesgues a comerla!",
      "Un rastrero de la ciénaga plateada que mató a un ser querido. Ahora llevas su diente (Insignificante) en una cadena alrededor del cuello como advertencia a otros de su especie. El diente vibra ligeramente cuando algo te acecha.",
      "Un espíritu malicioso del bosque que envenenó una granja. Has recuperado una semilla corazón de las raíces de un árbol moribundo (plántala para crear un nuevo bosque). Además, tienes brazaletes de hierro (+1 de Armadura, Voluminosos).",
      "Un lobo hueco que había estado asustando a viajeros. Te apiadaste de la criatura que estaba muerta de hambre y la cuidaste para que se recupere. Ahora te es leal hasta la muerte. Es un gran excavador. PG 5, FUE 11, DES 13, VOL 8, dientes (1d6).",
      "Un azul trinador. Sus gametos se pagan muy bien si son extraídos con el debido cuidado. Tuviste éxito pero dejaste su nido a los lobos. Tienes un cuchillo de pelar (1d6), 20 mo extra y una terrible sensación de arrepentimiento."
    ],
    detalle2: [
      "Licor añejado. Te mantiene caliente en los mejores momentos y puede usarse como explosivo en los peores (3 usos).",
      "Marcador de rastro. Un instrumento ruidoso que revela rastros cercanos, incluso cuando están ocultos.",
      "Bálsamo somnoliento. Una barra de cera. Si se hierve en agua, el vapor actúa como un agente somnífero.",
      "Picas y cuerda. Para atravesar terrenos duros o para crear trampas y estructuras improvisadas.",
      "Sonajero de hierro. Un generador de ruido para distraer o asustar a tu presa. Suena como una serpiente.",
      "Endurecedor. Hace que cualquier material plano (tela, cuero, arena) sea tan duro como la piedra. Caro (20 mo por vial, 3 usos)."
    ]
  },
  nombres: ["Winda", "Brielle", "Theron", "Chayse", "Nuja", "Dev", "Raven", "Baruani", "Arawan", "Sable"]
};

const BACKSTORY_NATURALISTA = {
  id: "naturalista",
  label: "Naturalista",
  descripcion: "Te adentras en las profundidades del Bosque, desentrañando sus secretos entre ramas ásperas y hojas susurrantes. Para este reino verde, no solo eres un erudito más, también eres su confidente.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Caldero de hierro, Cuchillo de poda (1d6), Bálsamo curativo (restaura 1d4 de FUE, 1 uso), Esfera de cuerda (Insignificante, Proteger: crea un círculo plateado de 15 m de diámetro que una especie elegida no puede atravesar)",
  pregunta1: "¿Cuándo te falló el Bosque?",
  pregunta2: "¿Qué te mantiene a salvo dentro del Bosque?",
  subtablas: {
    detalle1: [
      "Cuando un espíritu malhumorado te maldijo por tomar algo que le pertenecía, señalándote como un enemigo jurado. Tienes una piedra de bezoar. Al tragarla por completo cura de cualquier veneno (1 uso, a menos de que la recuperes).",
      "Cuando un amigo muy cercano desapareció en el Bosque. Ahora ves su rostro en cualquier té que prepares. Tienes una poción somnífera (3 usos).",
      "Cuando fuiste envenenado y perdiste los sentidos del gusto y del olfato. Ahora puedes soportar gases nocivos y llevas contigo una antitoxina (2 usos).",
      "Cuando tus experimentos cambiaron el tono de tu piel a un color verde y comenzaste a nutrirte como las plantas. No necesitas raciones, pero un día sin suficiente luz solar y agua te deja Exhausto.",
      "Cuando tu impresionante ejemplar de flor aro gigante ganó un concurso local y mató a un juez. Huiste con el dinero del premio (100 mo) y una orden de arresto.",
      "Cuando creaste una tintura restauradora que también causa, por accidente, infertilidad. Tienes una poción curativa que restaura completamente la FUE. Solo tú conoces sus efectos secundarios."
    ],
    detalle2: [
      "Amadou. Un hongo bermellón que arde con bastante facilidad (3 usos).",
      "Delphinium. Permite respirar debajo del agua hasta una hora (1 uso, divisible según el tiempo de uso).",
      "Tallo pegajoso. Tallo leñoso que tras masticarse se endurece como un pegamento imposible de disolver (2 usos).",
      "Mecha de luz tenue. Colocada en el centro de una jaula de hierro forjado, proporciona luz tenue mientras pueda alimentarse del dolor y miedo próximos.",
      "Bomba de semillas. Un saco de lona lleno de semillas que explotan al golpearlo con algo. Causa 1d6 daño (Estallido, 3 usos).",
      "Enredadera de zarza. Atrapa a cualquier criatura de hasta el tamaño de un caballo. Salvación de FUE para liberarse, reusable."
    ]
  },
  nombres: ["Gunther", "Moss", "Fern", "Lichen", "Root", "Willow", "Sage", "Yarrow", "Rowan", "Ash"]
};

const BACKSTORY_ORIFICE = {
  id: "orifice",
  label: "Orífice",
  descripcion: "Eres un artesano de lo arcano, un forjador de las fuerzas sutiles. En el crisol de tu taller, las leyes que rigen este mundo se deforman para adaptarse a tus necesidades.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Linterna, Lata de aceite (6 usos), Cuchillo de aguja (1d6), Guante de protección (Insignificante)",
  pregunta1: "¿Qué experimento salió mal?",
  pregunta2: "¿Qué maravilla alquímica es el producto de tu última genialidad?",
  subtablas: {
    detalle1: [
      "Hubo una explosión y perdiste el sentido del olfato. Bueno, casi: puedes olfatear el oro como un cerdo las trufas. Tienes una lata de rapé (6 usos) para recuperar tu carencia. Úsala todos los días o te quedarás Exhausto.",
      "Has desmaterializado a una querida mascota. Ahora te sigue a todas partes, invisible pero siempre presente. Aunque ella no puede interactuar con el reino físico, tú puedes percibir a través de sus sentidos (añade una Fatiga tras cada uso). La mascota sigue órdenes básicas.",
      "Fuiste expuesto a un suero de la verdad de acción prolongada cuyos efectos aún no han desaparecido. El trastorno tiene sus ventajas: tampoco puedes repetir las mentiras que has oído.",
      "Eras experto en la creación de oro falso, que era casi tan bueno como el real. Al final, descubrieron tu treta y tuviste que huir a toda prisa. Tienes un lingote de metal pesado y oro en polvo (3 usos).",
      "Tu receta alquímica funcionó, pero un rival robó el borrador de tu escrito antes de que se pudieran confirmar tus afirmaciones. Tienes un prototipo de trabuco (1d12, Estallido, Voluminoso) que tarda un turno en recargarse. Deseas cobrar venganza.",
      "Ridiculizado por descubrir cómo convertir el oro en plomo, eres un hazmerreír. Tienes una botella de disolvente universal (2 usos) que disuelve todo lo que toca en sus partes constituyentes."
    ],
    detalle2: [
      "Gomina pirofórica. Líquido verde pegajoso que se incendia al contacto con el aire y arde durante 8 horas. No puede extinguirse (1 uso).",
      "Esfera explosiva. Una bola de hierro del tamaño de una cabeza, llena de polvo explosivo que estalla al impactar (1d12, Estallido, Voluminosa, 1 uso).",
      "Aqua vitae. Purifica cualquier líquido, convirtiéndolo en agua pura. Beberla cura 1d6 de FUE (1 uso).",
      "Piedra imitadora. Captura una frase corta que puede repetir posteriormente.",
      "Polvo chispeante. Se enciende fácil y rápidamente. Útil para encender fuego o como artefacto incendiario (3 usos).",
      "Homúnculo. Una réplica de arcilla en miniatura de ti mismo que sigue todas tus órdenes. Odia estar vinculado a ti y se queja amargamente siempre que puede. Cualquier daño infligido al homúnculo, te afecta a ti. PG 3, FUE 4, DES 13, VOL 5."
    ]
  },
  nombres: ["Hestia", "Basil", "Rune", "Prism", "Ember", "Quintess", "Aludel", "Mordant", "Salaman", "Jazia"]
};

const BACKSTORY_RECOLECTOR_FUNGICO = {
  id: "recolector_fungico",
  label: "Recolector Fúngico",
  descripcion: "Sigues los susurros de la tierra profunda, el pulso rítmico del bosque de micelio que crece bajo la superficie. La oscuridad no te causa terror. Además, te encantan las setas.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Pala de mano (1d6), Yelmo con vela (+1 de Armadura, luz tenue, 6 usos), Soga (7.5 metros), Cubo de metal",
  pregunta1: "¿Qué hongo extraño has descubierto?",
  pregunta2: "¿Qué te mantiene en tus cabales, incluso en la más absoluta oscuridad?",
  subtablas: {
    detalle1: [
      "Trompeta chillona. Cuando se expone a la luz, grita tan fuerte que todos los ataques cercanos (incluidos los tuyos) quedan en Desventaja (2 usos).",
      "Seta antorcha. Cuando se aplasta, crea una luz azul fría durante un breve periodo de tiempo (2 usos).",
      "Trufa asesina. Amarga, altamente tóxica y muy rara (vale 50 mo entre los asesinos). Ilegal en casi todos lados (1 uso).",
      "Píleo infernal. La exposición directa a su aroma provoca náuseas intensas, incluso vómitos. Si se usa en un lugar cerrado, los presentes huyen del sitio. Contenido en una botella de cristal (1 uso).",
      "Brotecopa. Ingierela para reducirte al tamaño de un ratón (tus pertenencias permanecen del mismo tamaño). Recuperas tu tamaño original en una hora, pero de manera intermitente (1 uso).",
      "Raízflor. Un hongo blanco que solo se encuentra en cadáveres profundamente enterrados. Ingierelo para restaurar 1d6 VOL. Soñarás con los muertos y sus historias (1 uso)."
    ],
    detalle2: [
      "Caracol brillante. Emite una bioluminiscencia tenue. Se alimenta con una ración cada dos días.",
      "Chal de seda de polilla. Una manta resistente a la intemperie, también puede apagar un fuego sin sufrir daños.",
      "Flor de leche. Un estimulante ligero. Masticarlo te hace inmune al Pánico durante la siguiente hora (3 usos).",
      "Luxbrújula. Vibra suavemente a medida que se acerca al sol. Eventualmente, el ruido se vuelve ensordecedor.",
      "Tejido de pereza. Un tejido duro y resistente a la intemperie, útil para colgarse de los árboles. Cuando estás dentro de él, suma +1 de Armadura.",
      "Grasa minera. Ideal para desencajar una gema, una herramienta o una extremidad de una grieta estrecha. Altamente explosivo (3 usos)."
    ]
  },
  nombres: ["Unther", "Woozy", "Hilda", "Current", "Leif", "Ratan", "Mourellа", "Lal", "Per", "Madrigal"]
};

const BACKSTORY_SEMIBRUJA = {
  id: "semibruja",
  label: "Semibruja",
  descripcion: "Nacida tanto en el mundo de los mortales como del que no se ve a simple vista, eres enigmática para unos y aterradora para otros. Tu historia es un ejemplo de lo que ocurre cuando dos mundos chocan.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Libro de Hechizos (Espesura: surge una espesura de árboles y densos matorrales de hasta 15 m de ancho; tras usarlo, el libro queda cubierto de enredaderas que deben destruirse para volver a emplearlo), Daga de hierro (1d6), Bolsa de hierbas (restaura 1 de FUE, 3 usos), Ropa de camuflaje",
  pregunta1: "¿Con qué regresaste de la corte de las Hadas Unseelie?",
  pregunta2: "¿Qué poción portas y con qué ingredientes raros lo elaboraste?",
  subtablas: {
    detalle1: [
      "Un violín de rosa negra (Voluminoso). Su música causa una intensa tristeza e inmovilidad en los mortales cercanos (el resto solo quedan fascinados). No sabes cómo tocarlo.",
      "Piernas de papel. Eres extremadamente ligera y puedes caer desde varios pisos sin lastimarte. Intenta evitar que se te rasguen o mojen.",
      "Pesadilla viviente que habita en ti y se manifiesta cuando estás en peligro. Tiene tus mismos Puntos de Características y PG; ataca con garras (1d8+1d8). Desaparece al recibir Daño Crítico (recibe 1d4 de daño a VOL) y reaparece en la siguiente luna llena.",
      "Un cuervo, como familiar, [PG 8, FUE 3, DES 11, VOL 13, pico (1d6)]. Habla como un ser inteligente y está completamente entregado a ti.",
      "Espina de zarza. Puede perforar cualquier material orgánico (provoca mucho dolor), pero si es removida no deja rastro de la perforación.",
      "Conoces el nombre verdadero de una criatura féerica. Puedes invocar al propietario de ese nombre para que te sirva, pero solo una vez. También puedes vender el nombre por un buen precio, si encuentras comprador."
    ],
    detalle2: [
      "Cenizas revitalizantes. Restos de un espíritu de los árboles. Espolvorearlos revive la llama de un fuego extinguido o devuelve la vida a una criatura muerta hace unos instantes (3 usos).",
      "Pluma de glamour. Plumas de un ave de fuego. Puede hacer que cualquier criatura se parezca a otra (o incluso a una cosa) de manera convincente (1 uso).",
      "Semilla de espino blanco. Semilla de un fruto del Otro Mundo, recogida durante el equinoccio de primavera. Al plantarla, brota un refugio lujoso que se derrumba al día siguiente, al salir la luna (1 uso).",
      "Savia del árbol de piedra. Savia obtenida a cambio de sangre. Se endurece cuando se frota sobre cualquier superficie (+1 de Armadura, 3 usos).",
      "Polvo nocturno. Hecho a partir de la quema ritual de seis búhos. Al lanzarlo al aire, el día se convierte en noche durante un breve período de tiempo (2 usos).",
      "Piedra arcana. Recolectada de un río que fluye desde el Otro Mundo. Al sacarla de su lata de hierro, puede absorber los efectos de un poder mágico activo. Al destruirla, el poder se libera (1 uso)."
    ]
  },
  nombres: ["Solena", "Veles", "Bryn", "Sabine", "Razvan", "Rowena", "Galen", "Nyx", "Vex", "Iwan"]
};

const BACKSTORY_SURCADOR_DE_ARROYOS = {
  id: "surcador_de_arroyos",
  label: "Surcador de Arroyos",
  descripcion: "Cantas las historias que se cuentan sobre los ríos y lagos, tus talentos calman a amigos y elementos por igual. Has visto más que la mayoría, pero nunca parece ser suficiente para ti.",
  equipo: "3d6 monedas de oro, Raciones (3 usos), Antorcha (3 usos), Botas de agua, Brigantina (Armadura 1, Voluminosa), Brújula, Daga (1d6)",
  pregunta1: "¿Cuál es tu canción más celebrada?",
  pregunta2: "¿Qué ha costeado tus travesías?",
  subtablas: {
    detalle1: [
      "El paso doble del remendador. Narra las graciosas peripecias de un viajero que debe entregar unos regalos. Tienes un silbato de caña. Cualquiera que esté al alcance de su silbido debe superar una tirada de VOL si pretende realizar una acción violenta.",
      "La sílfide y su amante. Narra la atrevida historia del espíritu y su amor perdido. Tienes un nudo de brisa (3 cargas). Crea una fuerte brisa a voluntad. Recarga: átalo a un mástil durante una tormenta.",
      "La devoción de Harper. Narra la triste y corta historia de un músico que se enamoró de una estrella. Tienes un laúd azul cielo. Revela las constelaciones sin importar el clima.",
      "La carpa pescadora. Una célebre canción sobre una enorme carpa que siempre parece escabullirse. Tienes un carrete de hilo de pesca (5 usos). Cada zambullida en el río garantiza una captura (aunque no siempre agradable).",
      "Melodía de la corriente plateada. Canción de cuna sin letra que imita el sonido de la corriente del agua. Tienes una flauta de piedra que puede calmar las aguas de casi cualquier río.",
      "El zorzal y el prado. Historia melancólica cantada a dos voces. Tienes una pluma de ave para escribir (1 uso, Insignificante). Un mapa dibujado con esta pluma revela el curso más rápido entre dos puntos."
    ],
    detalle2: [
      "Actuaciones. Las actuaciones en tabernas siempre dan alojamiento y comida. ¡A veces incluso te dan propinas! Tienes 1d6 mo extra.",
      "Escolta. Acompañas a quienes tienen miedo de viajar solos. Tienes un estoque (1d8).",
      "Comercio. Compras barato y vendes caro, ganando lo suficiente para sobrevivir. Tienes un objeto por valor de 20 mo o menos en la Tabla de Mercado.",
      "Transporte. Entregas paquetes “frágiles” por todo el país. Tienes al menos un contacto en cada ciudad importante.",
      "Amigo de marineros. Navegando sobre aguas turbulentas y contra vientos peligrosos, siempre te aseguras de que el barco llegue a su destino. Tu pasaje siempre es gratuito.",
      "Guía. Guías caravanas y viajeros por tierras fluviales. Tienes un mapa relevante para tu próximo viaje."
    ]
  },
  nombres: ["Gale", "Piper", "Brook", "Adair", "Stone", "Dale", "Wren", "Cliff", "Rain", "Robin"]
};

// Ejemplo: importa / declara aquí todos tus trasfondos
// (solo algunos a modo ilustrativo)
const BACKSTORIES = [
  BACKSTORY_BARBERO_CIRUJANO,
  BACKSTORY_CALDERERO,
  BACKSTORY_CAMPERO,
  BACKSTORY_CHARLATAN,
  BACKSTORY_CORTABOLSAS,
  BACKSTORY_DOMADOR_DE_BESTIAS,
  BACKSTORY_ERRADICADOR_DE_BRUJERIA,
  BACKSTORY_ESCRIBA,
  BACKSTORY_FLECHAVELOZ,
  BACKSTORY_GUARDAHUESOS,
  BACKSTORY_GUARDIA_FRONTERIZO,
  BACKSTORY_HUERFANO,
  BACKSTORY_JINETE_ESCOLTA,
  BACKSTORY_JUGLAR,
  BACKSTORY_MERODEADOR,
  BACKSTORY_NATURALISTA,
  BACKSTORY_ORIFICE,
  BACKSTORY_RECOLECTOR_FUNGICO,
  BACKSTORY_SEMIBRUJA,
  BACKSTORY_SURCADOR_DE_ARROYOS
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

