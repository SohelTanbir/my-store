const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    }
    
});

// export 
module.exports = mongoose.model("Product", productSchema)