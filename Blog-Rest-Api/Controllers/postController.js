const postModel = require('../Models/postModel')

exports.PostController = async (req , res) =>{
    const {title , body , username , category , photo} = req.body
    try {
        const post = postModel.create({
            title,
            body,
            username,
            category,
            photo
        })
        
        res.status(200).json({post})
    } catch (error) {
        res.status(401).json({msg : "Post Created Failed" , error})
    }
}