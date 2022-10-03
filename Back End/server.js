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


app.use("/api/v1", productsRoute)



// default error handler
app.use((err, req, res)=>{
    if(err){
        console.log(err);
    }
})

// App Listener
app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server Listening on Port ${process.env.PORT || 8080}`);
})