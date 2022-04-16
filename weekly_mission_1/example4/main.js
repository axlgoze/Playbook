const Logger = require('./logger') //invoca el módulo que contiene la clase

//Creación de  un Objeto
const dbLogger = new Logger('DB') // Crea  un  objeto nuevo,  esto llama por default el constructor de la clase

//invocacipon del método
dbLogger.info('This es an informational message')

//Creación de otro Obnjeto
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')
