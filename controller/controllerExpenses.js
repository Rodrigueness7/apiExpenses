const Expenses = require('../model/expenses')
const db = require('../database/mariadb')


const add = async(req, res) => {

    const expenses = new Expenses(req.body)
    await expenses.created(expenses);
    await res.json({data: 'Adicionado'})

}

const findAll = async (req, res) => {
    let expenses = new Expenses
   await expenses.searchAll(res)
 

}  

const change = async (req, res) => {
    let id = req.params
    const expenses = new Expenses(req.body)
    await expenses.update(expenses, id)
    await res.json({data: 'Atualizado'})
}

const remove = async (req, res) => {
    let expenses = new Expenses
    await expenses.delete(req.params.id)
    res.json({data: 'Removido'})
   
}


module.exports = {add, findAll, change, remove};