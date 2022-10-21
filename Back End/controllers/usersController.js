const User =  require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create user or Sign Up
const createUser = async (req, res)=>{
    try {
        // check user exist or not
        const isUser = await User.find({email:req.body.email});
        if(isUser.length < 1){
            const hashPassword = await bcrypt.hash(req.body.password, 10);
            const user = await User.create({
                name:req.body.name,
                email:req.body.email,
                password:hashPassword
            });
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
// delete user by Id
const deleteUser =  async (req, res)=>{
    try {
        const user =  await User.findById(req.params.id);
        if(user){
            user.deleteOne();
            res.status(200).json({
                success:true,
                message:"User Deleted Successfully!"
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

// login user
const loginUser =  async (req, res, next) =>{
    try {
        const user =  await User.find({email:req.body.email});
        if(user){
            const isValidPassword = await bcrypt.compare(req.body.password, user[0].password)
            if(isValidPassword){
                const token = jwt.sign({
                    email:user[0].email,
                    userId:user[0]._id
                },process.env.JWT_SECREAT, {
                    expiresIn:"1h"
                })
                // set cookie
                res.cookie(process.env.COOKIE_NAME, token, {
                    expiresIn:process.env.COOKIE_EXPERY
                });
                res.status(200).json({
                    success:true,
                    message:"Login Success!",
                    access_token:token
                });
            }else{
                res.status(400).json({
                    success:false,
                    message:"Authentication Faield!"
                });
            }
        }else{
            res.status(404).json({
                success:false,
                message:"Authentication Faield!"
            });
        }
        
    } catch (err) {
        res.status(400).json({
            success:false,
            message:"Authentication Failed!",
        });
    }
}

// logout
const logoutUser = async (req, res)=>{
    res.cookie(process.env.COOKIE_NAME, null).json({
        success:true,
        message:"Logged out the user!"
    });
}


// export default
module.exports ={
    createUser,
    getAllUsers,
    deleteUser,
    loginUser,
    logoutUser
}