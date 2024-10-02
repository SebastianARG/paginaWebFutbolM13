// Función para obtener equipos de la API
async function fetchTeams() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/es.1.clubs.json');
        const data = await response.json();
        
        // Mostrar solo 5 equipos
        const equipos = data.clubs.slice(0, 5); 

        const teamList = document.getElementById('team-list');
        teamList.innerHTML = ''; // Limpiar el contenedor

        equipos.forEach(team => {
            // Crear un contenedor para cada equipo
            const teamElement = document.createElement('div');
            teamElement.classList.add('team');
            teamElement.onclick = () => {
                window.location.href = '../equipos/prueba.html';
            };

            // Icono del equipo (logo del equipo)
            const teamIcon = document.createElement('div');
            teamIcon.classList.add('team-icon');

            // Crear un elemento <img> para la imagen del equipo
            const teamImage = document.createElement('img');
            teamImage.src = `imagenes/${team.name}.jpg`; // La imagen se espera en la carpeta "imagenes" con el nombre del equipo
            teamImage.alt = `${team.name} logo`;

            // Añadir la imagen al div del icono del equipo
            teamIcon.appendChild(teamImage);

            // Nombre del equipo
            const teamName = document.createElement('div');
            teamName.classList.add('team-name');
            teamName.innerText = team.name;

            // Añadir el equipo al contenedor
            teamElement.appendChild(teamIcon);
            teamElement.appendChild(teamName);

            teamList.appendChild(teamElement);
        });
    } catch (error) {
        console.error('Error al obtener los equipos:', error);
    }
}

// Ejecutar la función al cargar la página
window.onload = fetchTeams;
