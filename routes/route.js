const express = require('express')
const route = express.Router()
const controller = require('../controller/controllerExpenses')

route.get('/', controller.findAll)
route.get('/:id', controller.findById)
route.post('/add', controller.add)
route.put('/update/:id', controller.change)
route.delete('/remove/:id', controller.remove)


module.exports = route;