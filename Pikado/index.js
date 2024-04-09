let score = 0;
let player1Name = 'lopa 1';
let player2Name = 'lopa 2';

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
   player1Name = document.getElementById('player').value;
   player2Name = document.getElementById('player2').value;

   console.log("Player 1 name: " + player1Name);
   console.log("Player 2 name: " + player2Name);
}

document.getElementById('startGameButton').addEventListener('click', updatePlayerNames);

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
 