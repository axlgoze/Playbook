class Cat {
    constructor(name,age,weight){
    this.name = name; //this hace referencia a la variable loca de esta clase
    this.age  = age;
    this.weight = weight;
}

//método
info(message){
	console.log(`mensaje: ${message} [${this.name}]`);
}

} //cierre clase
// Esta clase se exporta en este método
module.exports = Cat
