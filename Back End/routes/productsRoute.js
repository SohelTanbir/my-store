const express = require("express");
const router = express.Router();

// all product controllers
const { addNewProduct, getAllProducts, deleteProduct, getProductById } = require("../controllers/productController");



// Product routes
router.get("/product/all", getAllProducts);
router.get("/product/one/:id", getProductById);
router.post("/product/create", addNewProduct);
router.delete("/product/delete/:id", deleteProduct);
// router.post("/product/update", addNewProduct);







// export routes
module.exports = router;