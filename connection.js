const mongoose = require('mongoose');
async function connectfunction(url){
return mongoose.connect(url);
}
module.exports = {connectfunction,};