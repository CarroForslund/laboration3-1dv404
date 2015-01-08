"use strict"
var TestAddCompetition = function(){
    
    var TestConstructor = function(){
        if(testAddCompetitionOk()) {
            console.log("Test 'add competition OK' passed.");
        }
        else {
            console.log("Test failed.");
        }
        if (testAddCompetitionDateNoDate()){
            console.log("Test 'date no date' passed.");
        }else {
            console.log("Test 'date no date' failed.");
        }
        if (testAddCompetitionDateNotNumbers()){
            console.log("Test 'date not numbers' passed.");
        }else {
            console.log("Test 'date not numbers' failed.");
        }
        if (testAddCompetitionPlaceToShort()){
            console.log("Test 'place to short' passed.");
        }else {
            console.log("Test 'place to short' failed.");
        }
        if (testAddCompetitionPlaceNoString()){
            console.log("Test 'place to short' passed.");
        }else {
            console.log("Test 'place to short' failed.");
        }
    };
    
    var testAddCompetitionOk = function(){
        try {
            var competition = AddCompetition("2015-10-10", "Kalmar GF");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    var testAddCompetitionNoDate = function() {
        try {
            var competition = AddCompetition(2, "Kalmar GF");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    var testAddCompetitionDateNotNumbers = function() {
        try {
            var competition = AddCompetition("string", "Kalmar GF");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    var testAddCompetitionPlaceToShort = function() {
        try {
            var competition = AddCompetition("2015-10-10", "KGK");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    var testAddCompetitionPlaceNoString = function() {
        try {
            var competition = AddCompetition("2015-10-10", 2);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    var testAddCompetitionPlaceDateFail = function() {
        
        try {
            var competition = AddCompetition(2, 2);
            return true;
        }
        catch (error) {
            return false;
        }
    };
};