// Función para generar la tabla
function generarTabla(jugadores) {
  const tabla = document.getElementById('playersTable').getElementsByTagName('tbody')[0];

  jugadores.forEach(jugador => {
      const fila = tabla.insertRow();

      const celdaNombre = fila.insertCell(0);
      const celdaEdad = fila.insertCell(1);
      const celdaNacionalidad = fila.insertCell(2);
      const celdaPosicion = fila.insertCell(3);

      celdaNombre.textContent = jugador.player.name;
      celdaEdad.textContent = jugador.player.age;
      celdaNacionalidad.textContent = jugador.player.nationality;
      celdaPosicion.textContent = jugador.player.position;
  });
}

// Leer el archivo JSON y generar la tabla
fetch('jugadores.json')
  .then(response => response.json())
  .then(data => {
      const jugadores = data.map(item => item.response[0]); // Extraer jugadores de cada objeto
      generarTabla(jugadores);
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
