const express =  require("express");
const { 
    createUser,
    getAllUsers, 
    deleteUser, 
    loginUser, 
    logoutUser, 
    forgotPassword, 
    resetPassword, 
    getUserById } = require("../controllers/usersController");
const checkLogin = require("../middleware/checkLogin");
const router  = express.Router();


// users routes
router.get("/users/all",checkLogin, getAllUsers);
router.post("/users/signup", createUser);
router.get("/users/one/:id",checkLogin, getUserById);
router.delete("/users/delete/:id",checkLogin, deleteUser);
router.post("/users/login", loginUser);
router.post("/users/password/forgot", checkLogin,forgotPassword);
router.post("/users/password/reset/:id",checkLogin, resetPassword);
router.get("/users/logout",checkLogin, logoutUser);


//export default
module.exports = router;