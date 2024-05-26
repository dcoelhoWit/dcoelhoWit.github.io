function send(level) {
	let input = getInput();
	var correctAnswer = "";
	var correctAnswer2 = "";
	var correctAnswer3 = "";
	var destination = ""

	if (level == "GTEFST") {
		correctAnswer = "nem que a vaca tussa";
		destination = "GTESND.html";
	} else if (level == "GTESND") {
		correctAnswer = "carmo e a trindade";
		destination = "GTETRD.html";
	} else if (level == "GTETRD") {
		correctAnswer = "tempo da maria cachucha";
		destination = "GTEFRD.html";
	} else if (level == "GTEFRD") {
		correctAnswer = "obras de santa engrácia";
		destination = "waiting.html";
	}

	if (input.toUpperCase().includes(correctAnswer.toUpperCase()) 
		|| input.toUpperCase().includes(correctAnswer2.toUpperCase()) 
		|| input.toUpperCase().includes(correctAnswer3.toUpperCase())) {

		window.location.href = destination;
	} else {
		window.location.reload(); 
	}
}

function getInput() {
   return document.getElementById("myInput").value;
}