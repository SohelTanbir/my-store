const Cart = require("../models/cartModel");


// get all cart items
const getAllCartItems =  async (req, res) =>{
    try {
        const cartProducts = await Cart.find({user:req.userId})
        if(cartProducts.length > 0){
            res.status(200).json({
                success:true,
                cartProducts,
            });
        }else{
            res.status(404).json({
                success:false,
                message:"There is no product in cart!"
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
        const {productId, name, description, price, category, images}  = req.body;
       if(productId, name,description, price, category, images){
        const addProduct = await Cart.create({
            productId,
            name,
            description,
            price, 
            category,
            images
        });
        if(addProduct){
            res.status(200).json({
                success:true,
                message:"1 Product added to cart!"
            });
        }else{
            res.status(400).json({
                success:false,
                message:"Failed! Product not add to cart!"
            });
        }
       }else{
        res.status(400).json({
            success:false,
            message:"Sorry! Empty product!"
        });
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
        const deleteProduct = await Cart.findOneAndDelete({_id:req.params.id});
        if(deleteProduct){
            res.status(200).json({
                success:true,
                message:" 1 Product removed from Cart!"
            });
        }else{
            res.status(400).json({
                success:false,
                message:"Product remove failed!"
            });
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