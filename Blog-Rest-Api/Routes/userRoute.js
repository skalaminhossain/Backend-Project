const router = require('express').Router()
const getUsers = require('../Controllers/UserController')
const authenticate = require('../Middlewares/authMiddleware')


router.get('/getUsers' ,authenticate , getUsers.getAllUsers )
router.put('/updateProfile/:id' , authenticate , getUsers.UpdateProfile )
router.delete('/userDelete/:id' , authenticate , getUsers.deleteUser )

module.exports = router