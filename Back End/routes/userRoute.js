const express =  require("express");
const { createUser, getAllUsers, deleteUser, loginUser, logoutUser } = require("../controllers/usersController");
const checkLogin = require("../middleware/checkLogin");
const router  = express.Router();


// users routes
router.get("/users/all", checkLogin, getAllUsers);
router.post("/users/signup", createUser);
router.delete("/users/delete/:id", deleteUser);
router.post("/users/login", loginUser);
router.get("/users/logout", logoutUser);


//export default
module.exports = router;