/* 

El Live coding es una práctica y movimiento artístico que consiste en crear y modificar algoritmos para generar música 
e imágenes en tiempo real, a la vez que se proyecta el código frente a una audiencia. 
De la misma manera que el siglo XIX fue testigo de la emergencia de pianistas compositores, 
el siglo XXI está presenciando un fenómeno internacional creciente de programadores compositores, 
o artistas que quieren aprender programación (programador/performer/compositor). 
Estos creativos pueden explorar la música electrónica, la composición algorítmica y 
la creación de visuales a través de una herramienta natural de la sociedad contemporánea, el computador.

Qué es Hydra-synth?
Hydra Synth es un motor de video creado por Olivia Jack que nos permite generar visuales en tiempo real únicamente utilizando código.
Está demarcado dentro de los software de "live-coding" o código en vivo. 
La idea de hydra es tratar de emular el funcionamiento de el hardware de síntesis de video análogo y modular.
El funcionamiento, en teoría, es el mismo en que los componentes en un rack modular se unen entre sí.


1-. Comenzando 

Funciones y parámetros.
El software Hydra nos permite, en su totalidad comunicarnos con la máquina a través de funciones predeterminadas ya
por la creadora, Olivia Jack. Estas funciones emulan lo que en la vida real sería un componente de vídeo.
Para comunicarnos con Hydra, utilizamos funciones y parámetros.

Hagamos el siguiente ejercicio
*/
//Escribiremos en el editor de Hydra:
osc(1,1,1).out()
//y luego presionaremos ctrl+enter para Evaluar el código.
/* 

osc es la función de oscilador, que nos permite crear un oscilador, entregándole parámetros sobre los cuales funcionará.
Una función, en Javascript (que es el lenguaje de Hydra-synth) tiene la siguiente sintaxis:

Ejemplo:
funcion(parametroA,parametroB,parametroC)

La palabra funcion (que puede ser reemplazada por nombres de otras funciones) indicará qué función estamos llamando, 
y parametroA, parametroB y parametroC serían los parámetros de esta funcion.
Cabe mencionar que los parámetros de una función en hydra por lo general son números, tanto con punto decimal como sin ellos.
Invito entonces, a experimentar cada uno de los parámetros de osc, reemplazar por números y palabras a ver qué errores nos entrega la
consola.
---------------------------------------------------------------------------------------------------------------------------------------- 
OUT
Out es una de las funciones más importantes de Hydra y sirve para renderizar la señal de video que estemos trabajando.
En el caso de el ejemplo anterior, encadenamos .out() al final de la función para indicar que queremos renderizar en pantalla.
Esta función puede ser llamada en casi todos los casos de Fuentes de video que queramos sacar a la pantalla principal.
----------------------------------------------------------------------------------------------------------------------------------------


---------------------------------------------------------------------------------------------------------------------------------------- 
FUENTES:

Las fuentes de video son aquellas que emiten un video,
revisaremos todas.

a) Oscilador: */
osc(1,1,1).out()

/* 

En este caso llamamos un oscilador como la vez anterior. OSC es la función y 1,1,1 son los parámetros.
Los parámetros de esta función en orden son:
Frecuencia: Cuántas ondas se generarán por unidad de tiempo
Sync: Velocidad de la onda, a qué velocidad queremos que vaya. 
    Puede ir de derecha a izquierda (números positivos) o de izquierda a derecha(números negativos)
Offset: cuánto color queremos que tenga la onda que estamos llamando.
    En la escala de rgb, cuánto de cada color queremos que este oscilador tenga. 0 es blanco y negro. Mientras más grande
    el valor, más colores tendremos.


El patrón que vemos acá es FUENTE -> OUT, es decir llamamos a la función oscilador, y luego llamamos a la función OUT

b) noise  */
