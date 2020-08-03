/*

HYDRA-SYNTH: SINTETIZADOR VISUAL BASADO EN JAVASCRIPT

1-. ¿Qué es el live-coding?

El Live coding es una práctica y movimiento artístico que consiste en crear y modificar algoritmos para generar música
e imágenes en tiempo real.

2-. ¿Qué es Hydra-synth?
Hydra Synth es un motor de video de código libre creado por Olivia Jack que nos permite generar visuales en tiempo real únicamente utilizando código.
Hydra emula el funcionamiento de un sintetizador modular de video, donde cada módulo permite conectar, filtrar o procesar
una señal de video.

3.- MANOS A LA OBRA
Abriremos hydra en nuestro navegador:

https://hydra.ojack.xyz/

Escribiremos en el editor de Hydra:*/
osc(1,1,1).out()
/* y luego presionaremos CTRL+SHIFT+ENTER para evaluar el código.
Veremos un fondo que cambia de color en nuestra pantalla.

Acabamos de evaluar nuestra primera línea de código.
El computador utilizó esta línea como una instrucción para presentar un oscilador.

Un oscilador es una fuente que crea una señal.
Existen varias fuentes en hydra, cada una de ellas nos entrega una señal
que podemos utilizar para generar video.

Los números separados por comas dentro del paréntesis, se llaman parámetros.
Un parámetro es un valor que le asignamos a nuestra fuente para obtener un resultado.

Luego de osc(1,1,1) vemos la función .out()
la función .out() nos permite ver el resultado de nuestra fuente en la pantalla.

Prueba con cambiar los números que se encuentran dentro de la fuente osc(1,1,1)
por otros números, y experimenta con sus variaciones.
Presiona CTRL+SHIFT+ENTER para poder ver los cambios que has realizado.

Recuerda que debes llamar a
la función .out()
para poder ver el oscilador en la pantalla.

Si has cambiado los parámetros por otros números, debiste haber notado que los resultados
cambian. Te invito a probar la función, que acepta sólo un parámetro */
voronoi()
/*
recuerda que debes encadenar la función de salida
*/
.out()
/*

osc es la función de oscilador, que nos permite crear un oscilador, entregándole
parámetros sobre los cuales funcionará.
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
