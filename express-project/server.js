const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const app = express()

app.use(bodyParser.json())

app.use(morgan('dev'))

let profile = {
    username: 'Jacco',
    email: '[reducted]',
    password: 'bla'
}

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`);
    next()
})

app.use((req, res, next) => {
    if(req.query.api_key){
        next()
    } else {
        res.status(401). send({"message": "Not Authorized!"})
    }
})

app.get('/', (req, res)=>{
    res.send({"message": "Hello World! I'm Jacco Klouwer"})
})

app.get('/accounts',(req, res, next)=>{
    console.log("accounts inline middleware")
    next(new Error("Oops"))
}, (req, res)=>{
    res.send({"message": "accounts"})
})

app.post('/transactions', (req, res)=>{
    console.log(req.body);
    res.send({"message": "transactions"})
})

app.use((Error, req, res)=>{
    res.status(500).send(Error)
})

app.get("/profile", (req, res) => {
    res.send(profile)
})

app.post("/profile", (req, res) => {
    profile = req.body
    console.log('created', profile)
    res.sendStatus(201)
})

app.put("/profile", (req, res) => {
    Object.assign(profile, req.body)
    console.log('Updated', profile)
    res.sendStatus(204)
})

app.delete("/profile", (req, res) => {
    profile = {}
    console.log('Deleted', profile)
    res.sendStatus(204)
})

app.listen(3000)