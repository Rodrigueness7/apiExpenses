const express = require('express')
const route = express.Router()
const controller = require('../controller/controllerExpenses')


route.get('/', controller.findAll)
route.get('/sum', controller.sum)
route.post('/add', controller.add,)
route.get('/find/:id', controller.findById)
route.put('/update/:id', controller.change)
route.put('/updatePaid/:id', controller.updateDtPaid)
route.delete('/remove/:id', controller.remove)


module.exports = route;