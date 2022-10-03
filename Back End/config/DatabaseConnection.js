const mongoose = require("mongoose");

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }, ()=>{
        console.log("Database Connected");
    })
}






// export module
module.exports = connectDatabase;