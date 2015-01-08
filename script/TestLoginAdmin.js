"use strict";
var TestLoginAdmin = function(){
    
    var TestConstructor = function(){
        if(testLoginOk()) {
            console.log("Test 'login OK' passed.");
        }
        else {
            console.log("Test 'login OK' failed.");
        }
        if (testLoginUserNameFail()){
            console.log("Test 'invalid username' passed.");
        }else {
            console.log("Test 'invalid username' failed.");
        }
        if (testLoginPasswordFail()){
            console.log("Test 'invalid password' passed.");
        }
        else {
            console.log("Test 'invalid password' failed.");
        }
        if (testLoginUserNamePasswordFail()){
            console.log("Test 'invalid username and password' passed.");
        }
        else {
            console.log("Test 'invalid username and password' failed.");
        }
    };
    
    var testLoginOk = function(){
        try {
            var result = Login("admin","password");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    var testLoginPasswordFail = function() {
        try {
            var result = Login("admin","psssword");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    var testLoginUserNameFail = function() {
        try {
            var result = Login("adman","password");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    var testLoginUserNamePasswordFail = function() {
        
        try {
            var result = Login("adman","psssword");
            return true;
        }
        catch (error) {
            return false;
        }
    };
};