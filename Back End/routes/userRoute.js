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
router.get("/users/all", getAllUsers);
router.post("/users/signup", createUser);
router.get("/users/one/:id", getUserById);
router.delete("/users/delete/:id", deleteUser);
router.post("/users/login", loginUser);
router.post("/users/password/forgot", forgotPassword);
router.post("/users/password/reset/:id", resetPassword);
router.get("/users/logout", logoutUser);


//export default
module.exports = router;