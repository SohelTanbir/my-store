const express = require("express");
const router = express.Router();

// all product controllers
const { addNewProduct } = require("../controllers/productController");



// create new product
router.post("/product/add", addNewProduct);







// export routes
module.exports = router;