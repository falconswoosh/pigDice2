// Business Logic
var playerOne =  new Player("1");
var playerTwo = new Player("2");

function Player (playerID) {
  this.playerID = playerID;
  // this.playerID = [1,2];
  this.roundScore = 0;
  this.totalScore = 0;
}
function Game (playerID) {
  this.players = [];
  this.round = 0;
  this.currentPlayer = 0
  this.currentRoll = 0;
  this.scoreToWin = 100;
}

Player.prototype.randomNumber = function () {
  this.currentRoll = Math.floor(Math.random() * (6 - 1) + 1);
  this.roundScore = this.roundScore + this.currentRoll;
  return this.currentRoll;
};

Player.prototype.endTurn = function () {
if (this.currentRoll === 1) {
  this.roundScore = 0;
  console.log("Your turn is done!" + this.currentRoll);
}
};

Player.prototype.scores = function () {
this.roundScore = this.roundScore + this.currentRoll
return
}

Player.prototype.hold = function () {
  this.totalScore = this.totalScore + this.roundScore;
  console.log(Player.playerID);
  if (Player.playerID === 1) {
    alert("hi");
    new Player("1");
    this.roundScore = 0;
  } else if (Player.playerID === 2) {
    new Player("2");
    playerTwo.randomNumber();
    playerTwo.endTurn();
}
}

Game.prototype.win = function () {

  if (this.totalScore === this.scoreToWin) {
    alert("You win!");

  }
}



//User Interface
$(document).ready(function() {
  var game = new Game();
  // var playerOne =  new Player("1");
  game.players.push(new Player(0));
  game.players.push(new Player(1));

  // var playerTwo = new Player("2");
  $("#roll").click(function(event) {
    event.preventDefault();

  playerOne.randomNumber();
  playerOne.endTurn();
  playerTwo.randomNumber();
  playerTwo.endTurn();
  // if (game.) {
  //   alert("1st If statement");
  //   playerOne.randomNumber();
  //   playerOne.endTurn();
  // } else if ((game.players === 1) && (Player.playerID === 2))  {
  //   alert("1st If statement");
  //   playerTwo.randomNumber();
  //   playerTwo.endTurn();
  // }


  $(".row").show();
  $(".outputOne").append("<li>"+playerOne.currentRoll+"</li>");
  $(".outputTwo").append("<li>"+playerTwo.currentRoll+"</li>");
  $("#roundScore1").text(playerOne.roundScore);
  $("#totalScore1").text(playerOne.totalScore);
  $("#roundScore2").text(playerTwo.roundScore);
  $("#totalScore2").text(playerTwo.totalScore);

  });

  $("#hold").click(function() {
    var id = $(this).attr("id");
    // alert("Your clicked the " + id + " button");
    $(".row").show();
      if (Player.playerID === 1) {
        playerOne.hold();
        $(".outputOne").append("<li>"+playerOne.currentRoll+"</li>");
        $("#roundScore1").text(playerOne.roundScore);
        $("#totalScore1").text(playerOne.totalScore);
      } else if (Player.playerID === 2) {
        playerTwo.hold();
        $(".outputOne").append("<li>"+playerOne.currentRoll+"</li>");
        $("#roundScore2").text(playerTwo.roundScore);
        $("#totalScore2").text(playerTwo.totalScore);
      }
  });
});
