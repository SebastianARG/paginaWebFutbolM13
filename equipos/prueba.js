// Función para obtener equipos y jugadores de la API
async function fetchTeams() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/es.1.clubs.json');
        const data = await response.json();

        const teamList = document.getElementById('team-list');

        data.clubs.forEach(team => {
            // Crear un contenedor para cada equipo
            const teamElement = document.createElement('div');
            teamElement.classList.add('team');

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
            
            // Lista de jugadores (placeholder, ya que la API no provee jugadores directamente)
            const playersElement = document.createElement('div');
            playersElement.classList.add('players');
            playersElement.innerText = 'Jugadores: No disponibles en la API actual';

            // Agregar evento para mostrar/ocultar jugadores
            teamName.addEventListener('click', () => {
                playersElement.classList.toggle('show');
            });

            // Añadir el equipo y jugadores al contenedor
            teamElement.appendChild(teamIcon);
            teamElement.appendChild(teamName);
            teamElement.appendChild(playersElement);

            teamList.appendChild(teamElement);
        });
    } catch (error) {
        console.error('Error fetching teams:', error);
    }
}

// Ejecutar la función al cargar la página
window.onload = fetchTeams;
