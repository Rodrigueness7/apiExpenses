const express = require('express')
const route = express.Router()
const controller = require('../controller/controllerExpenses')

route.get('/', controller.findAll)
route.put('/update/:id', controller.updateValues)
route.post('/add', controller.addValues)


module.exports = route;