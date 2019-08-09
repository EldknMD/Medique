exports.run = (client, message, Discord) => {

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
  		respuestasexo = "Masculino, entonces. ¿Qué edad tiene? (responda en números, por favor)";
  		var elementoEliminado = medAreas.splice(14, 1);
  		message.channel.send(medAreas);
  		break;
  		case "femenino":
		respuestasexo = "Femenino, entonces. ¿Qué edad tiene?";
		message.channel.send(medAreas);
		break;
  	}


      message.channel.send(respuestasexo);
    })
    .catch(() => {
      message.channel.send("primera fase fallida");
    });
});



}