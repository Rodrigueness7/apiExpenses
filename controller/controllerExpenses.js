const Expenses = require('../model/expenses')

const addValues =  (req, res) => {

    let expenses = new Expenses(req.body)

    expenses.create(req.body);

    res.send('adicionado')
    
}

module.exports = {addValues};