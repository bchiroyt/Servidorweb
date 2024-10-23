/**
 * ----------------------Ejercicio - servir mas de un contenido estatico------------
 * El ejercicio va enfocado en validar contenido estatico a servir en PATH
 * en la carpeta public
 */

const express = require('express');
const app = express();
const port = 8000



//Servir contenido estatico, de la pagina principal http://localhost:8000

app.use(express.static('public'))

//Para servir en la ruta http://localhost:8000/hola-mundo
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
})

//Para servir en cualquier ruta invalida http://localhost:8000/invalida
//__dirname+ path completo absoluto del recurso a desplegar 
app.get('*', (res, req) => {
    res.sendFile(__dirname + '/public/404.html')
})

//Metodo callback para habilitar el servidor web en el puerto 8000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

/**
 * Al ejecutar esta aplicacion es necesario darse cuenta de los que ha
 * cambiado el despliegue de recursos segun se ruta 
 * 
 * Por ejemplo para la perticion http://localhost:808
 * el webser busca en el middleware enfocado en public y busca automaticamente
 * el archivo index.html 
 * 
 * Que hace el web serve con las peticiones http://localhost:8080/hola-mundo y
 * http://localhost:8080/invalida, que tipo de recursos se responde
 * 
 */
