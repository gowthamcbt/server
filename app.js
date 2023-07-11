const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dbConnection = require('./src/db');
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.get('/dictionary', (req, res) => {
    
    dbConnection.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * from dictionary', (err, rows) => {
            connection.release()
            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})


app.post('/dictionary', (req, res) => {

    dbConnection.getConnection((err, connection) => {
        if(err) throw err
        const params = req.body
        connection.query('INSERT INTO dictionary SET ?', params, (err, rows) => {
            connection.release()
            if(!err) {
                res.send(`word has been added.`)
            } else {
                console.log(err)
            }

        })
    })
})

app.get('/gamingwords', (req, res) => {
    
    dbConnection.getConnection((err, connection) => {
        if(err) throw err
        connection.query('SELECT * from words', (err, rows) => {
            connection.release()
            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})


app.post('/gamingwords', (req, res) => {

    dbConnection.getConnection((err, connection) => {
        if(err) throw err
        const params = req.body;
        connection.query('INSERT INTO words SET ?', params, (err, rows) => {
            connection.release()
            if(!err) {
                res.send(`word has been added.`)
            } else {
                console.log(err)
            }

        })
    })
})


app.listen(port, () => console.log(`Listen on port ${port}`))