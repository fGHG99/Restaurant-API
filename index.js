const express = require('express')

const app = express()
const port = 4646
const router = require('./routes/index')

app.use(express.json())
app.use(router)

app.listen(port, () => console.log(`Server Running on port ${port}`))

