const leftTeam = document.querySelector("#team1");
const rightTeam = document.querySelector("#team2");
const leftNum = document.querySelector(".leftnumber");
const rightNum = document.querySelector(".rightnumber");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
// const add = document.querySelector(".add");
// const subtract = document.querySelector(".subtract");
const points = document.querySelector(".points");

// let countL = localStorage.getItem("scoreL");
// let  countR = localStorage.getItem("scoreR");
let counter = 0;
let secondCounter = 0;

// const radioBtns = document.querySelector("input[name=winning]");


// checkTeam1();




function checkTeam1() {

if (leftTeam.checked = true) {


  plus.addEventListener("click", function (e) {
    counter += 1;
    leftNum.textContent = counter;
    if (counter === 0) {
      leftNum.textContent = 0;
    }
  
    // localStorage.setItem("scoreL", countL);
  });
  
  minus.addEventListener("click", function () {
    counter--;
    leftNum.textContent = counter;
  
    if (counter < 0) {
      counter = 0;
      leftNum.textContent = 0;
    }
  
    // localStorage.setItem("scoreL", countL);
  });
  }

}
  

function checkTeam2() {
  console.log("yes?");

  plus.addEventListener("click", function () {
   
    secondCounter++;
    rightNum.textContent = secondCounter;
    if (secondCounter === 0) {
      rightNum.textContent = 0;
    }
    // localStorage.setItem("scoreR", countR);
  });

  minus.addEventListener("click", function () {
    secondCounter--;
    rightNum.textContent = secondCounter;

    if (secondCounter < 0) {
      secondCounter = 0;
      rightNum.textContent = 0;
    }
    // leftNum.textContent = countL;
    // localStorage.setItem("scoreL", countL);
  });
}