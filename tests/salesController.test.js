const request = require('supertest');
const { server } = require('../app'); 

const salesService = require('../src/services/salesService');

jest.mock('../src/services/salesService');

describe('Sales Controller', () => {
  afterAll((done) => {
    server.close(done); 
  });

  it('Deve registrar uma venda com sucesso', async () => {
    const salesData = { cpfCnpj: '55566699978', nomeCliente: 'João', renavam: '11122233300' };
    salesService.registerSale.mockResolvedValue(salesData);

    const response = await request(server)
      .post('/api/sales')
      .send(salesData);

    expect(response.status).toBe(201);
  });

  it('Deve retornar erro caso falhe ao registrar a venda', async () => {
    salesService.registerSale.mockRejectedValue(new Error('Erro ao registrar venda'));

    const response = await request(server)
      .post('/api/sales')
      .send({});

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Erro ao registrar venda');
  });

  it('Deve atualizar uma venda com sucesso', async () => {
    const saleData = { status: 'concluída' };
    const payment = '12345';  
    const status = 'concluída';
    
    salesService.updateSale = jest.fn().mockResolvedValue({ ...saleData, payment, status });
    
    const response = await request(server)
      .patch(`/api/sales/${payment}/${status}`)
      .send(saleData);
    
    expect(response.status).toBe(201);
  });

  it('Deve retornar erro ao tentar atualizar uma venda inexistente', async () => {
    const saleData = { status: 'cancelada' };
    const payment = '67890';  
    const status = 'cancelada';

    // Mocka erro de venda não encontrada
    salesService.updateSale = jest.fn().mockRejectedValue(new Error('Erro ao atualizar venda'));
    
    const response = await request(server)
      .patch(`/api/sales/${payment}/${status}`);
    
    expect(response.status).toBe(500); 
    expect(response.body.message).toBe('Erro ao atualizar venda');
  });

});