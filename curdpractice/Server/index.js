const dotenv = require("dotenv");
const express = require('express');
const app= express();

dotenv.config({path : "./config.env"});
require('./db/conn')
app.use(express.json());
const PORT = process.env.PORT;

app.use(require('./routes/router'))


app.get('/',(req,res) =>{
    res.send("Hello World form the server");
});



app.listen(PORT, () =>{
    console.log(`server is running at port ${PORT}`);
});