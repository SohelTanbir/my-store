

// create new product
const addNewProduct = async (req, res)=>{
    res.send("Product Created");
    console.log(req.body);
}






// export default
module.exports ={
    addNewProduct
}