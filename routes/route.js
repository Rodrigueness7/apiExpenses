const express = require('express')
const route = express.Router()
const controller = require('../controller/controllerExpenses')


route.post('/', controller.addValues)


module.exports = route;