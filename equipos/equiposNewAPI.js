const apiKey = "your_personal_key";
const apiHost = "v3.football.api-sports.io";

async function fetchTeams() {
    try {
        const response = await fetch(`https://${apiHost}/teams`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": apiHost,
                "x-rapidapi-key": apiKey
            }
        });
        
        const data = await response.json();
        if (data.response) {
            createTable(data.response);
            saveTeamsToJSON(data.response);
        } else {
            console.error("No teams found.");
        }
    } catch (error) {
        console.error("Error fetching teams:", error);
    }
}

function createTable(teams) {
    const table = document.createElement("table");
    table.innerHTML = `
        <thead>
            <tr>
                <th>Nombre</th>
                <th>País</th>
                <th>Año de Fundación</th>
                <th>Logo</th>
            </tr>
        </thead>
        <tbody>
        ${teams.map(team => `
            <tr>
                <td>${team.team.name}</td>
                <td>${team.team.country}</td>
                <td>${team.team.founded}</td>
                <td><img src="${team.team.logo}" alt="${team.team.name}" width="50"></td>
            </tr>
        `).join('')}
        </tbody>
    `;
    document.body.appendChild(table);
}

function saveTeamsToJSON(teams) {
    const jsonTeams = JSON.stringify(teams, null, 2);
    console.log("Equipos guardados en JSON:", jsonTeams);
}

// Llamada a la función
createTable();
saveTeamsToJSON();