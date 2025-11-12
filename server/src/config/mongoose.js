const mongoose = require("mongoose");
const dotenv = require("dotenv");

// dotenv config
dotenv.config();
console.log( process.env.MONGO_DB_URI,"<= this is the mongo db server id nd  password")
mongoose.connect(
    process.env.MONGO_DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },() => {
        console.log("Connected to Database");
    } 
); 