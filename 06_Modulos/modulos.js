"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Primero, se crea la clase (persona.ts)
//Segundo, se crea un nuevo obejeto de la clase persona (modulos.ts)
const persona_1 = require("./persona");
let persona1 = new persona_1.Persona("Evelyn");
console.log(persona1.nombre);
