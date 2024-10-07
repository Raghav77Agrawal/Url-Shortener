const Sessionidtousermap = new Map();
function setuser(id, user){
Sessionidtousermap.set(id,user)
}
 function getuser(id){
    return Sessionidtousermap.get(id);
}
module.exports = {getuser, setuser};