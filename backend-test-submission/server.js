const express = require('express')
const mongoose = require('mongoose')
const Log = require('../logging-middleware/logger')
const port = 3000
const app = express()
app.use(express.json())
const userRoutes = require('./router/userrouter')
mongoose.connect('mongodb://127.0.0.1:27017/affortmeddb')
.then(async ()=>{

    await Log(
        "backend",
        "info",
        "db",
        "database connected successfully"
    )

    console.log("database connected successfully")
})
.catch(async (err)=>{
    await Log(
        "backend",
        "error",
        "db",
        err.message
    )
    console.error("error connecting database", err.message)
})

app.use('/api/user', userRoutes)
app.listen(port, async ()=>{
    await Log(
        "backend",
        "info",
        "config",
        `server running on port ${port}`
    )
    console.log(`server running on port ${port}`)
})