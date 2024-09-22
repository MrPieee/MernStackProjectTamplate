const mongoose= require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

const DBCONNECT = async()=>{
    try {
        await mongoose.connect(DB_URL);
        console.log('DB has been Connected');

    } catch (error) {
        console.error(error.message);
    }
}

module.exports =DBCONNECT;