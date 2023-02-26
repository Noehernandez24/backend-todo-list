const db = require('./utils/database') // Importando base de datos
const Todo = require('./models/todo.model') // Importando tabla / modelo
const cors = require('cors')
const todoRoute = require('./routes/todo.route')
// Inicializando express
const express = require('express');
const app = express()
const PORT = 8000
Todo

app.use(cors()) // aceptar peticiones de todo el mundo
app.use(express.json())
app.use(todoRoute)

// Verificar si la base de datos esta bien
db.authenticate()
.then(() => console.log('Base de datos OK'))
.catch(error => console.log(error))

// Sincronizar base de datos
db.sync()
.then(() => console.log('Base de datos sincronizada'))
.catch(error => console.log(error))


app.listen(PORT,() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})