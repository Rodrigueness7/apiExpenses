const db = require('../database/mariadb')
class Expenses {

    id;
    description;
    value;
    dt_exp;
    dt_paid;


    constructor(data) {
        this.id = this.setId(data.id);
        this.description = this.setDescription(data.description);
        this.value = this.setValue(data.value);
        this.dt_exp = this.setDt_exp(data.dt_exp);
        this.dt_paid = this.setDt_paid(data.dt_paid)

        
        this.mdCreate(data)
        this.mdUpdate(data)
       
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

    getDt_paid(){
        
        return this.dt_paid
    }

    setDt_paid(dt_paid) {
        
        if (dt_paid === undefined){
            throw new Error('dt_paid invalid')
        }

    }

    mdCreate = (data) => {
        
        try {
            if (this.id || this.description || this.value || this.dt_exp || this.dt_paid) {
                this.id
                this.description
                this.value
                this.dt_exp
                this.dt_paid
            }

            db.cnInsert('expenses', data)

        } catch (error) {
            
            console.log(error.message)
        }
    }

    mdUpdate(data, params){

        try {
            if (this.id || this.description || this.value || this.dt_exp || this.dt_paid) {
                this.id
                this.description
                this.value
                this.dt_exp
                this.dt_paid
            }

            db.cnUpdate('expenses',data, params)


        } catch (error) {
            
            console.log(error.message)
        }
    }


}


module.exports = Expenses;