const User =  require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utilities/sendEmail");
const crypto = require("crypto");


// create user or Sign Up
const createUser = async (req, res)=>{
    try {
        // check user exist or not
        const isUser = await User.find({email:req.fields.email});
        if(isUser.length < 1){
            const hashPassword = await bcrypt.hash(req.fields.password, 10);
            const user = await User.create({
                name:req.fields.name,
                email:req.fields.email,
                password:hashPassword,
                role:req.fields.role
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
                        message:err.message +"here"
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
        if(users.length > 0){
            res.status(200).json({
                success:true,
                users
            });
        }else{
            res.status(404).json({
                success:false,
                message:"Sorry! There is no user found!"
            });
        }
        
    } catch (err) {
        res.status(400).json({
            success:false,
            message:err.message
        });
    }
}
// get user by Id
const getUserById =  async (req, res)=>{
    try {
        const user =  await User.findById(req.params.id);
        if(user){
            res.status(200).json({
                success:true,
                user
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
        const user =  await User.find({email:req.fields.email});
        if(user){
            const {name, email, role} = user[0];
            const isValidPassword = await bcrypt.compare(req.fields.password, user[0].password)
            if(isValidPassword){
                const token = jwt.sign({
                    email,
                    userId:user[0]._id
                },process.env.JWT_SECREAT, {
                    expiresIn:"1h"
                })
                // set cookie
                res.cookie(process.env.COOKIE_NAME, token, {
                    expiresIn:process.env.COOKIE_EXPERY,
                    httpOnly: true
                });
                res.status(200).json({
                    success:true,
                    message:"Login Success!",
                    access_token:token,
                    user:{name, email, role}
                });
            }else{
                res.status(400).json({
                    success:false,
                    message:"incorrect email or password"
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
        message:"Logged Out Successfully"
    });
}

// forgot password
const forgotPassword = async (req, res)=>{
    const user =  await User.findOne({email:req.body.email});
    if(user){
        // generate random string with hex
        const randomString =   crypto.randomBytes(20).toString("hex");
        const subject  = 'MyStore  Forogt Password Recovery';
        const resetpasswordurl = `${req.protocol
        }://${process.env.FRONTEND_HOST}/password/reset/${randomString}`;
        const message = `Please click the below link to reset your password \n\n 
        ${resetpasswordurl}
        if you are not requested this mail, the please ignore it. 
        `;
        const response = await   sendEmail(user.email,subject, message);
       if(response.accepted.length > 0){
        // save user password reset token and time
        await user.updateOne({$set:{resetPasswordToken:randomString}});
        await user.updateOne({$set:{resetPasswordExpire:Date.now() + 60*1000*60*24}})
            res.status(200).json({
                success:true,
                message:`Email sent to ${user.email} successfully!`,
            });
       }else{
        res.status(400).json({
            success:false,
            message:`Email sent Failed!`
        });
       }
    }else{
        res.status(404).json({
            success:false,
            message:"User not found!"
        });
    }
    

}

// reset password
const resetPassword = async (req, res)=>{
  
    try {
        const user  = await User.find({
            resetPasswordToken:req.params.id,
            resetPasswordExpire:{$gt:Date.now()}
        });
        
        // const isResetPasswordTokenExpired = await User.find({resetPasswordTokenExpire:{$gt:Date.now()}})
    if(user.length > 0 ){
        // check password and confirm password match or not
        if(req.body.password == req.body.confirmPassword){
            
            // generate hash password
            const hashPassword = await bcrypt.hash(req.body.password, 10);
            // update user password
            
            const passwordUpdated = await User.updateOne({resetPasswordToken:req.params.id},{$set:{password:hashPassword}});
            if(passwordUpdated.modifiedCount > 0){
                // set reset password token blank string
                // await User.updateOne({resetPasswordToken:req.params.id},{$set:{resetPasswordToken:"", resetPasswordExpire:""}});
                await User.updateOne({resetPasswordToken:req.params.id}, {$set:{resetPasswordToken:"", resetPasswordExpire:""}});
                res.status(200).json({
                    success:true,
                    message:"Password Changed Successfully!",
                });
            }
        }else{
            res.status(400).json({
                success:false,
                message:"Confirm password incorrect!",
            });
        }

    }else{
        res.status(400).json({
            success:false,
            message:"invalid password reset token or has been expired!",
        });
    }
    } catch (err) {
        res.status(400).json({
            success:false,
            message:"There was a server error!",
            error:err.message
        });
    }
 
}




// export default
module.exports ={
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword
}