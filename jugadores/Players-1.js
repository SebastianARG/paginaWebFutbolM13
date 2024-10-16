fetch('jugadores.json')
  .then(response => response.json())
  .then(data => {
    const jugadores = data.players; // Extraer jugadores de cada objeto
    const listaJugadores = document.getElementById('playersList');

    jugadores.forEach(jugador => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${jugador.player.photo}" alt="${jugador.player.name}">
        <div class="jugador-info">
          <h2>${jugador.player.name}</h2>
          <p>Edad: ${jugador.player.age}</p>
          <p>Nacionalidad: ${jugador.player.nationality}</p>
          <p>Posición: ${jugador.player.position}</p>
        </div>
      `;
      listaJugadores.appendChild(li);
    });
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
