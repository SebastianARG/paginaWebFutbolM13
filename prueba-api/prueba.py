import http.client

conn = http.client.HTTPSConnection("v3.football.api-sports.io")

headers = {
    'x-rapidapi-host': "v3.football.api-sports.io",
    'x-rapidapi-key': "d33cfa620d8e20f0fd5e91878d7b27d0"
    }

conn.request("GET", "/players/squads?team=33", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
