import http.client
import time

# Configura la conexión y los headers
conn = http.client.HTTPSConnection("v3.football.api-sports.io")
headers = {
    'x-rapidapi-host': "v3.football.api-sports.io",
    'x-rapidapi-key': "a75cdad0304f08a5674c82e73f83878c"
}

# Número de solicitudes
num_requests = 30
cont = 1

for _ in range(num_requests):
    conn.request("GET", f"/players/profiles?player={cont}", headers=headers)
    cont+=1
    res = conn.getresponse()
    data = res.read()
    print(data.decode("utf-8"))
    
    # Espera 6 segundos para hacer un total de 10 solicitudes por minuto
    time.sleep(6)

# Cierra la conexión
conn.close()