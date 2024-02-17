const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT;
const route = require('./routes/route')
const cors = require('cors')


app.use('/', cors(), express.json(),express.urlencoded({extended: true}), route) 

app.listen(PORT, (error) => {

    try {

        if (error) {
            throw new Error('Server is not running')
        }

        console.log(`Server running on port: ${PORT} `)
    } catch (error) {

        console.log(error.message)
    }

})
