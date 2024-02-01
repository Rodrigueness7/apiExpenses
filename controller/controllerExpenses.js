const Expenses = require('../model/expenses')
const db = require('../database/mariadb')



const addValues =  async(req, res) => {

    let expenses = new Expenses(req.body)
    expenses.mdCreate();

    await res.json({data: 'Adicionado'})
    
}

const findAll = async (req, res) =>{
    
    db.cnSelect('expenses', await res)

    
}



module.exports = {addValues, findAll};