var singleCard = document.querySelector("#singlecard");
var cardList = document.querySelector("#cardlist");
var person = document.querySelector("#person");
var aTeam = document.querySelector(".ateam");
var bTeam = document.querySelector(".bteam");

var rosterField = [];
var teamOne = [];
var teamTwo = [];



showPlayersA();
playerCardA();
cardList.addEventListener("click", function (event) {
  var element = event.target;
  if (element.classList.contains("card") === true) {
    var playerName = document.createElement("div");
    playerName.className += "card avatar";
    singleCard.textContent = "";

    var userFontAwe = document.createElement("i");
    userFontAwe.className += "far fa-user";
    userFontAwe.style.fontSize = "5em";
    playerName.append(userFontAwe);

    var nameTitle = document.createElement("h4");
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
    var element = event.target;
    if (element.classList.contains("card") === true) {
      var playerName = document.createElement("div");
      playerName.className += "card avatar";
      singleCard.textContent = "";
  
      var userFontAwe = document.createElement("i");
      userFontAwe.className += "far fa-user";
      userFontAwe.style.fontSize = "5em";
      playerName.append(userFontAwe);
  
      var nameTitle = document.createElement("h4");
      nameTitle.className += "card-title";
      nameTitle.textContent = element.innerHTML;
      playerName.append(nameTitle);
  
      singleCard.append(playerName);
    }
  });





})

function showPlayersA() {
  var storedTeamA = JSON.parse(localStorage.getItem("aTeam"));
  if (storedTeamA !== null) {
    teamOne = storedTeamA;
  }
}


function playerCardA() {
  cardList.textContent = "";

  for (i = 0; i < teamOne.length; i++) {
    var playerCard = teamOne[i];
    var newCard = document.createElement("div");
    newCard.className += "card playername";
    newCard.textContent = playerCard;

    newCard.setAttribute("data-index", i);

    cardList.append(newCard);
  }
}


// --------------------------------------
// showPlayers();

// function showPlayers() {
//   var storedTeam = JSON.parse(localStorage.getItem("team"));
//   if (storedTeam !== null) {
//     rosterField = storedTeam;
//   }
// }

// console.log(rosterField);

// playerCard();

// function playerCard() {
//   cardList.textContent = "";

//   for (i = 0; i < rosterField.length; i++) {
//     var playerCard = rosterField[i];
//     var newCard = document.createElement("div");
//     newCard.className += "card playername";
//     newCard.textContent = playerCard;

//     newCard.setAttribute("data-index", i);

//     cardList.append(newCard);
//   }
// }

// cardList.addEventListener("click", function (event) {
//   var element = event.target;
//   if (element.classList.contains("card") === true) {
//     var playerName = document.createElement("div");
//     playerName.className += "card avatar";
//     singleCard.textContent = "";

//     var userFontAwe = document.createElement("i");
//     userFontAwe.className += "far fa-user";
//     userFontAwe.style.fontSize = "5em";
//     playerName.append(userFontAwe);

//     var nameTitle = document.createElement("h4");
//     nameTitle.className += "card-title";
//     nameTitle.textContent = element.innerHTML;
//     playerName.append(nameTitle);

//     singleCard.append(playerName);
//   }
// });


bTeam.addEventListener("click", function(){
  cardList.textContent = "";
  showPlayersB();
  playerCardB();

  cardList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.classList.contains("card") === true) {
      var playerName = document.createElement("div");
      playerName.className += "card avatar";
      singleCard.textContent = "";
  
      var userFontAwe = document.createElement("i");
      userFontAwe.className += "far fa-user";
      userFontAwe.style.fontSize = "5em";
      playerName.append(userFontAwe);
  
      var nameTitle = document.createElement("h4");
      nameTitle.className += "card-title";
      nameTitle.textContent = element.innerHTML;
      playerName.append(nameTitle);
  
      singleCard.append(playerName);
    }
  });





})

function showPlayersB() {
  var storedTeamB = JSON.parse(localStorage.getItem("bTeam"));
  if (storedTeamB !== null) {
    teamTwo = storedTeamB;
  }
}


function playerCardB() {
  cardList.textContent = "";

  for (i = 0; i < teamTwo.length; i++) {
    var playerCard = teamTwo[i];
    var newCard = document.createElement("div");
    newCard.className += "card playername";
    newCard.textContent = playerCard;

    newCard.setAttribute("data-index", i);

    cardList.append(newCard);
  }
}
