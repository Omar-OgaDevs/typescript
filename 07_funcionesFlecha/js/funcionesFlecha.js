"use strict";
/*funcion en modo normal*/
let suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 4));
/*la misma funcion en modo de flecha*/
let sumaFlecha = (a, b) => {
    return a + b;
};
console.log(sumaFlecha(7, 3));
/*Si el cuerpo del metodo es una sola linea
*se pueden omitir las llaves y
*la palabra return y funciona exactamente igual
*/
let sumaFlecha2 = (a, b) => a + b;
console.log(sumaFlecha2(3, 3));
/*Una funcion simple en la cual no
*recibimos algun argumento, modo normal: */
var obtenerNombre = function () {
    return "Omar García";
};
/*En modo flecha: */
let obtenerNombreFlecha = () => "Evelyn Garcia";
console.log(obtenerNombreFlecha());
