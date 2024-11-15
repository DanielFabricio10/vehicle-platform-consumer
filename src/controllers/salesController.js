const salesService = require('../services/salesService');

const registerSale = async (req, res) => {
  try {
    const salesData = req.body; 
    const result = await salesService.registerSale(salesData); 
    res.status(201).json({ message: 'Venda registrada com sucesso', data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar venda', error: error.message });
  }
};

const updateSale = async (req, res) => {
  try {
    const {payment, status} = req.params;
    const result = await salesService.updateSale(payment, status); 
    res.status(201).json({ message: 'Venda atualizada com sucesso', data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar venda', error: error.message });
  }
};

module.exports = {
    registerSale,
    updateSale
  };