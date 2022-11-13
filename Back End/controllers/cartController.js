const Cart = require("../models/cartModel");


// get all cart items
const getAllCartItems =  async (req, res) =>{
    try {
        const cartItems = await Cart.find({user:req.userId})
        if(cartItems.length > 0){
            res.status(200).json({
                success:true,
                cartItems,
            });
        }else{
            res.status(404).json({
                success:false,
                message:"There is no cart items!"
            });
        }
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"There was a sever error!"
        });
    }
}

// add product to cart
const addToCart =  async (req, res)=>{
    try {
        const {productId } = req.body;
        const addProduct = await Cart.create({productId, user:req.userId});
        if(addProduct){
            res.send("Product added to cart!");
        }else{
            res.send("Sorry! Product not add to cart!");
        }
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"There was a sever error!",
            error:err.message
        });
    }
}
// Remove  product from cart
const removeProduct =  async (req, res)=>{
    try {
        const deleteProduct = await Cart.findOneAndDelete({productId:req.params.id});
        if(deleteProduct){
            res.send("Remove product from Cart!");
        }else{
            res.send("Sorry! Something wrong!");
        }
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"There was a sever error!"
        });
    }
}



// export
module.exports = {
    getAllCartItems,
    addToCart,
    removeProduct
}