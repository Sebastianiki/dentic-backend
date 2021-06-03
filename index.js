const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()

connectDB()

app.use(cors())
app.use(express.json({ extend: true }))
app.use('/api/products', require('./routes/products'))

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
})