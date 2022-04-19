const Pokemon = require('./pokemon') //dependencia con módulo pokemon

const pikachu = new Pokemon("pikachu") //Creación de objetos

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



