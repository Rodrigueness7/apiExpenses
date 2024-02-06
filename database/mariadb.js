require('dotenv').config()
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    connectionLimit: 1000,

})

const insert = async (table, data) => {
    let keys = '?'.repeat(Object.keys(data).length)

    await pool.getConnection().then(
        async conn => {
            await conn.query(`INSERT INTO ${table} VALUE (${Object.values(keys)})`, Object.values(data))
        }
    )
}

const select = async (table, result) => {

    await pool.getConnection().then(
        async conn => {
            await conn.query(`SELECT * FROM ${table}`).then(
                result
            )
        }
    )
}

const update = async (table, data, params) => {

    let keys = Object.keys(data).join(' = ?, ').concat(' = ? ')

    await pool.getConnection().then(
        async conn => {
            await conn.query(`UPDATE ${table} SET ${keys} WHERE id = ${params} `, Object.values(data))
        }
    )
}

const remove = async (table, params) => {

    await pool.getConnection().then(
        async conn => {
            await conn.query(`DELETE FROM ${table} WHERE id = ${params}`)
        }
    )
}

const selectById = async (table, params, result) => {

    await pool.getConnection().then(
        async conn => {
            await conn.query(`SELECT * FROM ${table} WHERE id = ${params}`).then(
                result
            )
        }
    )
}

module.exports = { insert, select, update, remove, selectById }