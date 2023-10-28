const express = require('express')
const router = express.Router()
const authCont= require('../controllers/authCont')

router.post('/',authCont.login)


module.exports = router