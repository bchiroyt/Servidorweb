
//validamos la ruta http://localhost:8080/hola-mundo

const express = require('express') //Requerimos el paquete EXPRESS

const app = express()

app.get('/', function (req, res) {
    res.send('Home Page')
    /**
     * Aca se esta enviado un mensaje directo, pero podriamos enviar
     * un sitio web, una opcion del sistema, etc.
     */
})


app.get('/hola-mundo', function (req, res){
    res.send('Hola Mundo en su respectiva ruta')
})


app.listen(8080);