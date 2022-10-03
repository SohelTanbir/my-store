const express = require("express");
const app  = express();

// dotenv config file
require("dotenv").config();

//internal requies 
const connectDatabase = require("./config/DatabaseConnection");



// database Connection
connectDatabase();

// routes
app.get("/", (req, res)=>{
    res.send("Welcome to Back End Development with MERN!");
})



// App Listener
app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server Listening on Port ${process.env.PORT || 8080}`);
})