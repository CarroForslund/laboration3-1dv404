"use strict";

//Funktion som stämmer av om det hårdkodade användarnamnet och 
//lösenordet stämmer överrens med de inmatade värdena.
var LogIn = function(username, password){
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var submit = document.querySelector("#submit");
	var admin = "admin";
	var secret = "password";
	
	submit.addEventListener("click", function(e){
		e.preventDefault();
		username = username.value;
		password = password.value;
		console.log(typeof(username));
		console.log(username);
		
		//Om användarnamn och lösenord är rätt skickas man vidare till
		//administratörspanelen via Admin() efter man fått ett bekräftelsemeddelande
		if (username === admin && password === secret){
			LoginSuccess(); //Innehåller nedanstående utkommenterat
			//document.getElementById("username").innerHTML = "";
			//document.getElementById("password").innerHTML = "";
			//alert("Välkommen Admin!");
			//console.log("Du är inloggad som admin");
		    //Admin();
		    
		    return true;
		}
		//Om lösenordet är felaktigt meddelas detta och inloggningen misslyckas
		else if (username === admin && password != secret) {
			DisplayError() //Innehåller utkommenterat nedan
			//alert("Oops! Fel lösenord");
		    //console.log("Oops! Fel lösenord");
		    return false;
		}
		//Om användarnamnet är felaktigt meddelas detta och inloggningen misslyckas
		else if (username != admin && password === secret) {
			alert("Oops! Fel användarnamn");
		    console.log("Oops! Fel användarnamn");
		}
		//Om både användarnamn och lösenord är felaktioga meddelas detta och 
		//inloggningen misslyckas
		else if (username != admin && password != secret) {
			alert("Oops! Fel användarnamn och lösenord");
		    console.log("Oops! Fel användarnamn och lösenord");
		}
		else {
			alert("Oops! Ett oväntat fel inträffade");
		    console.log("Oops! Ett oväntat fel inträffade");
		}
	});
};

//Funktion som genererar administratörsgränssnittet och som anropas av 
//LogIn() när användaren matat in rätt inloggningsuppgifter
//Knappen skapa tävling visas
var Admin = function(){
	console.log("Hello Admin!");
	var addCompetition = document.getElementById("addCompetition");
	addCompetition.removeAttribute("class", "hidden");
	addCompetition.addEventListener("click", function(e){
		e.preventDefault();
		addCompetition.setAttribute("class", "hidden");
		AddCompetition();
	});
};

//När användaren klickat på att skapa ny tävling hämtas formuläret 
//där användaren kan mata in tävlingsuppgifterna
var AddCompetition = function(){
	var newCompetition = document.getElementById("newCompetition");
	var add = document.getElementById("add");
	newCompetition.removeAttribute("class", "hidden");
	add.addEventListener("click", function(e){
		Admin.addCompetition.removeAttribute("class", "hidden");
		newCompetition.setAttribute("class", "hidden");
	});
};

window.onload = function(){	
	LogIn();
};