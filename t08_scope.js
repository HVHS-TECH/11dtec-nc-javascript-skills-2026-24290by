const output = document.getElementById("output");

/* Read the slides, make a prediction, then uncomment this code.
MY PREDICTION: The output will be 0, 1, 2, 0 because the variable in functionTwo is a different variable to the one in functionOne and the global variable.

var myVar = 0;
output.innerHTML = "Start: "+myVar+"<br>";

functionOne();
function functionOne() {
  myVar = 1;
  output.innerHTML += "functionOne: "+myVar+"<br>";
}

functionTwo();
function functionTwo() {
  var myVar = 2;
  output.innerHTML += "functionTwo: "+myVar+"<br>";
}

output.innerHTML += "end: "+myVar+"<br>";


*/