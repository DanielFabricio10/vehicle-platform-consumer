const express = require('express');
const app = express();
const vehicleRoutes = require('./routes/vehicleRoutes');

app.use(express.json());
app.use('/api/vehicles', vehicleRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
