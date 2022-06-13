const express = require('express')
const app = express()
const test = require('./api/test')
const port = process.env.port || 3000

app.use("/api/test", test)

app.listen(port, ()=>{console.log(`Listening on port ${port}`)})