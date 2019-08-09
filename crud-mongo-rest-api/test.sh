curl -H "Content-Type: application/json" -X POST -d '{"balance": 100, "name":"checking"}'  "http://localhost:3000/accounts" 
curl -H 'Content-Type: application/json' -X PUT -d '{"balance": 200, "name": "savings"}'  "http://localhost:3000/accounts/5d2b35952dbbbc1fc713a50f" 
curl "http://localhost:3000/accounts" 
curl -X DELETE "http://localhost:3000/accounts/5d2b35952dbbbc1fc713a512"