const express = require('express')
const route = express.Router()
const controller = require('../controller/controllerExpenses')

route.get('/', controller.findAll)
route.post('/add', controller.addValues)


module.exports = route;