const express =  require("express");
const router = express.Router();
const  checkLogin = require("../middleware/checkLogin");



// import cart controller
const { getAllCartItems, addToCart, removeProduct,removeAllProduct } = require("../controllers/cartController");


// cart routes
// Todo I have to add checkLogin middleware
router.get("/cart/all", getAllCartItems);
router.post("/cart/add", addToCart);
// router.delete("/cart/delete/:id", removeProduct);
router.delete("/cart/delete/all", removeAllProduct);


// export router
module.exports = router;