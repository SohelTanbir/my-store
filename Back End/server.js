const express = require("express");
const app  = express();
app.use(express.json());

// dotenv config file
require("dotenv").config();

//internal requies 
const connectDatabase = require("./config/DatabaseConnection");

// database Connection
connectDatabase();

// All routes
const productsRoute = require("./routes/productsRoute");
const categoryRoute =  require("./routes/categoryRoute");

// product 
app.use("/api/v1", productsRoute);
// category
app.use("/api/v1", categoryRoute);



// default error handler
// default Error Handler
const errorHandler  = (err, req, res, next)=>{
    if(req.headersSent){
         return next(err)
    }
    res.status(500).json({error:err})
     
 }

 app.use(errorHandler);

// App Listener
app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server Listening on Port ${process.env.PORT || 8080}`);
})