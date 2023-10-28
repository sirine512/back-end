const express = require('express')
const router = express.Router()
const contactCont = require ('../controllers/contactCont')

router.post('/reserve',contactCont.createcontact)


module.exports = router