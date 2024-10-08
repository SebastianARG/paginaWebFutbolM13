const apiUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/es.1.json';

async function obtenerResultados20() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const resultados = data.matches.slice(-20); // Tomamos los últimos 20 partidos
        mostrarResultados(resultados);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}
async function obtenerResultados() {
  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const resultados = data.matches.slice(-2); // Tomamos los últimos 2 partidos para el main
      mostrarResultados(resultados);
  } catch (error) {
      console.error('Error al obtener los datos:', error);
  }
}

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
            <div class="score-box">
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

obtenerResultados20();
