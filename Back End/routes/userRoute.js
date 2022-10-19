const express =  require("express");
const { createUser, getAllUsers } = require("../controllers/usersController");
const router  = express.Router();


// users routes
router.get("/users/all", getAllUsers);
router.post("/users/create", createUser);


//export default
module.exports = router;