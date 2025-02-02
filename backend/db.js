const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://rp8550495:cyv2Pa6DhAVr6RIv@cluster0.vaam6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDb = ()=>{
    mongoose.connect(DB_URL).then(()=>{
        console.log("database connected");
    }).catch((e)=>{
        console.log(e);
    })
}

module.exports = connectToDb;

// cyv2Pa6DhAVr6RIv
