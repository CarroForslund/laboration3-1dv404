"use strict";
var Admin = function(){
	console.log("Hello Admin!");
	var addCompetition = document.getElementById("addCompetition");
	addCompetition.removeAttribute("class", "hidden");
	addCompetition.addEventListener("click", function(e){
		e.preventDefault();
		addCompetition.setAttribute("class", "hidden");
		Adminpanel();
	});
};

var Adminpanel = function(){
	var newCompetition = document.getElementById("newCompetition");
	var add = document.getElementById("add");
	newCompetition.removeAttribute("class", "hidden");
	add.addEventListener("click", function(e){
		Admin.addCompetition.removeAttribute("class", "hidden");
		newCompetition.setAttribute("class", "hidden");
	});
}