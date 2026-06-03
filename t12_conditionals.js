/******************************
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

/******************************
 Main code
 ******************************/

if (money < 70){
    console.log("to broke")
}

if(money >= 70){
    console.log("you can buy it")
}

if(money == 70){
    console.log("your gonna be broke")
}

function displayProduct(_name,_price){
  OUTPUT.innerHTML += "<p>The product "+_name+" costs "+_price+" mOney</p>";
}
function getFormInput(){
  const NAME_FIELD = document.getElementById("nameField");
  username = NAME_FIELD.value;
}

function showNewAge(){
  const NAME_FIELD = document.getElementById("nameField");
  username = NAME_FIELD.value;
  
  const AGE_FIELD = document.getElementById("ageField");
  const inputAge = Number(AGE_FIELD.value);
  if (isNaN(inputAge)){
    OUTPUT.innerHTML = "<p>put pocket money</p>";
    return;
  }
  OUTPUT.innerHTML = "<p>Name "+username+"</p>";
  OUTPUT.innerHTML += "<p>pocket money: "+inputAge+"</p>";
}




