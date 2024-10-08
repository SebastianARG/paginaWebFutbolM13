// Función para obtener los últimos dos resultados
async function obtenerResultados() {
    try {
        const apiUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/es.1.json';  // Cambia esta URL a la de tu API
        const response = await fetch(apiUrl);
        const data = await response.json();
        const resultados = data.matches.slice(-2); // Últimos 2 partidos

        mostrarResultados(resultados);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

// Función para mostrar los resultados en la interfaz
function mostrarResultados(resultados) {
    const container = document.getElementById('resultados-container');
    container.innerHTML = ''; // Limpiar el contenedor

    resultados.forEach(partido => {
        const equipoLocal = partido.team1;
        const equipoVisitante = partido.team2;
        const golesLocal = partido.score.ft[0];
        const golesVisitante = partido.score.ft[1];
        const fechaPartido = new Date(partido.date).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        // Determinar el color dependiendo del resultado
        let claseColorLocal, claseColorVisitante;
        if (golesLocal > golesVisitante) {
            claseColorLocal = 'green';
            claseColorVisitante = 'red';
        } else if (golesLocal < golesVisitante) {
            claseColorLocal = 'red';
            claseColorVisitante = 'green';
        } else {
            claseColorLocal = claseColorVisitante = 'gray'; // Empate en gris oscuro
        }

        // Crear el HTML dinámico para el resultado del partido
        const scoreBox = `
            <div class="score-box" onclick="location.href='../resultados/resultados.html'">
                <div class="score-container">
                    <span>${equipoLocal}</span>
                    <span class="score ${claseColorLocal}">${golesLocal}</span>
                    <span class="score ${claseColorVisitante}">${golesVisitante}</span>
                    <span>${equipoVisitante}</span>
                </div>
                <div class="date">Fecha: ${fechaPartido}</div>
            </div>
        `;
        container.innerHTML += scoreBox;
    });
}

// Ejecutar la función al cargar la página
obtenerResultados()
//window.onload = obtenerResultados;
