const express = require("express")
const router = express.Router()

const { Test } = require("../db")

router.get("/", async (req,res,next) => {
    try {
        const testInfo = await Test.findAll()
        res.send(testInfo)
    } catch (error) {
        res.status(400).send("somthing wrong!")
        next(error)
    }
})

module.exports = router