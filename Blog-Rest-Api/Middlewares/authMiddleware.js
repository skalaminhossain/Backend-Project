const User = require("../Models/userModel")
const jwt = require('jsonwebtoken')

const Authenticate = async (req , res , next) => {
    try {
        const token = req.headers.authorization
        if(!token){
            return res.status(400).json({ msg : " Access Not Allow " })
        }

        const sToken = token.split(" ")[1]
        const decode = jwt.verify(sToken , process.env.PRIVET_KEY)
        const id = decode.id
        const user = await User.findById(id)
        req.user = user
        next()
    } catch (error) {
        res.status(401).json({ msg : "Authenticate Failed" })
    }
    
}

module.exports = Authenticate