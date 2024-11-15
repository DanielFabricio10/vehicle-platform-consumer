const axios = require('axios');

const registerVehicle = async (vehicleData) => {
  try {
    const response = await axios.post('http://app:3000/api/vehicles', vehicleData);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao registrar veículo: ${error.message}`);
  }
};

const updateVehicle = async (renavam, vehicleData) => {
  try {
    const response = await axios.put(`http://app:3000/api/vehicles/${renavam}`, vehicleData); 
    
    if(!response) {
      throw new Error(`Erro ao atualizar veículo`);
    }

    return response.data;
  } catch (error) {
    throw new Error(`Erro ao atualizar veículo: ${error.message}`);
  }
};

const listVehicles = async (status, order) => {
  try {
    const response = await axios.get(`http://app:3000/api/vehicles?status=/${status}&order=/${order}`); 
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao consultar veículos: ${error.message}`);
  }
};

module.exports = {
  registerVehicle,
  updateVehicle,
  listVehicles
};
