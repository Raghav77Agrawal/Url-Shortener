
const {getuser} = require('../servie/auth');
async function restricttologgedinuseronly(req, res, next){
    const useruid = req.cookies?.uid;
    if(!useruid){
        return res.redirect('/login');
    }
    const user = getuser(useruid);
    if(!user){
        return res.redirect('/login');
    }
    req.user = user;
    next();
}
async function checkauth(req, res,next){
    const useruid = req.cookies?.uid;
    const user = getuser(useruid);
    req.user = user;
    next();
}
module.exports = {restricttologgedinuseronly,checkauth};