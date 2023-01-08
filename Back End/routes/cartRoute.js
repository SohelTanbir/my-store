const express =  require("express");
const router = express.Router();
const  checkLogin = require("../middleware/checkLogin");



// import cart controller
const { getAllCartItems, addToCart, removeProduct } = require("../controllers/cartController");


// cart routes
// Todo I have to add checkLogin middleware
router.get("/cart/all", getAllCartItems);
router.post("/cart/add", addToCart);
router.delete("/cart/delete/:id", removeProduct);


// export router
module.exports = router;