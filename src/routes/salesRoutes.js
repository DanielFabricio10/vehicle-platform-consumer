const express = require('express');
const router = express.Router();
const salesControler = require('../controllers/salesController');

router.post('/', salesControler.registerSale);
router.patch('/:payment/:status', salesControler.updateSale);

module.exports = router;
