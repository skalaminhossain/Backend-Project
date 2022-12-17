const User = require('../Models/userModel')
const bcrypt = require('bcrypt')
exports.getAllUsers =async (req , res) => {
    try {
        const users = await User.find()
        res.status(200).json({ msg : "Users Founded" , users })
    } catch (error) {
        res.status(400).json({ msg : "Not Found" })
    }
    
}

exports.UpdateProfile = async (req , res) => {
    const userid = req.params.id
    try {
        const user = await User.findById(userid)
        if(!user){
            return res.status(400).json({msg : "Wrong User"})
        }
        req.body.password = await bcrypt.hash(req.body.password , 10)
        const updateUser = await User.findByIdAndUpdate(userid , req.body , {new : true})

        res.status(200).json({msg : "Updated Success" , updateUser})
    } catch (error) {
        res.status(400).json({msg : "Wrong Credentials" , error})
    }
    
}

exports.deleteUser =async (req, res) => {
    const userid = req.params.id
    try {
        const user = await User.findById(userid)
        if(!user){
            return res.status(400).json({msg : "User Not Found"})
        }

        const userDelete = await User.findByIdAndDelete(userid)
        res.status(200).json({msg : "Deleted user Success" , userDelete})
        
    } catch (error) {
        res.status(400).json({msg : "Wrong Credentials"})
    }
}