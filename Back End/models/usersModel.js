const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:["admin", "user"],
        default:"user"
    },
    resetPasswordToken:{
        type:String,
        default:""
    },
    resetPasswordExpire:Date,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

// export default
module.exports = mongoose.model("User", userSchema);