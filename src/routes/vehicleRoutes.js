const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/', vehicleController.registerVehicle);
router.put('/:renavam', vehicleController.updateVehicle);
router.get('/', vehicleController.listVehicles);

module.exports = router;
