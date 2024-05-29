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
		destination = "GTEDSP.html";
	} else if (level == "GTEDSP") {
		correctAnswer = input.toUpperCase().includes("rir a bandeiras despregadas".toUpperCase());
		destination = "GTECLF.html";
	} else if (level == "GTECLF") {
		correctAnswer = input.toUpperCase().includes("pensar na morte da bezerra".toUpperCase());
		destination = "waiting.html";
	}

	if (correctAnswer) {
		fadeOutEffect(destination);
	} else {
		window.location.reload(); 
	}
}

function getInput() {
	return document.getElementById("myInput").value;
}

function fadeOutEffect(destination) {
    var fadeTarget = document.getElementById("fadeTarget"); // Get the element to fade out
    var fadeEffect = setInterval(function () {
    	if (!fadeTarget.style.opacity) {
    		fadeTarget.style.opacity = 1;
    	}
    	if (fadeTarget.style.opacity > 0) {
    		fadeTarget.style.opacity -= 0.1;
    	} else {
            clearInterval(fadeEffect); // Clear the interval when the element is invisible
            window.location.href = destination
         }
    }, 30); // Set the speed of the fade-out here
 }

 function fadeInEffect() {
	var fadeTarget = document.getElementById("fadeTarget"); // Get the element to fade out
	var fadeEffect = setInterval(function () {
		if (fadeTarget.style.opacity < 1) {
			fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) + 0.1;
		} else {
			clearInterval(fadeEffect); // Clear the interval when the element is visible
		}
    }, 30); // Set the speed of the fade-out here
}

document.addEventListener("DOMContentLoaded", function() {
	fadeInEffect();
});