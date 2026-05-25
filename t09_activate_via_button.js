/******************************
 Name of task: Maths
 ******************************/


//Variables 
let username = "Ben";
let year = 2026;
let age = 28;
let money = 20;
let birthYear;
let oldAge;
 oldAge = age + 10;
 birthYear - year - age;

let OUTPUT = document.getElementById("spaceForJavaScriptOutput")
/******************************
 Main code
 ******************************/


function writeLine() {
    // Add a line to the html page
    OUTPUT.innerHTML += "<p>Less code matters</p>";
}
function displayWelcome(_name, _age){
  OUTPUT.innerHTML += "<p>Welcome to the page "+_name+"</p>";
  OUTPUT.innerHTML += "<p>You are "+_age+" years old</p>";
}
displayWelcome("Jiggle", 16);
  displayWelcome("Mr BobTheGerbal", 99);


  