curl "http://localhost:3000/profile"
sleep 1
curl -H "Content-Type: application/json" -X POST -d '{"id": 1, "username": "piet","email": "[reducted]","url": "http://piet.co", "junk": "Bla"}' "http://localhost:3000/profile"
sleep 1
curl -H "Content-Type: application/json" -X PUT -d '{"id": 1, "username": "klaas","email": "[reducted]","url": "http://klaas.co", "junk": "Bla"}' "http://localhost:3000/profile/1"
sleep 1
curl "http://localhost:3000/profile?id=0"
sleep 1
curl -X DELETE "http://localhost:3000/profile/0"