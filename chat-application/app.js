const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require("mongoose")
const path = require('path')
const cookieParser = require('cookie-parser')

//internal import
const {notFoundHandler , errorHandler} = require('./Middlewares/common/errorHandler')
const loginRouter = require('./Routers/loginRouter')
const app =  express()

//DataBase Connection
const DBURI = process.env.DBURI
mongoose.set('strictQuery', true);
const connectDB = () => {
    mongoose.connect(DBURI)
        .then(console.log("DB Connected"))
        .catch((e) => console.log(e)),
        {useNewUrlParser : true ,
        useUnifiedTopology : true}
}



// Request Parser
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//Setup view engine
app.set("view engine" , "ejs")

//set static folder
app.use(express.static(path.join(__dirname , "public")))

//parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET))

//route setup
app.use('/' , loginRouter)
// app.use('/users' , usersRouter)
// app.use('/inbox' , inboxRouter)

//error handling
app.use(notFoundHandler)
app.use(errorHandler)
//Server connection
const PORT = process.env.PORT
app.listen(PORT , () => {
    console.log(`Server is running at port - ${PORT}`);
    connectDB()
})
