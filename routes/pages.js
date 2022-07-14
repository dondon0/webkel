const express= require("express");
const authController= require('../controllers/auth.js');
const router= express.Router();
const mysql=require("mysql");


router.get('/',(req,res)=>{
    var k=[];
    var data={
        title:'Web Baru Kalurahan Sabdo',
        konten: 'telah dibuat web baru'
    }


    k.push(data);
    //k.push(data1);
    res.render('home',{layout:'index',kons:k });
});

router.get('/kontak',(req,res)=>{
    res.render('kontak',{layout:'index'});
});

router.get('/pemerintahan',(req,res)=>{
    res.render('pemerintahan',{layout:'index'});
});

router.get('/profil',(req,res)=>{
    res.render('profil',{layout:'index'});
});


module.exports=router;
