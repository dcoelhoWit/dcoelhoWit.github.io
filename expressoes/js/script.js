function send(level) {
	let input = getInput();
	var correctAnswer = false;
	var destination = ""

	if (level == "GTEFST") {
		correctAnswer = input.toUpperCase().includes("nem que a vaca tussa".toUpperCase());
		destination = "GTESND.html";
	} else if (level == "GTESND") {
		correctAnswer = input.toUpperCase().includes("carmo e a trindade".toUpperCase());
		destination = "GTETRD.html";
	} else if (level == "GTETRD") {
		correctAnswer = input.toUpperCase().includes("tempo da maria cachucha".toUpperCase());
		destination = "GTEFRD.html";
	} else if (level == "GTEFRD") {
		correctAnswer = input.toUpperCase().includes("obras de santa engrácia".toUpperCase());
		destination = "GTESTM.html";
	} else if (level == "GTESTM") {
		correctAnswer = input.toUpperCase().includes("passar as passas do algarve".toUpperCase());
		destination = "GTECUL.html";
	} else if (level == "GTECUL") {
		correctAnswer = input.toUpperCase().includes("cú virado para a lua".toUpperCase());
		destination = "GTEPNS.html";
	} else if (level == "GTEPNS") {
		correctAnswer = input.toUpperCase().includes("paninhos quentes".toUpperCase());
		destination = "GTETMN.html";
	} else if (level == "GTETMN") {
		correctAnswer = input.toUpperCase().includes("estás aqui estás a comer".toUpperCase())
		|| input.toUpperCase().includes("taz aqui taz a comer".toUpperCase())
		|| input.toUpperCase().includes("tás aqui tás a comer".toUpperCase())
		|| input.toUpperCase().includes("'tás aqui 'tás a comer".toUpperCase());
		destination = "GTEGLP.html";
	} else if (level == "GTEGLP") {
		correctAnswer = input.toUpperCase().includes("colar o pistão".toUpperCase())
		destination = "GTEGAR.html";
	} else if (level == "GTEGAR") {
		correctAnswer = input.toUpperCase().includes("fino como um alho".toUpperCase()) 
		|| input.toUpperCase().includes("fino como o alho".toUpperCase()) 
		|| input.toUpperCase().includes("fino que nem um alho".toUpperCase())
		|| input.toUpperCase().includes("fino que nem o alho".toUpperCase());
		destination = "waiting.html";
	}

	if (correctAnswer) {
		window.location.href = destination;
	} else {
		window.location.reload(); 
	}
}

function getInput() {
   return document.getElementById("myInput").value;
}