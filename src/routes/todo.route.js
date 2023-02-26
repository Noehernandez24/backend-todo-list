const {Router} = require('express')
const route = Router()
const Todo = require('../models/todo.model')

route.get('/api/v1/todos', async (req, res) => {
    try {
        const todoList = await Todo.findAll({
            attributes: ['id', 'title', 'description', 'isComplete']
        })
        res.json(todoList)
    } catch (error) {
        res.status(400).json(error)
    }
})

route.post('/api/v1/todos', async (req, res) => {
    try {
        const newTodo = req.body
        const result = await Todo.create(newTodo)
        res.status(201).send(result)
    } catch (error) {
        res.status(400).json(error)
    }
})

route.put('/api/v1/todos/:id', async (req, res) => {
   try {
    const {id} = req.params
    const data = req.body
    await Todo.update(data, {
        where: {id}
    })
    res.status(204).send()
   } catch (error) {
    res.status(400).json(error)
   }
})

route.delete('/api/v1/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        await Todo.destroy({
            where: {id}
        })
        res.status(204).send()  
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = route