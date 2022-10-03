const Product = require("../models/productModel");

// create new product
const addNewProduct = async (req, res)=>{



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
        })

}






// export default
module.exports ={
    addNewProduct
}