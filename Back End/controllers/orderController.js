const Order = require("../models/orderModel");
const Product = require("../models/productModel");

// create order -- admin
const createOrder  = async (req, res)=>{
    try {
        const {
            shippingInfo,
            orderItems,
            paymentInfo,
            itemPrice,
            texPrice,
            shippingPrice, 
            totalPrice 
        } = req.body;
        const order = await Order.create({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemPrice,
            texPrice,
            shippingPrice, 
            totalPrice,
            user:req.userId
        });
    if(order){
        res.status(200).json({
            success:true,
            message:"Order placed Successfully!",
            order
        });
    }
        
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"There was a server side error!",
        });
    }
}
// get all orders -- admin 
const getAllOrders = async (req, res)=>{
    try {
        const orders = await Order.find({});
        if(orders){
            res.status(200).json({
                success:true,
                orders
            });
        }else{
            res.status(404).json({
                success:false,
                "message":"Order not found!"
            });
        }
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"There was a server side error!",
        });
    }
}
// get specific user orders
const getMyOrders = async (req, res)=>{
    try {
        const orders = await Order.find({user:req.userId});
        if(orders){
            res.status(200).json({
                success:true,
                orders
            });
        }else{
            res.status(404).json({
                success:false,
                "message":"Order not found!"
            });
        }
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"There was a server side error!",
        });
    }
}

// get order by id
const getOrderById =   async(req, res)=>{
    try {
        const order = await Order.findById(req.params.id);
        if(order){
            res.status(200).json({
                success:true,
                order
            });
        }else{
            res.status(404).json({
                success:false,
                "message":"Order not found!"
            });
        }
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"There was a server side error!",
        });
    }
}

// delete order
const deleteOrder =   async(req, res)=>{
    try {
        const order = await Order.findById(req.params.id);
        if(order){
            order.deleteOne();
            res.status(200).json({
                success:true,
                "message":"Order Deleted Successfully!"
            });
        }else{
            res.status(404).json({
                success:false,
                "message":"Order not found!"
            });
        }
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"There was a server side error!",
        });
    }

}
// export 
module.exports = {
    createOrder,
    getAllOrders,
    getMyOrders,
    getOrderById,
    deleteOrder
}