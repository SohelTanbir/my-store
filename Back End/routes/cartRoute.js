const express =  require("express");
const router = express.Router();
const  checkLogin = require("../middleware/checkLogin");



// import cart controller
const { getAllCartItems, addToCart, removeProduct } = require("../controllers/cartController");


// cart routes
router.get("/cart/all",checkLogin, getAllCartItems);
router.post("/cart/add",checkLogin, addToCart);
router.delete("/cart/delete/:id",checkLogin, removeProduct);


// export router
module.exports = router;