const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public3'))

// Enviando argumentos a home3 
app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'Brandon Chiroy',
        titulo: 'Curso de node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', { 
        nombre: 'Brandon Chiroy',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', { 
        nombre: 'Brandon Chiroy',
        titulo: 'Curso de node'
    })
})

// Eliminar las siguientes líneas para evitar conflictos
// app.get ('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public3/generic.html')
// })

// app.get ('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public3/elements.html')
// })

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})