const router = require('express').Router()
const loginController = require('../Controllers/loginController')

router.get('/' , loginController.getLogin )

module.exports = router