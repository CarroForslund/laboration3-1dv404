"use strict";
	
var LogIn = function(){
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
		if (username === admin && password === secret){
			document.getElementById("username").innerHTML = "";
			document.getElementById("password").innerHTML = "";
			alert("Welcome Admin!");
			console.log("Du är inloggad som admin");
		    Admin();
		}
		else if (username === admin && password != secret) {
			alert("Oops! Wrong password");
		    console.log("Oops! Wrong password");
		}
		else if (username != admin && password === secret) {
			alert("Oops! Wrong username");
		    console.log("Oops! Wrong username");
		}
		else if (username != admin && password != secret) {
			alert("Oops! Wrong username and password");
		    console.log("Oops! Wrong username and password");
		}
		else {
			alert("Oops! Unexpected error");
		    console.log("Oops! Unexpected error");
		}
	});
};

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