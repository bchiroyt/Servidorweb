// ----------------------Ejercicio - manejo de rutas invalidades-----------

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Home Page');
})

app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta');
})

//validacion para cualquier ruta que no este definida
//localhost:8080/ruta-no-definida

app.get('*', function (req, res) {
    res.send('404 | Page not found');
})

app.listen(8080);


/**
 * Al ajecutar esta aplicacion probar las siguientes rutas validas
 * http://localhost:8080/
 * http://localhost:8080/hola-mundo
 * 
 * luego probar una ruta invalida por ejemplo
 * http://localhost:8080/nueva-ruta
 */
 