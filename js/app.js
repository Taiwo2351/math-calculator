let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let modulus = document.getElementById("modulus");


add.addEventListener("click", addition);
subtract.addEventListener("click", subtraction);
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", division);
modulus.addEventListener("click", remainder);

function addition(){
  let num1 = document.getElementById("num1").value;
  let num2= document.getElementById("num2").value;
   let sum = (+num1) + (+num2);
  document.getElementById("display").innerHTML = `<h1>${ sum}</h1>`;
}

function subtraction(){
  let num1 = document.getElementById("num1").value;
  let num2= document.getElementById("num2").value;
   let sum = num1 - num2;
  document.getElementById("display").innerHTML = `<h1>${ sum}</h1>`;
}

function multiplication(){
  let num1 = document.getElementById("num1").value;
  let num2= document.getElementById("num2").value;
   let sum = num1 * num2;
  document.getElementById("display").innerHTML = `<h1>${ sum}</h1>`;
}

function division(){
  let num1 = document.getElementById("num1").value;
  let num2= document.getElementById("num2").value;
   let sum = num1 / num2;
  document.getElementById("display").innerHTML = `<h1>${ sum}</h1>`;
}

function remainder(){
  let num1 = document.getElementById("num1").value;
  let num2= document.getElementById("num2").value;
   let sum = num1 % num2;
  document.getElementById("display").innerHTML = `<p>${ sum}</p>`;
}