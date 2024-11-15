const request = require('supertest');
const { server } = require('../app'); 
const vehicleService = require('../src/services/vehicleService');

jest.mock('../src/services/vehicleService'); 

describe('Testes para o VehicleController', () => {
  afterAll((done) => {
    server.close(done); 
  });

  it('Deve cadastrar um veículo com sucesso', async () => {
    const vehicleData = { renavam: '123456789', model: 'Fusca', year: 1980 };

    vehicleService.registerVehicle.mockResolvedValue(vehicleData); 

    const response = await request(server)
      .post('/api/vehicles')
      .send(vehicleData);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Veículo cadastrado com sucesso');
  });

  it('Deve retornar erro ao tentar cadastrar veículo', async () => {
    const vehicleData = { renavam: '123456789', model: 'Fusca', year: 1980 };

    vehicleService.registerVehicle.mockRejectedValue(new Error('Erro ao cadastrar veículo'));  

    const response = await request(server)
      .post('/api/vehicles')
      .send(vehicleData);

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Erro ao cadastrar veículo');
  });

  it('Deve atualizar um veículo com sucesso', async () => {
    const renavam = '123456789';
    const vehicleData = { model: 'Fusca', year: 1980, color: 'blue' };

    vehicleService.updateVehicle.mockResolvedValue({
      message: 'Veículo atualizado com sucesso',
      data: vehicleData
    }); 

    const response = await request(server)
      .put(`/api/vehicles/${renavam}`)
      .send(vehicleData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Veículo atualizado com sucesso');
  });

  it('Deve retornar erro ao tentar atualizar um veículo com RENAVAM inexistente', async () => {
    const renavamInexistente = null;  
    const vehicleData = { model: 'Fusca', year: 1980, color: 'blue' };
    vehicleService.updateVehicle.mockResolvedValue(null); 

    const response = await request(server)
      .put(`/api/vehicles/${renavamInexistente}`)
      .send(vehicleData);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Veículo não encontrado');
  });
  
});
