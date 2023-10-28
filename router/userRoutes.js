const express = require('express')
const router = express.Router()
const userCont= require ('../controllers/userCont');
const user = require('../models/user');

router.post('/',userCont.allUsers)
router.post('/add', userCont.createUser);
  

module.exports = router