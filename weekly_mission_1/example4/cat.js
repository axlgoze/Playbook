class Cat {
    constructor(name,age,weight){
    this.name = name; //this hace referencia a la variable loca de esta clase
    this.age  = age;
    this.name = weight;
}

//método
info(message){
	console.log(${this.name});
}

// Esta clase se exporta en este método
module.exports = Cat
