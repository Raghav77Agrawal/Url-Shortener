const ShortUniqueId = require("short-unique-id");

const uid = new ShortUniqueId({length:8});
const url = require("../models/url");
async function handlegeneratenewurl(req,res){
const shortid = uid.rnd();
const body = req.body;
if(!body.url){
    return res.status(400).json({error: 'url is required'});
}
 await url.create({
    shortid:shortid,
    redirecturl: body.url,
    timestamp:[],
    createdBy:req.user._id,
})
return res.render('home', {id:shortid});
}

async function handledataanalytics(req,res){
    const shortid = req.params.shortid;
    const result = await url.findOne({shortid});
    return res.json(
        {
            clicks: result.visithistory.length,
            analytics:result.visithistory
        }
    )
}
module.exports = {
    handlegeneratenewurl,
    handledataanalytics
}