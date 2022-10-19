const express =  require("express");
const { createUser, getAllUsers, deleteUser } = require("../controllers/usersController");
const router  = express.Router();


// users routes
router.get("/users/all", getAllUsers);
router.post("/users/create", createUser);
router.delete("/users/delete/:id", deleteUser);


//export default
module.exports = router;