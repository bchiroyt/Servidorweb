/**
 * Ejercicio - Servir un sistio web complejo - parte 1 
 * En este ejercicio se brinda una plantilla de un sitio web completo para que el backend lo pueda 
 * servir cuando al cliente quiera ese recurso.
 * 
 */

/**
 * Para realizar este ejercicio es necesario descagar la plantilla que se encuetra 
 * el area de recursos de la clase actual descomprimirlo y hacer lo siguiente 
 * 1-Agregar los archivos del sitio web a una carpeta en el drectorio raiz llamado public2
 * 2-Agregar un middlwere para que se utilice la carpeta public2
 * 3-EJecutar la aplicacion y analizar lo que esta padando
 * 
 */

const express = require('express')

const app = express()
const port = 8080

//Servi contenido estatico public2 donde esta el contenido templeate 

app.use(express.static('public2'))

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`);
})

/**
 * Ejecutar esta aplicacion con         node app10
 * vitar en el navegador la direeccion http:localhost:8080
 * Por que se despliega el sitio web, respuesta tecnica, caracteristics tiene la URL?
 * Por que no se despliegan las opciones de la pagina "generic" y "elements"?
 * 
 */