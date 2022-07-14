const express = require("express");
const path=require("path");
const mysql=require("mysql");
const dotenv= require("dotenv");
const cookieParser= require("cookie-parser");
const handle= require('express-handlebars');



const app= express();

const publicDir= path.join(__dirname, './public');
app.use(express.static(publicDir));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');
app.engine('hbs', handle.engine({
    layoutsDir: __dirname+ '/views/layouts/',
    extname:'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname+ '/views/partials/'
}));
// hbs.registerHelper('if_eq', function(a, b, opts) {
//     if(a == b)
//         return opts.fn(this);
//     else
//         return opts.inverse(this);
// });

app.use('/', require('./routes/pages.js'));
app.use('/auth',require('./routes/auth'));

app.listen(5007,()=>{
    console.log("Server started on port 5005");
}) 