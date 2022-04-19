const Pokemon = require('./pokemon') //dependencia con módulo pokemon el cual contiene la clase

//Creación de objetos
const pikachu = new Pokemon("pikachu")

const bulbasaur = new Pokemon("bulbasaur")

const squirtle = new Pokemon("squirtle")

const charmander = new Pokemon("charmander")

pikachu.sayHello()
pikachu.sayMessage("Heey!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey!")

squirtle.sayHello()
squirtle.sayMessage("Heey!")

charmander.sayHello()
charmander.sayMessage("Heey!")
