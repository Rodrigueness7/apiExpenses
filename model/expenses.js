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
        this.dt_paid = this.setDt_paid(data.dt_paid);

        
        this.create()
    }

    getId() {
        
        return this.id
    }

    setId(id) {
        
        if (id === undefined) {
             return this.id = 0  
        } 
            
          return this.id = id

    }

    getDescription() {
        
        return this.description
    }

    setDescription(description) {
        
        if (description === undefined) {
            throw new Error('Description invalid')
        }

        return this.description = description;
    }

    getValue() {
        
        return this.value
    }

    setValue(value) {
        
        if (value === undefined) {
            throw new Error('value invalid')
        }

        return this.value = value
    }

    getDt_exp() {
        
        return this.dt_exp
    }

    setDt_exp(dt_exp) {
        
        if (dt_exp === undefined) {
            throw new Error('dt_exp invalid')
        }

        return this.dt_exp = dt_exp
    }

    getDt_paid() {
        
        return this.dt_paid
    }

    setDt_paid(dt_paid) {
        
        if (dt_paid === undefined){
            
            return this.dt_paid = null
        }

          return this.dt_paid = dt_paid  

    }

    create = (data) => {
        
        try {

            let values = new Expenses(data)
            
            db.insert('expenses', values)
            

        } catch (error) {
            
            console.log(error.message)
        }
    }



}


module.exports = Expenses;