const express = require('express');
const url = require('../models/url');
const Routers = express.Router();
Routers.get('/' , async (req,res)=>{
if(!req.user){
    return res.redirect('/login');
}
    const urls = await url.find({createdBy:req.user._id});

    return res.render('home',{myurl:urls});
})
Routers.get('/signup', (req,res)=>{
    return res.render('signup');
})
Routers.get('/login', (req, res)=>{
    return res.render('login');
} )
module.exports = Routers;