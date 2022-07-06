//PARTE B
//Componente principal de la app
//Debemos importar el componente (primero debemos exportar)
//Importar componente
import Dato from './components/dato';
import './App.css';


function App() {
  return (
    <div className='App'>
      <div className='contenedorPrincipal'>
      <h1>Datos geniales sobre React</h1>
      <Dato 
      titulo='¿Qué es React?'
      subtitulo='Conceptos fundamentales'
      imagen='1'
      descripcion='Es una biblioteca de JavaScript de código abierto diseñada para crear interfaces de usuario y su código es abierto(ya que es un repositorio Open Source para que cualquiera pueda contribuir).' />
      <Dato 
      titulo='¿Qué es una biblioteca?'
      subtitulo='Traducido como "library"'
      imagen='2'
      descripcion='Conjunto de implementaciones o sub-programas que podemos utilizar en nuestro código.' />
      <Dato 
      titulo='¿Cuáles son sus ventajas?'
      subtitulo='Ventajas'
      imagen='3'
      descripcion='Es fácil de utilizar, tenemos componentes reutilizables, podemos crear aplicaciones dinámicas y brinda un buen desempeño.' />
      <Dato 
      titulo='¿Qué es un componente?'
      subtitulo='Concepto 1'
      imagen='4'
      descripcion='Es la parte de la interfaz de usuario (parte visual) que es independiente y reusable, son como pequeños bloques de legos, existen dos tipos de componentes: Funcionales y de clase.' />
      <Dato 
      titulo='¿Qué es un componente Funcional?'
      subtitulo='Concepto 2'
      imagen='5'
      descripcion='Es el componente más fácil de implementar; Es una función de JavaScript/ES6 que retorna un elemento de React(JSX).' />
      <Dato 
      titulo='¿Qué es JSX?'
      subtitulo='Concepto 4'
      imagen='6'
      descripcion='Es una sintaxis extendida de JavaScript, es como una combinación de html y javaScript.' />
      <Dato 
      titulo='Componentes Funcionales'
      subtitulo='Características'
      imagen='5'
      descripcion='Debe retornar un elemento de React(JSX), debe comenzar con letra mayúscula y puede recibir valores si es necesario.' />
      <Dato 
      titulo='¿Qué son los Props?'
      subtitulo='Concepto 5'
      imagen='8'
      descripcion='Es una forma de abreviar "Properties", son argumentos que puede recibir un componente de React y sólo pueden ser enviados de componente padre a componente hijo.' />
      <Dato 
      titulo='¿Qué es un componente de Clase?'
      subtitulo='Concepto 6'
      imagen='9'
      descripcion='Es una clase de ES6 un estándar de JavaScript modernos que nos retorna un elemento JSX, aquí tenemos que extender React.Component para tener todas las propiedades de un componente de react, dentro de la clase debemos definir el método Render() y dentro retornamos ese elemento JSX que se mostrará en la app.' />
      <Dato 
      titulo='Componentes de Clase'
      subtitulo='Características'
      imagen='9'
      descripcion='Debe extender React.Component, debe tener un método Render() para retornar elemento JSX y puede recibir valores si es necesario(props).' />
      <Dato 
      titulo='¿Qué es un estado?'
      subtitulo='Concepto 7'
      imagen='11'
      descripcion='Un State es una representación en JavaScript del conjunto de propiedades de un componente y sus valores actuales(aquí las propiedades no son Props sino información sobre el componente, son propiedades actualizables).' />
      <Dato 
      titulo='¿Por qué tenemos componentes de clase y funcionales?'
      subtitulo='Dato interesante'
      imagen='12'
      descripcion='Anteriormente se utilizaban componentes de clase para poder trabajar cons estado de los componentes, en versiones anteriores a 16.8 de React no se podía realizar en componentes funcionales., posteriormente llegaron los HOOKS' />
      <Dato 
      titulo='¿Qué son HOOKS?'
      subtitulo='Concepto 8'
      imagen='13'
      descripcion='Permiten usar un estado y otras características sin escribir una clase, podemos actualizar y asignar el estado de un componente funcional en React con los Hooks(trabajamos con estados en componentes funcionales).' />
      <Dato 
      titulo='¿Qué es Event Listener?'
      subtitulo='Concepto 9'
      imagen='14'
      descripcion='O función Event Handler es una función en JavaScript que se ejecuta cuando ocurre un evento específico.' />
      
      </div>
    </div>
  );
}
export default App;

/**En react tenemos dos tipos de exportación:
 * 1- Nombrada - Sí podemos exportar varios elementos de un mismo archivo.
 * EJEMPLO 
 * export fuction Dato() -> Colocamos export antes de la función.
 * en este archivo {Dato} -> Le dicen a React que queremos escoger ese componente en especial que quermos importar.
 * Si lo hacemos por defecto sólo podemos exportar uno.
 * 2- Por Defecto - Permite decir que será el único elemento que se va a exportar de este archivo.
 * Aquí usamos exportación por defecto.
 */

/**NOTA(HERRAMIENTAS DE REACT) -> Hay una extensión muy guapa que puedes encontrar en chrome store, se llama "React Developer Tools" */
