require('dotenv').config()
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    connectionLimit: 5,

})

const insert = async (table, data) => {
    let keys = '?'.repeat(Object.keys(data).length)

    await pool.getConnection().then(
        async conn => {
            await conn.query(`INSERT INTO ${table} VALUE (${Object.values(keys)})`, Object.values(data)).then(
                conn.end()
            )
        }
    )
}

const select = async (table, result) => {

    await pool.getConnection().then(
        async conn => {
            await conn.query(`SELECT * FROM ${table}`).then(
                    result    
            ).then(
                conn.end()
            )
        }
    )
}

const update = async (table, data, params) => {

    let keys = Object.keys(data).join(' = ?, ').concat(' = ? ')

    await pool.getConnection().then(
        async conn => {
            await conn.query(`UPDATE ${table} SET ${keys} WHERE id = ${params} `, Object.values(data)).then(
                conn.end()
            )
        }
    )
}

const remove = async (table, params) => {

    await pool.getConnection().then(
        async conn => {
            await conn.query(`DELETE FROM ${table} WHERE id = ${params}`).then(
                conn.end()
            )
        }
    )
}

const selectById = async (table, params, result) => {

    await pool.getConnection().then(
        async conn => {
            await conn.query(`SELECT * FROM ${table} WHERE id = ${params}`).then(
                    result
            ).then(
                conn.end()
            )
        }
    )
}

const sum = async (table, column, result) => {
    
    await pool.getConnection().then(
        async conn => {
            await conn.query(`SELECT SUM(${column}) FROM ${table}`).then(
                result
            ).then(
                conn.end()
            )
        }
    )
}

const updateDt_paid = async (table, data, params) => {
    const keys = Object.keys(data).join(' = ?, ').concat( ' = ? ')
  
    await pool.getConnection().then(
        async conn => {
            await conn.query(`UPDATE ${table} SET ${keys} WHERE id = ${params}`, Object.values(data)).then(
                conn.end()
            )
        }
    )
}
module.exports = { insert, select, update, remove, selectById, sum, updateDt_paid }