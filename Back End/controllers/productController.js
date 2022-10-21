const Product = require("../models/productModel");

// Create a new product
const addNewProduct = async (req, res, next)=>{
        // set user reference in product 
        req.body.user = req.userId;
        const product = new Product(req.body);
        product.save((err)=>{
            if(!err){
                res.status(200).json({
                    success:true,
                    message:"Product Created Successfully!",
                    product
                });
            }else{
                res.status(200).json({
                    success:false,
                    message:err.message
                })
            }
        });
}

// Get All Products
const getAllProducts =  async(req, res)=>{

    try {
        const products = await Product.find({});
        if(products){
            res.status(200).json({
                success:true,
                products
            });
        }else{
            res.status(404).json({
                success:false,
                message:"Sorry! Didn't find any product!"
            })
        }
    } catch (err) {
        console.log(err);
    }
    
}

// get a product by id
const getProductById =  async(req, res)=>{

    try {
        const products = await Product.findById(req.params.id);
        if(products){
            res.status(200).json({
                success:true,
                products
            });
        }else{
            res.status(404).json({
                success:false,
                message:"Product Not Found!"
            })
        }
    } catch (err) {
        console.log(err);
    }
    
}


// delete a product 
const deleteProduct = async (req, res )=>{
 
   try {
        const product =  await Product.findById(req.params.id)
        if(product){
            product.deleteOne();
            res.status(200).json({
                success:true,
                message:"Product Delete Successfully!"
            });
        }else{
            res.status(404).json({
                success:false,
                message:"Product not Found!"
            });
        }
   } catch (err) {
        console.log(err);
   }

}

// update a product
const updateProduct = async (req, res)=>{
    try {
        const product =  await Product.findById(req.params.id);
        if(product){
            const updateData = {
                $set:{
                    name:req.body.name,
                    description:req.body.description,
                    price:req.body.price,
                    category:req.body.category,
                    images:req.body.images
                }
            }
            // update
            Product.findByIdAndUpdate(req.params.id, updateData, (err, data)=>{
                if(!err){
                    res.status(200).json({
                        success:true,
                        message:"Product Updated Successfully!",
                        product
                    });
                }else{
                    res.status(404).json({
                        success:true,
                        message:"Product Updated Failed!"
                    });
                }
            })
        }else{
            res.status(404).json({
                success:false,
                message:"Product not Found!"
            })
        }
    } catch (err) {
        console.log(err);
    }
}



// export default
module.exports ={
    addNewProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct
}