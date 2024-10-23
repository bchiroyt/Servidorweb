const express = require('express')
const app = express()
const port = 8080


app.set('view engine', 'hbs')


app.use(express.static('public3'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public3/generic.html')
})

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public3/elements.html')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public3/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})