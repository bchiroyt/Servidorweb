/**
 * ----------------------Ejercicio - servir contenido estatico------------
 * El ejercicio va enfocado a sustituir la impresion de mensajes en las rutas por
 * contenido estatico en este caso paginas web
 */

const express = require('express');
const app = express();
const port = 8000

/**
 * Se creo carpeta public y dentro index.html
 * se creara un middlware para habilitar la ruta index.html  
 */

/**
 * Para servir contenido estatico debemos indicarle a la aplicacion cual es 
 * la carpeta dinde se almacenara las pagnas web, por un middlware en este 
 * caso el middleware app.use(express.static('public'))

*/

app.use(express.static('public')) //Middlware para la carpeta publica
//Este es un PATH estatico

//app.get('/', (req. res) => {
//  res.send('home page')    
// }) estas lineas nunca se iban a ejecutar por el middleware

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
})

app.get('*', (res, req) => {
    res.send('404| Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})