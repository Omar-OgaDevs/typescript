//Primero, se crea la clase (persona.ts)
//Segundo, se crea un nuevo obejeto de la clase persona (modulos.ts)
import {Persona} from './persona';

let persona1 = new Persona("Evelyn","García");

console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.apellido);
