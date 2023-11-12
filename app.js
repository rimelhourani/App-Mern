var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config()

const routerUsers = require('./routes/RouteUser')

var app = express();
const port = process.env.PORT
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://houranirima:rim123@cluster0.ckgbpbv.mongodb.net/?retryWrites=true&w=majority'
)
.then(()=>console.log('DB CONNECTED'))
.catch(err=>console.log(err.message))

app.use('/api', routerUsers)
app.listen(3700,()=>{
    console.log(`http//localhost:${port}`)
})

  

module.exports = app;
