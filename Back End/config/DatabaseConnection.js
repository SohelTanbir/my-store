const mongoose = require("mongoose");

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI, {}, (data)=>{
        console.log("Database Connected");
    })
}






// export module
module.exports = connectDatabase;