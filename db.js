const express = require("express");
const path=require("path");
const mysql=require("mysql");
const dotenv= require("dotenv");
const cookieParser= require("cookie-parser");
const handle= require('express-handlebars');

config={
    host: "localhost",
    user: "root",
    password: "",
    database:"webkel"
  };

var db=mysql.createConnection(config);
db.connect(function(err){
    if(err){
        console.log('DB error: '+err);
    }
    console.log('DB Connection success')
});

module.exports={
    db : mysql.createConnection(config)
}

