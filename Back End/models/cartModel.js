const mongoose = require("mongoose");

const cartSchema =  mongoose.Schema({
    productId:{
        type:String,
        require:true,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

// export schema
module.exports =  mongoose.model("Cart", cartSchema);