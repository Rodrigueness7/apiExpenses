const db = require('../database/mariadb')

class Expenses {

    id;
    description;
    value;
    dt_exp;
    dt_paid;

    #table = 'expenses';
    #column = 'value';

    constructor(data) {
        
        if (data) {
            this.setId(data.id);
            this.setDescription(data.description);
            this.setValue(data.value);
            this.setDt_exp(data.dt_exp); 
            this.setDt_paid(data.dt_paid)
            
        } 
      
    };

    getId() {

        return this.id
    };

    setId(id) {

        if (id === undefined) {
            return this.id = 0
        }

        return this.id = id
    };

    getDescription() {

        return this.description
    };

    setDescription(description) {

        if (description === undefined) {
            throw new Error('Description invalid')
        }

        return this.description = description;
    };

    getValue() {

        return this.value
    };

    setValue(value) {

        if (value === undefined) {
            throw new Error('value invalid')
        }

        return this.value = value
    };

    getDt_exp() {

        return this.dt_exp
    };

    setDt_exp(dt_exp) {

        if (dt_exp === undefined) {
            throw new Error('dt_exp invalid')
        }

        return this.dt_exp = dt_exp
    };

    getDt_paid() {

        return this.dt_paid
    };

    setDt_paid(dt_paid) {

        if (dt_paid === undefined) {

            return this.dt_paid = null
        }
        return this.dt_paid = dt_paid
    };


    async created(expense) {
        await db.insert(this.#table, expense);
    };

    async update(expense, req) {
        await db.update(this.#table, expense, req.id);
    };

    async searchAll(res) {

        await db.select(this.#table, async (rows) => {
            await res.json(rows);
        })
    };

    async delete(params) {
        await db.remove(this.#table, params);
    };

    async searchById(params, res) {
        await db.selectById(this.#table, params, async (rows) => {
            await res.json(rows);
        })
    };

    async sum(res) {
        await db.sum(this.#table, this.#column, async (rows) => {
            await res.json(rows);
        })
    }

    async updateDt_paid(expense, params) {
        await db.updateDt_paid(this.#table, expense, params);
    }
};


module.exports = Expenses;


           
