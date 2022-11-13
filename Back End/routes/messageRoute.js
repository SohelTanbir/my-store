const express = require("express");
const checkLogin = require("../middleware/checkLogin");
const router  = express.Router();


// import message controller
const { createMessage, getAllMessage, deleteMessage } = require("../controllers/messageController");



// message routes
router.get("/message/all", checkLogin, getAllMessage);
router.post("/message/create", createMessage);
router.delete("/message/delete/:id", deleteMessage);





//' export router
module.exports = router;