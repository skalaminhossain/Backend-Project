const User = require('../../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.login = async (req , res) => {
    const {username , password} = req.body
    
    try {
        const user = await User.findOne({username})
        if(!user){
            return res.status(400).json({msg : "User not found"})
        }
        const isPassMatch = bcrypt.compare(password , user.password)
        
        if(!isPassMatch){
            res.status(401).json({msg : "Password not mached"})
        }

        const token = await jwt.sign(user.username , process.env.PRIVET_KEY)

        res.status(200).json({msg : `Hi ${user.username} You Are Logged in` , token})
    } catch (error) {
        res.status(400).json({msg : "Something Went Wrong"  , error})
    }
}