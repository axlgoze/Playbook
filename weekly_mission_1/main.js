// 1. Creacón de  un objeto con propiedades

let  myCar = new Object(); //Creación de un objeto

myCar.make = 'Ford'; //guardando un valor dentro del objeto creado
myCar.model = 'Mustang';
myCar.year = '1969';

console.log(myCar); //imprimiendo objeto

// 2.  Declaración de un objeto con variables locales y públicas

const myModule = (() => {
	
	//variables de contexto local
	const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
	const privateBar = [1,2,3,4]
	const baz = "Soy un valor que va a ser expuesto" 

	//variable para guardar las variables locales
	const  exported = {
		publicFoo: "Valor público, pueden verme desde donde me llamen",
		publicBar: "Otro valor público",
		publicbaz: baz
	}

	// Exposición de variables locales
	return exported

})()

console.log(myModule)
