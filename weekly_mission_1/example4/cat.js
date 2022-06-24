class Cat {
    constructor(name,age,weight){
    this.name = name; //this hace referencia a la variable loca de esta clase
    this.age  = age;
    this.name = weight;
}

//método
info(message){
	console.log(`[Objeto con nombre: ${this.name}] info: ${message}`);
}

} //cierre clase
// Esta clase se exporta en este método
module.exports = Cat
