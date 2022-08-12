const express= require("express");
const authController= require('../controllers/auth');
const router= express.Router();

router.post('/inputArtikel',authController.pusharticles);

module.exports=router;
