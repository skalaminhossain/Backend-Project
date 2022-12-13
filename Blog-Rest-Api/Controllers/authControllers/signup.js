const User = require('../../Models/userModel')
const bcrypt = require('bcrypt')

exports.signup = async (req , res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password , 11)
        const { name , username , email , password , profile } = req.body
        const user = await User.create({
            name ,
            username ,
            email ,
            password,
            profile
        })

        res.status(200).json({msg : "Account Created Successfull !" , data : user})
    } catch (err) {
        res.status(400).json({msg : "Something went wrong !" , data : err})
    }
}
