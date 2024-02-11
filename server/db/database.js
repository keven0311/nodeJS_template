require("dotenv").config()
const Sequelize = require("sequelize")
const databaseName = process.env.DATABASE_NAME  

const db = new Sequelize(`postgres://localhost:5432/${databaseName}`,{
    logging:false
})

module.exports = db