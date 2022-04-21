//importando clase
const MissionCommander = require('.app/missionCommander');

//instanciando  objetos
const carlo = new MissionCommander("Carlo");
const axel = new MissionCommander("Axel");
const jhonny = new MissionCommander("Jhonny");

//imprimiendo objetos
console.log(carlo.name) //imprime el atributo name
console.log(axel.name)
console.log(jhonny.name)
