"use strict"
var TestAddCompetition = function(){
    
    var TestConstructor = function(){
        if(testAddCompetitionOk()) {
            console.log("Test 'add competition OK' passed.");
        }
        else {
            console.log("Test failed.");
        }
        if (testAddCompetitionDateFail()){
            console.log("Test 'invalid date' passed.");
        }else {
            console.log("Test 'invalid date' failed.");
        }
        if (testAddCompetitionPlaceFail()){
            console.log("Test 'invalid place' passed.");
        }else {
            console.log("Test 'invalid place' failed.");
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
    
    var testAddCompetitionDateFail = function() {
        try {
            var competition = AddCompetition(2, "Kalmar GF");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    var testAddCompetitionPlaceFail = function() {
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