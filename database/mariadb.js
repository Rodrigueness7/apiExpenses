require('dotenv').config()
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    connectionLimit: 5
    
})

const insert = async (table, data) => {
    let keys = '?'.repeat(Object.keys(data).length)

    pool.getConnection().then(
        async conn => {
            await conn.query(`INSERT INTO ${table} VALUE (${Object.values(keys)})`, Object.values(data))
        }
    )
}

const select = async (table, res) => {

    pool.getConnection().then(
       async conn => {
           await conn.query(`SELECT * FROM ${table}`).then(
               async (rows) => {
                   await res.json(rows)
                }
            )
        }
    )
} 

const update = async (table, data, params) => {

    let keys = Object.keys(data).join(' = ?, ').concat(' = ? ')

    pool.getConnection().then(
        async conn => {
            await conn.query(`UPDATE ${table} SET ${keys} WHERE id = ${params} `, Object.values(data))
        }
    )
}

const remove = async(table, params) => {

    pool.getConnection().then(
       async  conn => {
           await conn.query(`DELETE FROM ${table} WHERE id = ${params}`)
        }
    )
}


module.exports = { insert, select, update, remove }