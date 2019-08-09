const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { check, validationResult } = require("express-validator/check")
const { matchedData, sanitize } = require('express-validator/filter')

app.use(bodyParser.json())

let profile = [{
    id: 0,
    username: 'jacco',
    email: '[reducted]',
    url: 'http://jacco.co'
}]

app.get('/profile', [ check('id').isInt() ], (req, res) => {
    if (req.query.id) return res.send(profile[req.query.id])
    return res.send(profile)
})

app.post('/profile', [
        check('email')
            .isEmail()
            .withMessage("Must be an email!")
            .trim()
            .normalizeEmail()
            .custom(value =>{
                return findUserByEmail(value).then(user => {
                    throw new Error("This email is allready in Use!")
                })
            }),
        check('url')
            .isURL()
            .withMessage("Must be an URL")
            .trim(),
        check("username")
            .trim()
    ], (req, res) => {
    if(!req.body.username.trim() || !req.body.email.trim() || !req.body.url.trim()) return res.sendStatus(400)
    let obj = {
        id: profile.length,
        username: req.body.username,
        email: req.body.email,
        url: req.body.url
    }
    profile.push(obj)
    console.log('created', profile)
    res.sendStatus(201)
})

app.put("/profile/:id", (req, res) => {
    let obj = {
        username: req.body.username.trim(),
        email: req.body.email.trim(),
        url: req.body.url.trim()
    }
    Object.assign(profile[req.params.id], obj)
    console.log('Updated', profile[req.params.id])
    res.sendStatus(204)
})

app.delete("/profile/:id", (req, res) => {
    profile.splice(req.params.id, 1)
    console.log('Deleted', profile)
    res.sendStatus(204)
})

app.listen(3000)