const Users = require('../models/users');
const {v4:uuidv4} = require('uuid')
const {setuser} = require('../servie/auth')
async function handlenewuser(req, res){
    const {username, password, email} = req.body;
await Users.create({username,password,email});
return res.redirect('/');
}
async function handleexistinguser(req,res){
   
    const {username,password} = req.body;
    const user =  await Users.findOne({username,password});

    if(!user){
    return  res.render('login' , {error:"Invalid username or Password"});
}
const session = uuidv4();
setuser(session,user);
res.cookie('uid', session);
    return res.redirect('/');

}
module.exports = {handlenewuser, handleexistinguser};