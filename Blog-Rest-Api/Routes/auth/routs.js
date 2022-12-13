const signup = require('../../Controllers/authControllers/signup')
const login = require('../../Controllers/authControllers/login')

const routers = require('express').Router()
routers.post('/signup' , signup.signup)
routers.post('/login' , login.login )

module.exports = routers