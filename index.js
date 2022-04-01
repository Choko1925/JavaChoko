const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/spanish', function (req, res) {
  res.send('Hola Mundo')
})

app.get('/French', function (req, res) {
    res.send('salut monde')
})

app.get('/Serbian', function (req, res) {
    res.send('Здраво Свете')
})

app.get('/Portugues', function (req, res) {
        res.send('Olá mundo')
})

  app.listen(3000)
