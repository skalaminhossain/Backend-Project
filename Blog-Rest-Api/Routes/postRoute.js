const postroute = require('express').Router()
const PostController = require('../Controllers/postController')
const authenticate = require('../Middlewares/authMiddleware')

postroute.post('/',authenticate , PostController.PostController)

module.exports = postroute