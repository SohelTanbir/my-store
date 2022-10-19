const User =  require("../models/usersModel");



// create user
const createUser = async (req, res)=>{
    try {
        // check user exist or not
        const isUser = await User.find({email:req.body.email});
        if(isUser.length < 1){
            const user = await User.create(req.body);
            user.save(err =>{
                if(!err){
                    res.status(200).json({
                        success:true,
                        message:"User Created Successfully!",
                    });
                }else{
                    res.status(400).json({
                        success:false,
                        message:err.message
                    });
                }
            })
        }else{
            res.status(400).json({
                success:false,
                message:"User already exist!",
            });
        }  
      
    } catch (err) {
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

// get all users
const getAllUsers = async (req, res)=>{
    try {
        const users =  await User.find({});
        if(users){
            res.status(200).json({
                success:true,
                users
            });
        }else{
            res.status(404).json({
                success:false,
                message:"User not found!"
            });
        }
        
    } catch (err) {
        res.status(400).json({
            success:false,
            message:err.message
        });
    }
}

// export default
module.exports ={
    createUser,
    getAllUsers
}