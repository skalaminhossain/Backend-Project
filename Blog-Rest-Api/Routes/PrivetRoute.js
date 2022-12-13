const router = require('express').Router()
const getUsers = require('../Controllers/getUserController')
const authenticate = require('../Middlewares/authMiddleware')

router.get('/getUsers' ,authenticate , getUsers.getAllUsers )

module.exports = router