const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const db = require('./config/connectDB')
const routers = require('./Routes/auth/routs')
const privetRoute = require('./Routes/PrivetRoute')

const port = process.env.PORT || 4000

app.use(express.json())
// Routers
app.use('/api' , routers )
app.use('/api/user' , privetRoute)

app.listen(port , () => {
    console.log(`Server is running on port - ${port}`);
    db()
})