/* Paste your code from the last task *//******************************
 Name of task: Maths
 ******************************/


//Variables 
let username ;
let year = 2026;
let age = 28;
let money = 20;
let balance = money;
let birthYear;
let oldAge;
oldAge = age + 10;
birthYear = year - age;
let halfMoney = money / 2;

let OUTPUT = document.getElementById("javaScriptOutput");

function welcome(){
  OUTPUT.innerHTML += "<p>Welcome to the page "+username+"</p>";
}


function displayProduct(_name,_price){
  OUTPUT.innerHTML += "<p>The product "+_name+" costs "+_price+" pounds</p>";
}
function getFormInput(){
  const NAME_FIELD = document.getElementById("nameField");
  username = NAME_FIELD.value;

/******************************
 Main code
 ******************************/

if (age < 70){
    console.log("Definitely too young ")
}

if(age >= 70){
    console.log("Might be too old")
}

if(age == 70){
    console.log("Just right")
}


 


console.log("Hello world");
  OUTPUT.innerHTML = "<p>Your New Balance "+balance+"</p>";
  OUTPUT.innerHTML += "<p>You are "+age+" years old</p>";


welcome();
}

function showNewAge(){
  const AGE_FIELD = document.getElementById("ageField");
  const inputAge = Number(AGE_FIELD.value);
  if (isNaN(inputAge)){
    OUTPUT.innerHTML += "<p>Please enter a valid age</p>";
    return;
  }

  if (inputAge > 70) {
    OUTPUT.innerHTML += "<p>You can afford the chocolate</p>";
  } else if (inputAge < 70) {
    OUTPUT.innerHTML += "<p>You cannot afford the chocolate</p>";
  } else {
    OUTPUT.innerHTML += "<p>You are exactly 70 — just right</p>";
  }
}




