export default class MyPokemon{
 constructor(name){
	this.name = name
 }
	//método di hola
	//message es una variable que se le pasa al ejecutar en el contexto local
	sayHello (message){
		console.log(`Mi pokemon ${this.name} te saluda!!!`)
	}
}
