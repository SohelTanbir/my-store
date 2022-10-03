const express = require("express");
const app  = express();




// routes
app.get("/", (req, res)=>{
    res.send("Welcome to Back End Development with MERN!");
})



// App Listener
app.listen(5000, ()=>{
    console.log(`Server Listening on Port 5000`);
})