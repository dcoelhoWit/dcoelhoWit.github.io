function send(level) {
	let input = getInput();
	var correctAnswer = "";
	var destination = ""

	if (level == "GTE001") {
		correctAnswer = "obras de santa engrácia";
		destination = "GTE002.html";
	} else if (level == "GTE002") {
		correctAnswer = "cair o carmo e a trindade";
		destination = "GTE003.html";
	} else if (level == "GTE003") {
		correctAnswer = "pôr paninhos quentes";
		destination = "GTE004.html";
	} else if (level == "GTE004") {
		correctAnswer = "nem que a vaca tussa";
		destination = "waiting.html";
	}

	if (input.toUpperCase() == correctAnswer.toUpperCase()) {
		window.location.href = destination;
	} else {
		window.location.reload(); 
	}
}

function getInput() {
   return document.getElementById("myInput").value;
}