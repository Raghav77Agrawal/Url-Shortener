const express= require('express');
const {handlenewuser, handleexistinguser} = require('../controller/users')
const router  = express.Router();

router.post('/', handlenewuser);
router.post('/t', handleexistinguser);

module.exports = router;