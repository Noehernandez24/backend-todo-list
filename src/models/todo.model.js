// CREANDO LA TABALA TODO
const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Todo = db.define('todo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = Todo