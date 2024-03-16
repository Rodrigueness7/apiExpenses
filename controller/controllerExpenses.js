const Expenses = require('../model/expenses')
const db = require('../database/mariadb')


const add = async (req, res) => {

    let expenses = new Expenses(req.body)
    await expenses.created(expenses);
    res.json({ data: 'Adicionado' })

}

const findAll = async (req, res) => {
    let expenses = new Expenses
    await expenses.searchAll(res)
   
}

const change = async (req, res) => {
    let id = req.params
    let expenses = new Expenses(req.body)
    await expenses.update(expenses, id)
    res.json({ data: 'Atualizado' })
}

const remove = async (req, res) => {
    let expenses = new Expenses
    await expenses.delete(req.params.id)
    res.json({ data: 'Removido' })

}

const findById = async (req, res) => {
    let expenses = new Expenses
    await expenses.searchById(req.params.id, res)

}

const sum = async (req, res) => {
    let expenses = new Expenses
    await expenses.sum(res)
}

const updateDtPaid = async (req, res) => {
    let expenses = new Expenses(req.body)
    await expenses.updateDt_paid(expenses, req.params.id)
    res.send({data: 'Pago'})
} 

const valuesByDate = async (req, res) => {
   await Expenses.valuesEntryDate(req.body, res)
    
}

const findByDate = async (req, res) => {
    await Expenses.selectEntryDate(req.body, res) 
}

module.exports = { add, findAll, change, remove, findById, sum, updateDtPaid, valuesByDate, findByDate };