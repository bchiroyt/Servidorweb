const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 8080


app.set('view engine', 'hbs')


hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public3'))



app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'Brandon Chiroy',
        titulo: 'Curso de node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Brandon Chiroy',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Brandon Chiroy',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
})
