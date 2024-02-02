const Expenses = require('../model/expenses')
const db = require('../database/mariadb')



const addValues =  async(req, res) => {

    let expenses = new Expenses(req.body)
    expenses.create(expenses);

    await res.json({data: 'Adicionado'})
    
}

const findAll = async (req, res) =>{
    
    db.select('expenses', await res)

    
}  



module.exports = {addValues, findAll};