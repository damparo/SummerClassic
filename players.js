const singleCard = document.querySelector("#singlecard");
const cardList = document.querySelector("#cardlist");
const person = document.querySelector("#person");
const aTeam = document.querySelector(".ateam");
const bTeam = document.querySelector(".bteam");

let rosterField = [];
let teamOne = [];
let teamTwo = [];



showPlayersA();
playerCardA();

cardList.addEventListener("click", function (event) {
  let element = event.target;
  if (element.classList.contains("card") === true) {
    let playerName = document.createElement("div");
    playerName.className += "card avatar";
    singleCard.textContent = "";

    let userFontAwe = document.createElement("i");
    userFontAwe.className += "far fa-user";
    userFontAwe.style.fontSize = "5em";
    playerName.append(userFontAwe);

    let nameTitle = document.createElement("h4");
    nameTitle.className += "card-title";
    nameTitle.textContent = element.innerHTML;
    playerName.append(nameTitle);

    singleCard.append(playerName);
  }
});


aTeam.addEventListener("click", function(){

  showPlayersA();
  playerCardA();
  cardList.addEventListener("click", function (event) {
    let element = event.target;
    if (element.classList.contains("card") === true) {
      let playerName = document.createElement("div");
      playerName.className += "card avatar";
      singleCard.textContent = "";
  
      let userFontAwe = document.createElement("i");
      userFontAwe.className += "far fa-user";
      userFontAwe.style.fontSize = "5em";
      playerName.append(userFontAwe);
  
      let nameTitle = document.createElement("h4");
      nameTitle.className += "card-title";
      nameTitle.textContent = element.innerHTML;
      playerName.append(nameTitle);
  
      singleCard.append(playerName);
    }
  });





})

function showPlayersA() {
  let storedTeamA = JSON.parse(localStorage.getItem("aTeam"));
  if (storedTeamA !== null) {
    teamOne = storedTeamA;
  }
}


function playerCardA() {
  cardList.textContent = "";

  for (i = 0; i < teamOne.length; i++) {
    let playerCard = teamOne[i];
    let newCard = document.createElement("div");
    newCard.className += "card playername";
    newCard.textContent = playerCard;

    newCard.setAttribute("data-index", i);

    cardList.append(newCard);
  }
}


bTeam.addEventListener("click", function(){
  cardList.textContent = "";
  showPlayersB();
  playerCardB();

  cardList.addEventListener("click", function (event) {
    let element = event.target;
    if (element.classList.contains("card") === true) {
      let playerName = document.createElement("div");
      playerName.className += "card avatar";
      singleCard.textContent = "";
  
      let userFontAwe = document.createElement("i");
      userFontAwe.className += "far fa-user";
      userFontAwe.style.fontSize = "5em";
      playerName.append(userFontAwe);
  
      let nameTitle = document.createElement("h4");
      nameTitle.className += "card-title";
      nameTitle.textContent = element.innerHTML;
      playerName.append(nameTitle);
  
      singleCard.append(playerName);
    }
  });





})

function showPlayersB() {
  let storedTeamB = JSON.parse(localStorage.getItem("bTeam"));
  if (storedTeamB !== null) {
    teamTwo = storedTeamB;
  }
}


function playerCardB() {
  cardList.textContent = "";

  for (i = 0; i < teamTwo.length; i++) {
    let playerCard = teamTwo[i];
    let newCard = document.createElement("div");
    newCard.className += "card playername";
    newCard.textContent = playerCard;

    newCard.setAttribute("data-index", i);

    cardList.append(newCard);
  }
}
