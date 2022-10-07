const Category = require("../models/categoryModel");


// get all category
const getAllCategory = async(req, res)=>{
    try {
        const categories = await Category.find({});
        if(categories){
            res.status(200).json({
                success:true,
                categories,
            });
        }else{
            res.status(404).json({
                success:false,
                message:"Category not Found!"
            })
        }
    } catch (err) {
        console.log(err);
    }
}

// create category 
const createCategory = async (req, res)=>{
    // capitalize category name
    const newCategory =req.body.name.toLowerCase();


    const category = new Category({name:newCategory});
    category.save((err)=>{
        if(!err){
            res.status(200).json({
                success:true,
                message:"Category Created Successfully!",
            });
        }else{
            res.status(401).json({
                success:false,
                message:"Category Created Failed!",
                error:err.message
            })
        }
    })
}
// delete category
const deleteCategory = async (req, res)=>{
    const category = await Category.findById(req.params.id);
    if(category){
        category.deleteOne();
        res.status(200).json({
            success:true,
            message:"Category Deleted Successful!"
        })

    }else{
        res.status(404).json({
            success:false,
            message:"Category not Found!"
        })
    }
}



// export default
module.exports ={
    getAllCategory,
    createCategory,
    deleteCategory
}