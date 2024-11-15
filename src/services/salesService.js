const axios = require('axios');

const registerSale = async (saleData) => {
    try {
      const response = await axios.post(`http://app:3000/api/sales`, saleData);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao registrar venda: ${error.message}`);
    }
};

const updateSale = async (payment, status) => {
    try {
      const response = await axios.patch(`http://app:3000/api/sales/update-status/${payment}/${status}`);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao atualizar venda: ${error.message}`);
    }
  };

module.exports = {
    registerSale,
    updateSale
};