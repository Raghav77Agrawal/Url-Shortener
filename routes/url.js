const express = require('express');
const router = express.Router();
const {handlegeneratenewurl, handledataanalytics} = require("../controller/url");
router.post('/', handlegeneratenewurl);
router.get('/analytics/:shortid', handledataanalytics);
module.exports = router;