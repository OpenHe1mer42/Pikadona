let score = 0;
let player1Name = '';
let player2Name = '';
let player3Name = '';
let player4Name = '';

    function setScore(value) {
      score = value;
      console.log("Score set to: " + score);

      // Remove selected class from all buttons
      var buttons = document.getElementsByClassName("button");
      for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove("selected");
      }

      // Add selected class to the clicked button
      var clickedButton = document.getElementById("button" + value);
      clickedButton.classList.add("selected");
  }
  
//this puts the inputed text into a variable 
  function updatePlayerNames() {
    if (document.getElementById('player')) {
      player1Name = document.getElementById('player').value;
      console.log("Player 1 name: " + player1Name);
     
  }
  if (document.getElementById('player2')) {
      player2Name = document.getElementById('player2').value;
      console.log("Player 2 name: " + player2Name);
  }
  if (document.getElementById('player3')) {
      player3Name = document.getElementById('player3').value;
      console.log("Player 3 name: " + player3Name);
  }
  if (document.getElementById('player4')) {
      player4Name = document.getElementById('player4').value;
      console.log("Player 4 name: " + player4Name);
  }

  startgame()
}



//this below makes the player class vanish when x is pressed
 // Function to update the visibility of the "Add Player" button
 function updateAddPlayerButtonVisibility() {
   var playerCount = document.querySelectorAll('.extra_players').length;
   var addPlayerButton = document.getElementById('add-player-btn');

   if (playerCount >= 3) {
     addPlayerButton.style.display = 'none';
   } else {
     addPlayerButton.style.display = 'flex'; // Change to block to maintain the button's default display
   }

   // Update player numbering
   var players = document.querySelectorAll('.extra_players input[name="player"]');
   players.forEach(function(player, index) {
     player.placeholder = 'Player ' + (index + 2);
     player.id = 'player' + (index + 2);
   });
 }

 // Function to remove a player
 function removePlayer(event) {
   var playerDiv = event.target.closest('.extra_players');
   playerDiv.remove();
   updateAddPlayerButtonVisibility();
 }

 // Function to add a new player
 function addPlayer() {
   var playerCount = document.querySelectorAll('.extra_players').length;
  
   if (playerCount >= 3) {
     alert('Maximum number of players reached!');
     return;
   }

   var newPlayerDiv = document.createElement('div');
   newPlayerDiv.classList.add('extra_players');

   var newPlayerInput = document.createElement('input');
   newPlayerInput.classList.add('input2');
   newPlayerInput.type = 'text';
   newPlayerInput.name = 'player';
   newPlayerInput.placeholder = 'Player ' + (playerCount + 2);
   newPlayerInput.value = '';

   var xContainerDiv = document.createElement('div');
   xContainerDiv.classList.add('x-container');

   var xDiv = document.createElement('div');
   xDiv.classList.add('x');
   xDiv.addEventListener('click', removePlayer);

   xContainerDiv.appendChild(xDiv);

   newPlayerDiv.appendChild(newPlayerInput);
   newPlayerDiv.appendChild(xContainerDiv);

   document.getElementById('players-container').appendChild(newPlayerDiv);

   updateAddPlayerButtonVisibility();
 }

 // Add event listener to the "Add Player" button
 document.getElementById('add-player-btn').addEventListener('click', addPlayer);

 // Initial update of the visibility of the "Add Player" button
 updateAddPlayerButtonVisibility();
 document.addEventListener('DOMContentLoaded', function() {
   addPlayer();
  
});

document.getElementById('startGameButton').addEventListener('click', updatePlayerNames);
//start game changes the ui from the menue to the scoring system done in the same html

function startgame() {
  if (score>0){
  var outline = document.getElementById('outline');
  var ribbonContainer = document.getElementById('ribonicontainer');
  var container = document.getElementById('container');
  
  // Add a CSS transition for a smooth fade-out effect for the outline
  outline.style.transition = 'opacity 0.5s';
  
  // Fade out the outline
  outline.style.opacity = 0;

  // After a short delay, hide the outline completely and fade in ribboncontainer and container
  setTimeout(function() {
      outline.style.display = 'none';

      // Set ribbonContainer and container to display: flex
      ribbonContainer.style.display = 'flex';
      container.style.display = 'flex';

      // Add CSS transitions for a smooth fade-in effect for ribbonContainer and container
      ribbonContainer.style.transition = 'opacity 0.5s';
      container.style.transition = 'opacity 0.5s';
      
      // Trigger fade-in by setting opacity to 1 after a slight delay
      setTimeout(function() {
          ribbonContainer.style.opacity = 1;
          container.style.opacity = 1;
      }, 150); 
  }, 150); // 500 milliseconds delay for the outline's fade-out transition
  var elements = document.querySelectorAll(".scorepoint");
  document.getElementById("Player1").innerHTML = player1Name || "Player 1";
  document.getElementById("Player2").innerHTML = player2Name || "Player 2";
  document.getElementById("Player3").innerHTML = player3Name || "Player 3";
  document.getElementById("Player4").innerHTML = player4Name || "Player 4";

  // Loop through each element and update its innerHTML
  elements.forEach(function(element) {
      element.innerHTML = score;
  });
  var playerCount = document.querySelectorAll('.extra_players').length;

  
  if(playerCount <=0){
 
    document.getElementById("playercard1").style.display = "block";
    document.getElementById("playercard2").style.display = "none";
    document.getElementById("playercard3").style.display = "none";
    document.getElementById("playercard4").style.display = "none";
   
  }else if(playerCount <=1){
   
    document.getElementById("playercard1").style.display = "block";
    document.getElementById("playercard2").style.display = "block";
    document.getElementById("playercard3").style.display = "none";
    document.getElementById("playercard4").style.display = "none";
    
  }else if(playerCount <= 2){
  
    document.getElementById("playercard1").style.display = "block";
    document.getElementById("playercard2").style.display = "block";
    document.getElementById("playercard3").style.display = "block";
    document.getElementById("playercard4").style.display = "none";

  }else if(playerCount <= 3){
    
    document.getElementById("playercard1").style.display = "block";
    document.getElementById("playercard2").style.display = "block";
    document.getElementById("playercard3").style.display = "block";
    document.getElementById("playercard4").style.display = "block";
  
  }
  



document.getElementById('menu').addEventListener('click', backtomenu);



function backtomenu() {
  let currentPlayer = 1;

  var outline = document.getElementById('outline');
  var ribbonContainer = document.getElementById('ribonicontainer');
  var container = document.getElementById('container');

  // Add a CSS transition for a smooth fade-out effect for the outline
  ribbonContainer.style.transition = 'opacity 0.5s';
  container.style.transition = 'opacity 0.5s';

  // Fade out the outline
  ribbonContainer.style.opacity = 0;
  container.style.opacity = 0;

  // After a short delay, hide the outline completely and fade in ribboncontainer and container
  setTimeout(function () {
    ribbonContainer.style.display = 'none';
    container.style.display = 'none';

    // Set ribbonContainer and container to display: flex
    outline.style.display = 'block';

    // Add CSS transitions for a smooth fade-in effect for ribbonContainer and container
    outline.style.transition = 'opacity 0.5s';

    setTimeout(function () {
      outline.style.opacity = 1;
    }, 150);
  }, 150); // 500 milliseconds delay for the outline's fade-out transition
}


//this below is the score system
document.getElementById('addscore').addEventListener('click', addscore);

function addscore() {
  let scoreInput = document.getElementById('scoreinput').value;
  updatePlayerScoreAndTurns(scoreInput);
}
let currentPlayer = 1;
let remainingTurns = 3;
let newPlayerCircles = document.querySelectorAll(`#playercard${currentPlayer} .circleouter`);
    newPlayerCircles.forEach(circle => circle.classList.add('filled'));

function updatePlayerScoreAndTurns(scoreInput) {
  
  // Get the current player's score element and circles
  let currentPlayerScore = document.getElementById(`score${currentPlayer}`);
  let currentPlayerCircles = document.querySelectorAll(`#playercard${currentPlayer} .circleouter`);
  let currentPlayercard = document.querySelectorAll(`#playercard${currentPlayer}`);
  var playerCount = document.querySelectorAll('.extra_players').length;

  // Check if the input is a valid number
  let score = parseInt(scoreInput);
  if (isNaN(score)) {
    alert("Please enter a valid number.");
    return;
  }

  // Update the score
  score = Math.max(score, 0); // Ensure score is non-negative
  score = Math.min(score, parseInt(currentPlayerScore.innerText)); // Ensure score doesn't exceed current score
  currentPlayerScore.innerText = parseInt(currentPlayerScore.innerText) - score;
  

  // Remove filled class from circles based on remaining turns

  remainingTurns--;
  
  if (remainingTurns === 2) {
    // Remove filled class from one of the outer circles
    currentPlayerCircles[2].classList.remove('filled');
  } else if (remainingTurns === 1) {
    // Remove filled class from the second outer circle
    currentPlayerCircles[1].classList.remove('filled');
  }else if (remainingTurns === 0){
    currentPlayerCircles[0].classList.remove('filled');
  }
  

  // Check if the current player has finished their turns
  if (remainingTurns === 0) {
    // Move to the next player
   
    currentPlayer = (currentPlayer % (playerCount + 1)) + 1;
    updateActivePlayer();
    console.log("currentPlayer:" + currentPlayer);
   
    remainingTurns = 3;
    
    // Highlight the circles for the new current player
    let newPlayerCircles = document.querySelectorAll(`#playercard${currentPlayer} .circleouter`);
    newPlayerCircles.forEach(circle => circle.classList.add('filled'));
  }

  // Check if the game is over (current player's score reaches 0)
  if (parseInt(currentPlayerScore.innerText) === 0) {
    alert(`Congratulations! ${document.getElementById(`Player${currentPlayer}`).innerText} won!`);
    // You may want to reset the game here
  }
}
function updateActivePlayer() {
  // Remove "active" class from all player cards
  document.querySelectorAll('.playeroutline').forEach(card => card.classList.remove('active'));

  // Add "active" class to the current player's card
  document.getElementById(`playercard${currentPlayer}`).classList.add('active');
}

}else{
  alert("caktoje lojen kali")
}
}
