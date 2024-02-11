require("dotenv").config()
const Sequelize = require("sequelize")
const db = require("../database")

//define Sequelize model:
const Test = db.define("test",{
    test_one:{
        type:Sequelize.STRING
    }
})

module.exports = Test
