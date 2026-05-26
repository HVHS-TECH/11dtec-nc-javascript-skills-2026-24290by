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




 

  function start() {
    OUTPUT.innerHTML += ("<p>hi " + " as of " + year + " you are " + age + " years old.</p>");
OUTPUT.innerHTML += ("<p>you were born in " + birthYear + "</p>");
OUTPUT.innerHTML += ("<p>in 40 years you will be " + oldAge + "</p>");
OUTPUT.innerHTML += ("<p>you have " + halfMoney + " pounds</p>");
OUTPUT.innerHTML += ("<p>you have " + money + " pounds</p>");
}
function displayWelcome(_name, _age){
  OUTPUT.innerHTML += "<p>Welcome to the page "+_name+"</p>";
  OUTPUT.innerHTML += "<p>You are "+_age+" years old</p>";
}
displayWelcome("Ms Alice", 16);
  displayWelcome("Mr Bob", 99);