require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product');

const ProductJson = require('./products.json');

const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany(); //to delete the records from db as their is redundant data of json file with spell mistake of "feature to featured"
        await Product.create(ProductJson);
        console.log('success');
    }catch(error){
        console.log(error);
    }
}

start();