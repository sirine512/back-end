const express = require('express')
const router = express.Router()
const propertyCont = require ('../controllers/propertyCont')

router.post('/all',propertyCont.allProperties)
router.post('/add',propertyCont.createProperty)
router.get('/all',propertyCont.all)
router.get('/buy',propertyCont.buy)
router.get('/rent',propertyCont.rent)
router.get('/byid/:id',propertyCont.findId)
router.get('/search',propertyCont.search)
router.post('/buy/filter', propertyCont.buyFilter)
router.post('/rent/filter', propertyCont.rentFilter)


module.exports = router