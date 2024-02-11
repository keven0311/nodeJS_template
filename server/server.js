require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")

const port = process.env.PORT

// middlewares:
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


//api routes:
app.use("/api", require("./api"))


//server:
app.listen(port, () => console.log(`server listening on PORT:${port}`))