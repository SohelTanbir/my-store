const express =  require("express");
const { createUser, getAllUsers, deleteUser, loginUser } = require("../controllers/usersController");
const router  = express.Router();


// users routes
router.get("/users/all", getAllUsers);
router.post("/users/signup", createUser);
router.delete("/users/delete/:id", deleteUser);
router.post("/users/login", loginUser);


//export default
module.exports = router;