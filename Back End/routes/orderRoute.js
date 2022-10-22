const express  = require("express");
const router = express.Router();
const authorization = require("../middleware/auth");
const checkLogin = require("../middleware/checkLogin");
const { 
    createOrder, 
    getAllOrders, 
    getMyOrders, 
    getOrderById,
    deleteOrder
} = require("../controllers/orderController");


// order routes
router.post("/orders/create",checkLogin, createOrder);
router.get("/orders/all",checkLogin,authorization, getAllOrders);
router.get("/orders/me",checkLogin, getMyOrders);
router.get("/orders/:id", getOrderById);
router.delete("/orders/delete/:id", deleteOrder);



// export 
module.exports = router;