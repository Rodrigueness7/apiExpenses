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

const select = (table, res) => {

    pool.getConnection().then(
        conn => {
            conn.query(`SELECT * FROM ${table}`).then(
                (rows) => {
                    res.json(rows)
                }
            )
        }
    )
} 

const update = (table, data, params) => {

    let keys = Object.keys(data).join(' = ?, ').concat(' = ? ')

    pool.getConnection().then(
        conn => {
            conn.query(`UPDATE ${table} SET ${keys} WHERE id =${params} `, Object.values(data))
        }
    )
}


module.exports = { insert, select, update }