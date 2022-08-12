const { request } = require("express");
const mysql=require("mysql");
const jwt= require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const {promisify}= require('util');
var dbjs= require('../db.js');
var db=dbjs.db

exports.pusharticles= (req,res)=>{
    console.log(req.body);
    const {judul,writter,isi}=req.body;
    
    db.query('INSERT INTO artikel SET?',{title:judul,writter:writter,isi:isi},(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            return res.render('artikelInput',{
                message:'Article Added'
            });
        }
    })
    
}

exports.login= async (req,res)=>{
    try {
        const {email, password}= req.body;

        if(!email || !password){
            return res.status(400).render('login',{
                message:"Please enter email and password"
            })
        }

        db.query('SELECT * FROM users where email= ? ',[email],async (error,results)=>{
            console.log(results);
            if(error){
                console.log(error);
            }
            if(!results || !(await bcrypt.compare(password,results[0].password))){
                res.status(401).render('login',{
                    message:'Incorrect email or password'
                })
            }
            else{
                const id= results[0].id;

                const token= jwt.sign({ id }, process.env.JWT_SECRET,{
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("Token is: "+token);

                const cookieOptions={
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES*24*60*60*1000
                    ),
                    httpOnly: true
                }

                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect("/");
            }

        })


    } catch (error) {
        console.log(error);
    }
}

