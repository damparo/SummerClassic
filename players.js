var singleCard = document.querySelector("#singlecard");
var cardList = document.querySelector("#cardlist");



var rosterField = [];

showPlayers();





function showPlayers () {

    var storedTeam = JSON.parse(localStorage.getItem("team"));
    if (storedTeam !== null) {
        rosterField = storedTeam;
    }
    
}

console.log(rosterField);
  
playerCard();
  
function playerCard () {


  
  cardList.textContent = "";
  
  for (i = 0; i < rosterField.length; i++) {
    var playerCard= rosterField[i];
    var newCard = document.createElement("div")
    newCard.className += "card";
    newCard.textContent = playerCard;
    cardList.append(newCard);
  
  }
  
  
  
  
  
  }