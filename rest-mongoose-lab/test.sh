curl -H "Content-Type: application/json" -X POST -d '{"balance": 100, "name":"checking"}'  "http://localhost:3000/accounts" 
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "savings"}' "http://localhost:3000/accounts/5d2cd2ea973eca25fac0da84"
curl "http://localhost:3000/accounts" 
curl -X DELETE "http://localhost:3000/accounts/5d2cceba4d0725240d912cf1"