const express = require("express");
const router = express.Router();

// all product controllers
const { 
    addNewProduct,
    getAllProducts, 
    deleteProduct, 
    getProductById,
    updateProduct } = require("../controllers/productController");
const checkLogin = require("../middleware/checkLogin");

// Product routes
router.get("/product/all", getAllProducts);
router.get("/product/one/:id", getProductById);
router.post("/product/create", checkLogin, addNewProduct);
router.delete("/product/delete/:id",checkLogin, deleteProduct);
router.put("/product/update/:id",checkLogin, updateProduct);


// export routes
module.exports = router;