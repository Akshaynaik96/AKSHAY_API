const express = require('express');
const router = express.Router();

const {getAllProducts} = require('../controllers/products');
const {getAllProductsTesting} = require('../controllers/products');

// router.get('/',(req,res)=>{
//     res.status(200).json({
//         message:'hello testing'
//     })
// });

// router.get('/testing',(req,res)=>{
//     res.status(200).json({
//         message:'hello testing1'
//     })
// });
router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);

module.exports = router;