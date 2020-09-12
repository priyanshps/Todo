const mongoose      = require('mongoose');
const express       = require('express');
const app           = express();
const bodyParser    = require("body-parser");
const addRoutes     = require("./routes/todo");
require('dotenv').config()

mongoose.connect(process.env.DATABASE,
{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,

}).then(()=>{
    console.log("DB CONNECTED")
})


//Middleware
app.use(bodyParser.json());


//Routes
app.use("/api",addRoutes)


const port = process.env.PORT || 8000;



//Starting a servers
app.listen(port, ()=>{
    console.log(`App is running at ${port}`)
})