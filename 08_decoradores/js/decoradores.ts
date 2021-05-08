function Saludar(target: Function): void{
  target.prototype.saludos = function():void{
    console.log("Hola desde decoradores");
  }
}
@Saludar
class Hola{
  saludos() {
    throw new Error("Method not implemented.");
  }
  constructor(){}
}
let hola1 = new Hola();
hola1.saludos();

