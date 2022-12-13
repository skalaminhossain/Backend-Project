const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("DB Connected");

    } catch (err) {
        console.log("DataBase Connection Failed");
    }
}

module.exports = connectDB