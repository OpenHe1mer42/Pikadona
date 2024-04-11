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
  var elements = document.querySelectorAll("#score");
  document.getElementById("Player1").innerHTML = player1Name || "Player 1";
  document.getElementById("Player2").innerHTML = player2Name || "Player 2";
  document.getElementById("Player3").innerHTML = player3Name || "Player 3";
  document.getElementById("Player4").innerHTML = player4Name || "Player 4";

  // Loop through each element and update its innerHTML
  elements.forEach(function(element) {
      element.innerHTML = score;
  });
 
  
}


document.getElementById('menu').addEventListener('click', backtomenu);

function backtomenu() {
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
  setTimeout(function() {
    ribbonContainer.style.display = 'none';
    container.style.display = 'none';

      // Set ribbonContainer and container to display: flex
      outline.style.display = 'block';
      

      // Add CSS transitions for a smooth fade-in effect for ribbonContainer and container
      outline.style.transition = 'opacity 0.5s';
  
      setTimeout(function() {
         
          outline.style.opacity = 1;
      }, 150); 
  }, 150); // 500 milliseconds delay for the outline's fade-out transition
}
