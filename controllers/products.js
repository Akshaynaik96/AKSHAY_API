const Product = require('../models/product');

const getAllProducts = async (req,res) => {

    const { company, name, featured, sort, select } = req.query;
    const queryObject = {}

    if(company){
        queryObject.company = company;
        
        
    }
    if(name){
        queryObject.name = { $regex:name, $options: "i" };
    }

    if(featured){
        queryObject.featured = featured;
    }
    let apiData = Product.find( queryObject );

    if(sort){
        let sortFix = sort.split(',').join(" ");
        //queryObject.sort = sortFix;
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(',').join(" ");
        //queryObject.sort = sortFix;
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2;

    let skip = (page-1)*limit;
    apiData = apiData.skip(skip).limit(limit);
    console.log(queryObject);

    const Products = await apiData;
    res.status(200).json({
        Products,
        nbHits: mydata.length
    });
};

const getAllProductsTesting = async (req,res) => {
    const mydata = await Product.find( req.query);
    console.log(req.query)
    res.status(200).json({
        mydata
    });
};

module.exports = { getAllProducts, getAllProductsTesting };