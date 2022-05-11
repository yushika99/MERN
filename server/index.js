const express = require ('express');
const mongoose = require('mongoose');
const todoitems = require('./models/todoitems');
const dotenv = require ('dotenv').config ({path:'/.env'});


const app = express();
//use express.jso() to get data into the json format
app.use (express.json());
//conect to mongo db


//port
const PORT = process.env.PORT || 5500;
//import routers
 const TodoItemRoute = require('./routes/todoitems');
console.log(process.env.MONGOURL)
console.log(process.env.PORTL)

//connect to mongodb
mongoose.connect("mongodb+srv://yushika:1234yushika@cluster0.gqkve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("database connect"))
.catch(err=> console.log(err))
;

// add port connecting to the server.
app.listen(PORT, ()=> console.log("Server connected"));

app.use('/',TodoItemRoute);

