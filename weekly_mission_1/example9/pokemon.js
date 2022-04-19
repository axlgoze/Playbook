//creando clase

class Pokemon{
	//constructor
	constructor(name){
		//this.name es la variable que se guarda en el contexto local
		this.name=name //atributo nombre del pokemon
	}

	//método di hola
	//message es una variable que se le pasa al ejecutar en el contexto local
	sayHello (message){
		console.log(`Mi pokemon ${this.name} te saluda!!!`)
	}
	
	//método di mensaje
	sayMessage (message){
		console.log(`Mi pokemon ${this.name} dice: ${message}`)
	}
}

// exportando módulo
module.exports = Pokemon

