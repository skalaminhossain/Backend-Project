const getLogin = (req , res) => {
    res.render('index' , {
        title : "Login - Chat application"
    })
}

module.exports = {
    getLogin,
}