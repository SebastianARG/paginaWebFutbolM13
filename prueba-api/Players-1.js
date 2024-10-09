// Function to fetch player data from the API
function fetchPlayers() {
    const apiKey = 'd33cfa620d8e20f0fd5e91878d7b27d0'; // Replace with your actual API key
  
    fetch("https://v3.football.api-sports.io/players", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apiKey
      }
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      if (data.errors && data.errors.length > 0) {
        console.error("Error fetching players:", data.errors);
        return;
      }
  
      const players = data.response;
      console.log("Fetched Players:", players); // Log fetched players for debugging
  
      createPlayerList(players); // Call function to create the player list
    })
    .catch(err => console.error("Error fetching players:", err));
  }
  
  // Function to create the player list dynamically
  function createPlayerList(players) {
    const playerList = document.getElementById("playerList"); // Assuming you have an element with id="playerList"
  
    players.forEach(player => {
      const playerItem = document.createElement("li");
      playerItem.classList.add("player-item"); // Add a CSS class for styling
  
      const playerInfo = `
        <h2>${player.player.name}</h2>
        <p>Age: ${player.player.age}</p>
        <p>Nationality: ${player.player.nationality}</p>
        <img src="${player.player.photo}" alt="${player.player.name} Photo">
      `;
      playerItem.innerHTML = playerInfo;
  
      const statisticsSection = document.createElement("section");
      statisticsSection.classList.add("player-stats"); // Add a CSS class for styling
  
      player.statistics.forEach(stat => {
        const statInfo = `
          <h3>${stat.team.name} - ${stat.league.name} (${stat.league.country})</h3>
          <p>Goals: ${stat.goals.total}</p>
          <p>Assists: ${stat.goals.assists}</p>
        `;
        statisticsSection.innerHTML += statInfo;
      });
  
      playerItem.appendChild(statisticsSection); // Add statistics section to player item
      playerList.appendChild(playerItem);       // Add player item to the list
    });
  }
  
  // Call the fetchPlayers function to initiate the process
  fetchPlayers();