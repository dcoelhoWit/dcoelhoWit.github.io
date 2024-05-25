function send(level) {
	let input = getInput();
	var correctAnswer = "";
	var correctAnswer2 = "";
	var correctAnswer3 = "";
	var destination = ""

	if (level == "GTEFST") {
		correctAnswer = "nem que a vaca tussa";
		correctAnswer2 = "nem que a vaca tussa";
		correctAnswer3 = "nem que a vaca tussa";

		destination = "GTESND.html";
	} else if (level == "GTESND") {
		correctAnswer = "cair o carmo e a trindade";
		correctAnswer2 = "cair o carmo e a trindade";
		correctAnswer3 = "cair o carmo e a trindade";

		destination = "GTETRD.html";
	} else if (level == "GTETRD") {
		correctAnswer = "tempo da maria cachucha";
		correctAnswer2 = "do tempo da maria cachucha";
		correctAnswer3 = "no tempo da maria cachucha";

		destination = "GTEFRD.html";
	} else if (level == "GTEFRD") {
		correctAnswer = "obras de santa engrácia";
		correctAnswer2 = "como as obras de santa engrácia";
		correctAnswer3 = "como as obras de santa engrácia";

		destination = "waiting.html";
	}

	if (input.toUpperCase() == correctAnswer.toUpperCase() 
		|| input.toUpperCase() == correctAnswer2.toUpperCase() 
		|| input.toUpperCase() == correctAnswer3.toUpperCase()) {

		window.location.href = destination;
	} else {
		window.location.reload(); 
	}
}

function getInput() {
   return document.getElementById("myInput").value;
}