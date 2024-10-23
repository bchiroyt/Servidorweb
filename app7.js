/**
 * Ejercicio - Mejorando el codigo---------------
 * 
 * se agrego un callback para que agregara el mensaje en consola de escuchando puerto
 * para eso se agrego a la varible port = 8080
 * se cambiaron las funciones de las rutas, por funciones tipo flecha
 * 
 */

const express = require('express');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta');
})

app.get('*', (req, res) => {
    res.send('404 | Page not found');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


/**
 * Al ajecutar esta aplicacion probar las siguientes rutas validas
 * http://localhost:8080/
 * http://localhost:8080/hola-mundo
 * 
 * Luego probar una ruta invalida por ejemplo
 * http://localhost:8080/nueva-ruta
 */