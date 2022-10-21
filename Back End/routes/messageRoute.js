const express = require("express");
const { createMessage, getAllMessage, deleteMessage } = require("../controllers/messageController");
const checkLogin = require("../middleware/checkLogin");


const router  = express.Router();

// message routes
router.get("/message/all", checkLogin, getAllMessage);
router.post("/message/create", createMessage);
router.delete("/message/delete/:id", deleteMessage);









//' export router
module.exports = router;