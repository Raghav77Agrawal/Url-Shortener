const mongoose = require("mongoose");
const urlScehma = new mongoose.Schema({
shortid:{
    type:String,
    unique:true,
    required:true
},
redirecturl:{
    type:String,
    required:true
},
visithistory:[{
    timestamp:{type:Number}
}]
,
createdBy:{
type:mongoose.Schema.Types.ObjectId,
ref:'users'
},
},
{timestamps:true})
const url = mongoose.model("url", urlScehma);
module.exports = url;