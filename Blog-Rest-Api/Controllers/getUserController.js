const User = require('../Models/userModel')
exports.getAllUsers =async (req , res) => {
    try {
        const users = await User.find()
        res.status(200).json({ msg : "Users Founded" , users })
    } catch (error) {
        res.status(400).json({ msg : "Not Found" })
    }
    
}

