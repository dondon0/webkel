const express= require("express");
const authController= require('../controllers/auth.js');
const router= express.Router();
const mysql=require("mysql");
var dbjs= require('../db.js');
var db=dbjs.db


router.get('/',(req,res)=>{
    db.query('SELECT * FROM artikel',(err,resu)=>{
        console.log(resu);
        if(err){
            console.log(err);
        }else{
            res.render('home',{
                resu:resu
            });
        }
    })
    
});

router.get('/kontak',(req,res)=>{
    res.render('kontak',{layout:'index'});
});

router.get('/admin',(req,res)=>{
    res.render('admin',{layout:'index'});
});

router.get('/pemerintahan',(req,res)=>{
    res.render('pemerintahan',{layout:'index'});
});

router.get('/profil',(req,res)=>{
    res.render('profil',{layout:'index'});
});

router.get('/inputArtikel',(req,res)=>{
    
    res.render('artikelInput',{layout:'index'});
});



module.exports=router;
