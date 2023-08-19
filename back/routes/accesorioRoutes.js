
const express = require('express');
const router = express.Router();

const accesorieController = require('./controllers/accesorioController')


router.post('/', accesorieController.createAccessoryWithQRCode);



module.exports = router;