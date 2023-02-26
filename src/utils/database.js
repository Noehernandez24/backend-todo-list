// Información para la conexión con la base de datos
//Paso 1, importar sequelize
const {Sequelize} = require('sequelize')
// Paso 2, crear una instancia con sequelize con las credenciales para conectar la base de datos
const db = new Sequelize({
    database: 'todo_crud',
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    password: 'Nameless23',
    dialect: 'postgres'
})

//Paso 3 exportar la base de datos

module.exports = db;