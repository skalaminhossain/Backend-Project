const createError = require('http-errors')

function notFoundHandler(req , res , next ) {
    next(createError(404 , "Your request content was not Found"))
}

function errorHandler(err ,req , res , next) {
    res.render('error' , {
        title : "error page"
    })
}

module.exports = {notFoundHandler , errorHandler}