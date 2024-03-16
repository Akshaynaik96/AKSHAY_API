const mongoose = require('mongoose');

const connectDB = async (uri)=>{
    
    console.log('connect from db')
    return mongoose.connect(uri);
};

module.exports = connectDB;
//uri for db connect=mongodb+srv://akshay123naik:wK4OFnhbxyO8OVVV@node-rest-shop.qfdhchm.mongodb.net/