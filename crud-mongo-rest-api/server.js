const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const mongodb= require('mongodb')
const bodyParser = require('body-parser')


const url = 'mongodb://localhost:27017'
let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

mongodb.MongoClient.connect(url, {useNewUrlParser: true}, (error, client) => {
    if (error) return process.exit(1)
    var db = client.db("edx-course-db")

    app.get('/accounts', (req, res, next) => {
        db.collection('accounts')
            .find({}, {sort: {_id: -1}})
            .toArray((error, accounts) => {
            if (error) return next(error)
            res.status(200).send(accounts)
        })
    })

    app.post('/accounts', (req, res, next) => {
        let newAccount = req.body
        db.collection('accounts').insert(newAccount, (error, results) => {
            if (error) return next(error)
            res.status(201).send(results)
        })
    })

    app.put('/accounts/:id', (req, res, next) => {
        db.collection('accounts')
            .updateOne({_id: mongodb.ObjectID(req.params.id)}, 
            {$set: req.body}, 
            (error, results) => {
                if (error) return next(error)
                res.status(200).send(results)
            }
        )
    })

    app.delete('/accounts/:id', (req, res, next) => {
        db.collection('accounts')
            .deleteOne({_id: mongodb.ObjectID(req.params.id)}, (error, results) => {
            if (error) return next(error)
            res.status(204).send(results)
        })
    })

    app.listen(3000)
})