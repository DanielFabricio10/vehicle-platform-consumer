const vehicleService = require('../services/vehicleService');

const registerVehicle = async (req, res) => {
  try {
    const vehicleData = req.body; 
    const result = await vehicleService.registerVehicle(vehicleData); 
    res.status(201).json({ message: 'Veículo cadastrado com sucesso', data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao cadastrar veículo', error: error.message });
  }
};

const updateVehicle = async (req, res) => {
  const renavam = req.params.renavam;
  const vehicleData = req.body;

  if (!renavam) {
    return res.status(404).json({ message: 'Veículo não encontrado' });
  }

  try {
    const result = await vehicleService.updateVehicle(renavam, vehicleData);

    if (!result || (Object.keys(result).length === 0 && result.constructor === Object)) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }

    // Caso a atualização seja bem-sucedida
    res.status(200).json({ message: 'Veículo atualizado com sucesso', data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar veículo', error: error.message });
  }
};


const listVehicles = async (req, res) => {
  const { status, order } = req.query;

  try {
    const result = await vehicleService.listVehicles(status, order); 
    res.status(201).json({ data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao consultar veiculos', error: error.message });
  }
}

module.exports = {
  registerVehicle,
  updateVehicle,
  listVehicles
};
