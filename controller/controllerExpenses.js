const Expenses = require('../model/expenses')



const addValues =  async(req, res) => {

    let expenses = new Expenses(req.body)
    expenses.create();

    await res.send('adicionado')
    
}

const findAll = async (req, res) =>{
    
    let expenses = new Expenses(req.body)

    expenses.searchAll()

    await res.json()
    
}

module.exports = {addValues, findAll};