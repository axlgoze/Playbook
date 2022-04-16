// loger.js

// Esta es una función que se guardara en este código del módulo como info
exports.info = (message) => { //exports es el objeto vinculado y permite agregar sun función de interfaz
	console.log(`info: ${message}`)
}

//  Esta es una función que se guardara en este módulo como verbose
exports.verbose = (message) => { //el código se envuelve en una función para poder ser llamadpo.
	console.log(`verbose: ${message}`)
}

/*
	const logger = require('./logger')
	logger.info('This is an infotmational message')
	logger.verboser('This is a verbose message')
*/

