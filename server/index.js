const express = require ('express');
const mongoose = require('mongoose');
const todoitems = require('./models/todoitems');
const dotenv = require ('dotenv').config;

const app = express();
//use express.jso() to get data into the json format
app.use (express.json());
//conect to mongo db


//port
const PORT = process.env.PORT || 5500;
//import routers
 const TodoItemRoute = require('./routes/todoitems');

//connect to mongodb
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("database connect"))
.catch(err=> console.log(err))
// add port connecting to the server.
app.listen(PORT, ()=> console.log("Server connected"));

app.use('/',TodoItemRoute);