// Simulando datos de jugadores
const players = [
    {
        name: 'Lionel Messi',
        goals: 700,
        assists: 300,
        matches: 850,
        team: 'Inter Miami'
    },
    {
        name: 'Cristiano Ronaldo',
        goals: 800,
        assists: 250,
        matches: 900,
        team: 'Al Nassr'
    },
    {
        name: 'Neymar Jr',
        goals: 400,
        assists: 200,
        matches: 500,
        team: 'Al Hilal'
    },
    {
        name: 'Kylian Mbappé',
        goals: 300,
        assists: 100,
        matches: 350,
        team: 'Paris Saint-Germain'
    }
];

// Función para crear los elementos de jugadores y sus estadísticas
function createPlayerElement(player) {
    const container = document.createElement('div');
    container.className = 'player-container';
    container.onclick = () => {
        window.location.href = '../jugadores/jugadores.html';
    };

    const playerNameDiv = document.createElement('div');
    playerNameDiv.className = 'player-name';
    playerNameDiv.innerText = player.name;

    const statsBox = document.createElement('div');
    statsBox.className = 'stats-box';

    const statsTitle = document.createElement('h2');
    statsTitle.innerText = 'Estadísticas';

    const statsContent = document.createElement('p');
    statsContent.innerHTML = `
        Goles: ${player.goals}<br>
        Asistencias: ${player.assists}<br>
        Partidos: ${player.matches}<br>
        Equipo: ${player.team}
    `;

    statsBox.appendChild(statsTitle);
    statsBox.appendChild(statsContent);

    container.appendChild(playerNameDiv);
    container.appendChild(statsBox);

    return container;
}

// Insertar los jugadores en la página
function displayPlayers(players) {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = ''; // Limpiar el contenedor

    players.forEach(player => {
        const playerElement = createPlayerElement(player);
        playerList.appendChild(playerElement);
    });
}

// Ejecutar la función para mostrar jugadores
window.onload = () => displayPlayers(players);
