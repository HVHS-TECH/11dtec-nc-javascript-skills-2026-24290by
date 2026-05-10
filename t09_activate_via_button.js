 function writeLine() {
    // Add a line to the html page
    OUTPUT.innerHTML += "<p>Less code matters</p>";
}
function displayWelcome(_name, _age){
  OUTPUT.innerHTML += "<p>Welcome to the page "+_name+"</p>";
  OUTPUT.innerHTML += "<p>You are "+_age+" years old</p>";
}
displayWelcome("Ms Alice", 16);
  displayWelcome("Mr Bob", 99);
  
<button onClick="start()">START</button>

  <p>Open the console <code>(Ctrl-shift-i)</code></p>

<button onclick="start()">Start</button>

<div id="spaceForJavaScriptOutput"></div>