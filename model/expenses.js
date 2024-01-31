const db = require('../database/mariadb')
class Expenses {

    id;
    description;
    value;
    dt_exp;

    constructor(data) {
        this.id = this.setId(data.id);
        this.description = this.setDescription(data.description);
        this.value = this.setValue(data.value);
        this.dt_exp = this.setDt_exp(data.dt_exp);

        this.create(data)
        this.searchAll()
    }

    getId() {
        return this.id
    }

    setId(id) {
        if (id === undefined) {
            throw new Error('id invalid')
        }

    }

    getDescription() {
        return this.description
    }

    setDescription(description) {
        if (description === undefined) {
            throw new Error('Description invalid')
        }
    }

    getValue() {
        return this.value
    }

    setValue(value) {
        if (value === undefined) {
            throw new Error('value invalid')
        }
    }

    getDt_exp() {
        return this.dt_exp
    }

    setDt_exp(dt_exp) {
        if (dt_exp === undefined) {
            throw new Error('dt_exp invalid')
        }
    }

    create = (data) => {
        try {
            if (this.id || this.description || this.value || this.dt_exp) {
                this.id
                this.description
                this.value
                this.dt_exp

            }

            db.insert('expenses', data)


        } catch (error) {
            console.log(error.message)
        }
    }

    searchAll = () => {
        try {
            db.select('expenses')

        } catch (error) {
            console.log(error.message)
        }
    }

}


module.exports = Expenses;