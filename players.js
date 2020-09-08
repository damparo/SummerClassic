var singleCard = document.querySelector("#singlecard");
var cardList = document.querySelector("#cardlist");
var person = document.querySelector("#person");

var rosterField = [];

showPlayers();

function showPlayers() {
  var storedTeam = JSON.parse(localStorage.getItem("team"));
  if (storedTeam !== null) {
    rosterField = storedTeam;
  }
}

console.log(rosterField);

playerCard();

function playerCard() {
  cardList.textContent = "";

  for (i = 0; i < rosterField.length; i++) {
    var playerCard = rosterField[i];
    var newCard = document.createElement("div");
    newCard.className += "card playername";
    newCard.textContent = playerCard;

    newCard.setAttribute("data-index", i);

    cardList.append(newCard);
  }
}

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
