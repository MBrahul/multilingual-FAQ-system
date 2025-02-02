const express = require('express');
const connectToDb = require('./db');
const app = express();
const PORT = 5500;
app.use(express.json());

connectToDb();


app.get("/",(req,res)=>{
    res.json({
        name:"Akshita Saini",
        city:"Thoi"
    })
})

app.use('/api/faqs',require("./routes/faq"));

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
});