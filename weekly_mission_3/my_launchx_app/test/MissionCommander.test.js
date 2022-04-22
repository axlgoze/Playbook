const MissionCommander = require('../app/misionCommander');

describe("Unit Tests for Mission Commander Class", () => {
	test('1) Create a mission commander object', () => {
		// Aqui puedes usar el código como lo deseas utilizar
		const myMissionCommander = new MissionCommander ("Woopa")
		// validar el resultado esperado
		expect(myMissionCommander.name).toBe("Woopa"); //el primer parametro es la propiedad a probarm, el siguiente parentesis es el valor que esperas obtener

	})
})
