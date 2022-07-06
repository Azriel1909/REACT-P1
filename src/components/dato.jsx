
// PARTE A
// .js o jsx -> extensión alternativa e equivalente a js, ambos se interpretan como archivo .js
//import React from 'react'; // Importar React del paquete react
// Definir componente

import '../stylesheets/dato.css';

/**Para utilizar Props escribimos dentro del paréntesis "props" y podemos usar esa palabra en la estructura del componente, los props reciben valores y pueden ser utilizados en el componente.*/

function Dato(props) { //renderizar componente (crearlo para mostrarlo)
  //Indentation estándar = 2 espacios
  //Un componente funcional de react retorna un elemento jsx
  /*los dos puntos le dicen a js que la carpeta images no esta ubicada directamente en la carpeta principal componente, buscar un nivel arriba..*/
  return (
    <div className='contenedorDatoPrincipal'>
      <img className='imagenDato'
      //Plantillas literales, las comillas ``nos permiten insertar código de js dentro de la cadena de caracteres.
      src={require(`../images/dato-${props.imagen}.png`)}
      alt='imágen cartoon de archivo'
      //preparar proyecto
      //Una vez asignados los props,pasamos Props, el envía es unidireccional.
      //El componente que lo renderiza puede enviar Props pero no retornar.
      />
      <div className='contenedorTextoDato'>
        <p className='nombreDato'><strong>{props.titulo}</strong></p>
        <p className='subDato'><i>{props.subtitulo}</i></p>
        <p className='descripcionDato'>{props.descripcion}</p>
      </div>
    </div>
  );
}

//Exportamos el paquete

export default Dato;

/**¿por qué necesitamos Props?
 * El objetivo de react es ayudarnos a crear componentes reusables.
 */