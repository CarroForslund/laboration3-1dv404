"use strict";
window.onload = function(){	
	var Login = function(username, password){
	//var username = document.getElementById("username");
	//var password = document.getElementById("password");
	//var submit = document.querySelector("#submit");
	var admin = "admin";
	var secret = "password";
	
	// submit.addEventListener("click", function(e){
	// 	e.preventDefault();
	// 	username = username.value;
	// 	password = password.value;
		
		//Om användarnamn och lösenord är rätt skickas man vidare till
		//administratörspanelen via Admin() efter man fått ett bekräftelsemeddelande
		if (username === admin && password === secret){
			LoginSuccess("Du är inloggad som admin");
		    return true;
		}
		//Om lösenordet är felaktigt meddelas detta och inloggningen misslyckas
		else if (username === admin && password != secret) {
			LoginFail("Oops! Fel lösenord");
		    return false;
		}
		//Om användarnamnet är felaktigt meddelas detta och inloggningen misslyckas
		else if (username != admin && password === secret) {
			LoginFail("Oops! Fel användarnamn");
		}
		//Om både användarnamn och lösenord är felaktioga meddelas detta och 
		//inloggningen misslyckas
		else if (username != admin && password != secret) {
			LoginFail("Oops! Fel användarnamn och lösenord");
		}
		else {
		    console.log("Oops! Ett oväntat fel inträffade");
		}
	});
	}
};

var LoginSuccess = function(message){
	console.log(message);
    var admin = new Admin();
};

var LoginFail = function(message){
	console.log(message);
};