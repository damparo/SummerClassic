var addName = document.querySelector("#roster-creation");
var rosterList = document.querySelector("#roster-list");
var rosterForm = document.querySelector("#roster-form");
var saveRoster = document.querySelector("#save");
var randomBtn = document.querySelector("#randomteams");
var teamOne = document.querySelector("team1");
var teamOneList = document.querySelector("#teamone-list");
var teamTwo = document.querySelector("team2");
var teamTwoList = document.querySelector("#teamtwo-list");
var extraPlayer = document.querySelector("#freeagent");
var lonePlayer = document.querySelector("#loneplayer");
var playerCount = document.querySelector("#player-count");

var rosterField = [];

savedTeam();
manyPlayers();

rosterForm.addEventListener("submit", function (e) {
  event.preventDefault();
  var rosterText = addName.value.trim().toLowerCase();

  rosterText.charAt(0).toUpperCase();
  rosterText.slice(1);

  var nameRoster = rosterText.charAt(0).toUpperCase() + rosterText.slice(1);

  // rosterText.toLowerCase();
  if (nameRoster === "") {
    return;
  }
  rosterField.push(nameRoster);
  addName.value = "";
  lonePlayer.textContent = "";
  manyPlayers();
});

rosterList.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    rosterField.splice(index, 1);
    manyPlayers();
  }
});


//  its the data-index, hypo - when i delete one above, it doesn't update the roster and it deletes everything with it
// I need a function that upates the data index each time a player is added, each time a player is deleted




function manyPlayers() {
  rosterList.textContent = "";
  for (i = 0; i < rosterField.length; i++) {
    var playerBox = rosterField[i];
    var newLi = document.createElement("li");
    newLi.textContent = playerBox;
    newLi.setAttribute("data-index", i);
    var nameBtn = document.createElement("button");
    nameBtn.className = "btn";
    nameBtn.textContent = "x";
    nameBtn.style.color = "red";
    newLi.appendChild(nameBtn);
    rosterList.append(newLi);
    localStorage.setItem("team", JSON.stringify(rosterField));
    0;
  }
  playerCount.textContent = rosterField.length;
}




function savedTeam() {
  var storedTeam = JSON.parse(localStorage.getItem("team"));
  if (storedTeam !== null) {
    rosterField = storedTeam;
  }
  manyPlayers();
}

// var newTeam = [];

randomBtn.addEventListener("click", function () {
  var freeAgent = [];
  var oneTeam = rosterField.concat(freeAgent);
  // console.log(oneTeam);
  
  function mix() {
    for (let i = oneTeam.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = oneTeam[i];
      oneTeam[i] = oneTeam[j];
      oneTeam[j] = temp;
    }
    return oneTeam;
  }

  mix();
  






  teamOneList.textContent = "";
  teamTwoList.textContent = "";
  lonePlayer.textContent = "";
  // console.log(oneTeam);
  // console.log(oneTeam.length);


if (oneTeam.length % 2 !== 0) {
    // lonePlayer.textContent = "";
    
    // var freeAgent = [];
    var hmm = oneTeam.pop();
    freeAgent.push(hmm);
    lonePlayer.append(freeAgent);
    // console.log(oneTeam);
   

    var twoTeams = oneTeam.length * 0.5;
    var aTeam = oneTeam.slice(0, twoTeams);
    // console.log(aTeam);

    var bTeam = oneTeam.slice(twoTeams);
    // console.log(bTeam);


    

  } else {
    // lonePlayer.textContent = "";
    var twoTeams = oneTeam.length * 0.5;
    var aTeam = oneTeam.slice(0, twoTeams);

    // console.log(aTeam);

    var bTeam = oneTeam.slice(twoTeams);
    // console.log(bTeam);

  }
//   lonePlayer.textContent = "";

  for (i = 0; i < aTeam.length; i++) {
    var playerBox = aTeam[i];
    var newLi = document.createElement("li");
    newLi.textContent = playerBox;
    teamOneList.append(newLi);
  }


  for (i = 0; i < bTeam.length; i++) {
    var playerBox = bTeam[i];
    var newLi = document.createElement("li");
    newLi.textContent = playerBox;
    teamTwoList.append(newLi);
  }

});



// function mix() {
//   for (let i = rosterField.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = rosterField[i];
//     rosterField[i] = rosterField[j];
//     rosterField[j] = temp;
//   }
//   return rosterField;
// }

