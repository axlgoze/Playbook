const logger =require('./logger') //requiere del módulo -parte de código- de logger

//Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an informational message')

/*
 También puedes instanciar uno nuevo de esta manera:
	const customerLogger = new logger.constructor('CUSTOM')
	customLogger.log('This is an informational message')
*/
