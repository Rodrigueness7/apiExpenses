class Expenses {

    id;
    description;
    value;
    dt_exp;

    constructor(data){
        this.id = data.id;
        this.description = data.description;
        this.value = data.value;
        this.dt_exp = data.dt_exp

        this.create = () =>{
            try {
                this.setId(this.id)

                console.log('id valido')

            } catch (error) {
                console.log(error.message)
            }
        }
    }

    getId(){
        return this.id
    }

    setId(id){
        if(id === undefined){
            throw new Error('id inválido')
        }
        
    }

    getDescription(){
        return this.description
    }

    setDescription(description){
        if(description === undefined){
            throw new Error('Description inválido')
        }
    }


    
}


module.exports = Expenses;