const express = require ('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/maps.controller')

router.get('/get-coordinates', authMiddleware.authUser, getCoordinate)

module.exports = router