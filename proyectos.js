
/* =====================================
   INFORMACIÓN DE LOS SEIS PROYECTOS
===================================== */

const proyectos = {

  1: {
    titulo: "The Dark Side of the Moon",
    color: "#B5728A",
    imagen: "Imagenes/Proyecto 1.png",

    descripcion: [
      `El primer encargo consistió en reinterpretar la
      portada de un álbum musical utilizando p5.js.
      Para este ejercicio escogí The Dark Side of the
      Moon, buscando reconocer sus principales
      características visuales, como las proporciones,
      los colores, las formas y la composición.`,

      `El trabajo comenzó con un proceso de dibujo y
      esquematización que permitió comprender la
      estructura de la imagen original. A partir de
      este análisis, la propuesta se trasladó al
      lenguaje del código, utilizando figuras básicas
      y formas construidas mediante beginShape()
      y vertex().`,

      `El objetivo fue conservar los rasgos reconocibles
      de la portada, pero reinterpretándolos mediante
      una composición realizada completamente con
      código.`
    ],

    wiki: "https://wiki.ead.pucv.cl/Encargo_1_IE_-_The_Dark_Side_of_the_Moon_-_Isabel_S%C3%A1ez"
  },


  2: {
    titulo: "Patrón cromático dinámico",
    color: "#9F9679",
    imagen: "Imagenes/Proyecto 2.png",

    descripcion: [
      `En este segundo encargo se trabajó en la creación
      de una composición visual dinámica mediante la
      repetición de elementos gráficos en p5.js.
      La propuesta debía estar formada por figuras
      simples, como círculos, líneas o rectángulos,
      que cambiaran progresivamente con el tiempo.`,

      `Para desarrollar el ejercicio era necesario
      incorporar variables que controlaran al menos
      dos propiedades visuales, como el tamaño,
      la posición, el color o la velocidad. También
      se debía utilizar un bucle for para generar
      una serie de al menos diez elementos.`,

      `Además, el sketch debía incluir una condición
      que provocara un cambio visible en la
      composición. De esta manera, el ejercicio
      permitió explorar cómo la repetición y la
      variación pueden construir una imagen
      en constante transformación.`
    ],

    wiki: "https://wiki.ead.pucv.cl/Encargo_2_IE_-_Isabel_S%C3%A1ez"
  },


  3: {
    titulo: "Cruce de formas",
    color: "#AABAAE",
    imagen: "Imagenes/Proyecto 3.png",

    descripcion: [
      `El tercer encargo estuvo enfocado en las
      funciones de transformación de p5.js.
      El objetivo era construir un patrón visual
      complejo a partir de la organización y
      repetición de distintas formas.`,

      `Para realizarlo se debían utilizar funciones
      como translate(), rotate(), scale(), push()
      y pop(), que permiten modificar la posición,
      la orientación y el tamaño de los elementos
      dentro del espacio de dibujo.`,

      `A través de estas transformaciones, el
      ejercicio buscaba comprender cómo una
      composición puede desarrollarse a partir
      de formas simples que se relacionan y
      transforman entre sí.`
    ],

    wiki: "https://wiki.ead.pucv.cl/Encargo_3IE_-_Isabel_S%C3%A1ez"
  },


  4: {
    titulo: "Fractal de luz",
    color: "#933B5B",
    imagen: "Imagenes/Proyecto 4.png",

    descripcion: [
      `En este encargo se trabajó con la recursividad
      para generar un patrón visual en p5.js.
      El objetivo era construir una composición
      en la que una misma estructura pudiera
      repetirse y transformarse a diferentes escalas.`,

      `Además del uso de funciones recursivas,
      el ejercicio debía incorporar algún tipo
      de interacción con el usuario, como un
      slider, el movimiento del mouse o una
      acción realizada mediante un clic.`,

      `Esto permitió explorar la relación entre
      la repetición de formas, las variaciones
      del patrón y la posibilidad de modificar
      visualmente la composición mediante
      la interacción.`
    ],

    wiki: "https://wiki.ead.pucv.cl/Encargo_4_IE-_Isabel_S%C3%A1ez"
  },


  5: {
    titulo: "Explosión",
    color: "#E3D3BF",
    imagen: "Imagenes/Proyecto 5.png",

    descripcion: [
      `El quinto proyecto consistió en desarrollar
      un sistema de partículas mediante p5.js.
      Cada partícula debía tener una forma visual
      definida a través de una función personalizada,
      permitiendo experimentar con distintas
      propiedades y comportamientos.`,

      `El ejercicio buscaba explorar cómo múltiples
      elementos individuales pueden relacionarse
      dentro de una misma composición, generando
      movimientos, variaciones y efectos visuales
      a partir de su comportamiento.`,

      `De esta manera, el trabajo permitió profundizar
      en la construcción de sistemas gráficos
      dinámicos mediante código.`
    ],

    wiki: "https://wiki.ead.pucv.cl/Encargo_5_IE_-_Isabel_S%C3%A1ez"
  },


  6: {
    titulo: "El amanecer de la primavera",
    color: "#A85B76",
    imagen: "Imagenes/Proyecto 6.png",

    descripcion: [
      `El último encargo de la Unidad 1 consistió
      en desarrollar una experiencia visual e
      interactiva que reuniera los conocimientos
      adquiridos durante los ejercicios anteriores.`,

      `La propuesta debía orientarse a generar
      sensaciones de asombro, contemplación y
      belleza, a través de una composición
      generativa coherente. Para esto era
      necesario desarrollar previamente un
      proceso de conceptualización que permitiera
      organizar las decisiones visuales y
      traducirlas al lenguaje del código.`,

      `El proyecto también debía incorporar al
      menos dos tipos de interacción, cada uno
      relacionado con comportamientos visuales
      significativos y no solamente decorativos.
      Además, se debía trabajar con un código
      estructurado y organizado de acuerdo con
      las funcionalidades de la pieza.`,

      `Este ejercicio permitió reunir los
      aprendizajes de la unidad en una sola
      propuesta, relacionando la programación,
      la composición visual y la interacción
      con el usuario.`
    ],

    wiki: "https://wiki.ead.pucv.cl/El_Amanecer_de_la_Primavera_-_Entrega_U1_IE"
  }

};


/* =====================================
   MOSTRAR EL PROYECTO SELECCIONADO
===================================== */

const parametros = new URLSearchParams(window.location.search);

const id = Number(parametros.get("id"));

const proyecto = proyectos[id];


if (!proyecto) {

  document.getElementById("titulo-proyecto").textContent =
    "Proyecto no encontrado";

  document.getElementById("descripcion-proyecto").textContent =
    "No encontramos este proyecto. Puedes volver al archivo principal.";

  document.getElementById("marco-proyecto").style.display = "none";

  document.getElementById("enlace-wiki").style.display = "none";

} else {

  document.title =
    proyecto.titulo + " | Imagen Escrita 2026";


  /* NÚMERO DEL PROYECTO */

  document.getElementById("numero-proyecto").textContent =
    "UNIDAD 1 / PROYECTO " + String(id).padStart(2, "0");


  /* TÍTULO */

  document.getElementById("titulo-proyecto").textContent =
    proyecto.titulo;


  /* COLOR DEL MARCO */

  const marco = document.getElementById("marco-proyecto");

  marco.style.backgroundColor = proyecto.color;


  /* FOTOGRAFÍA */

  const imagen = document.getElementById("imagen-proyecto");

  imagen.src = proyecto.imagen;

  imagen.alt = proyecto.titulo;

  imagen.onerror = function() {
    this.style.display = "none";
  };


  /* DESCRIPCIÓN */

  const descripcion =
    document.getElementById("descripcion-proyecto");

  proyecto.descripcion.forEach(function(parrafo) {

    const p = document.createElement("p");

    p.textContent = parrafo.replace(/\s+/g, " ").trim();

    descripcion.appendChild(p);

  });


  /* ENLACE WIKI CASIOPEA */

  document.getElementById("enlace-wiki").href =
    proyecto.wiki;


  /* NAVEGACIÓN ENTRE PROYECTOS */

  const anterior =
    document.getElementById("proyecto-anterior");

  const siguiente =
    document.getElementById("proyecto-siguiente");


  if (id > 1) {

    anterior.href = "proyecto.html?id=" + (id - 1);

  } else {

    anterior.textContent = "← Volver a proyectos";

  }


  if (id < 6) {

    siguiente.href = "proyecto.html?id=" + (id + 1);

  } else {

    siguiente.textContent = "Volver a proyectos →";

  }

}
