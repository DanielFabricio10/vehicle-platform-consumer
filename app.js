const express = require('express');
const app = express();
const vehicleController = require('./src/controllers/vehicleController');
const salesController = require('./src/controllers/salesController');

// Configure o Express, suas rotas e middlewares
app.use(express.json());
app.post('/api/vehicles', vehicleController.registerVehicle);
app.put('/api/vehicles/:renavam', vehicleController.updateVehicle);
app.get('/api/vehicles', vehicleController.listVehicles);

app.post('/api/sales', salesController.registerSale);
app.patch('/api/sales/:payment/:status', salesController.updateSale);

const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = { app, server };
