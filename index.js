const Discord = require('discord.js');
const client = new Discord.Client();

var medAreas = [
"alergología/inmunología", 
"cardiología",
 "gastroenterología",
  "endocrinología",
   "geriatría",
    "medicina interna",
     "nefrología",
      "neumología",
       "neurología",
        "oftalmología",
         "pediatría",
          "reumatología",
           "cirugía general",
            "dermatología",
             "ginecología y obstetricia",
              "otorrinolaringología",
              "urología",
               "traumatología",
                "Consultar a medicina general primero"];

client.on("message", message => { 
		if (message.author.bot) {return};
	if (message.content =='iniciar')
	 {
	 	console.log("iniciado programa, pregunta: sexo");
message.channel.send("¿Cual es el sexo biológico del paciente?")
.then(() => {
  message.channel.awaitMessages(response => response.content, {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
  	switch (collected.first().content) {
  		case "masculino":
  		respuestasexo = "Masculino, entonces. ¿Qué edad tiene? (responda: menor de 14, entre 14 y 65 años, o mayor a 65 años)";
  		var elementoEliminado = medAreas.splice(14, 1);
  		message.channel.send(medAreas)
  		.then(() => {
  message.channel.awaitMessages(response => response.content, {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
  	switch (collected.first().content) {
  		case "mayor a 65 años":
  		respuestaedad = "mayor de 65 años";
  		break;
  		case "menor de 14 años":
  		respuestaedad = "menor de 14 años";
  		break;
  		case "entre 14 y 65 años":
  		respuestaedad = "Entre 14 y 65 años";
  		break;
  		default:
  		respuestaedad = "Error en segunda fase, respuesta irreconocible"



  	}
      message.channel.send(respuestaedad);
    })
    .catch(() => {
      message.channel.send("segunda fase fallida");
    });
});


  		break;
  		case "femenino":
		respuestasexo = "Femenino, entonces. ¿Qué edad tiene? (responda en números, por favor)";
		message.channel.send(medAreas);
		break;
		default:
		respuestasexo = "Error, respuesta no reconocida";
  	}


      message.channel.send(respuestasexo);
      console.log("Input recibido, enviado: " + respuestasexo)
    })
    .catch(() => {
      message.channel.send("primera fase fallida");
      console.log("ejecutado catch, mejor suerte a la próxima")
    });
});



}})
console.log("Primum non nocere!")
client.login("");
