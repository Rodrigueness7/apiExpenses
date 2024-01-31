require('dotenv').config()
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    connectionLimit: 5
    
})

const insert = (table, data) => {
    let keys = '?'.repeat(Object.keys(data).length)

    pool.getConnection().then(
        conn => {
            conn.query(`INSERT INTO ${table} VALUE (${Object.values(keys)})`, Object.values(data))
        }
    )
}

const select = (table) => {

    pool.getConnection().then(
        conn => {
            conn.query(`SELECT * FROM ${table}`)
        }
    )
} 


module.exports = { insert, select }