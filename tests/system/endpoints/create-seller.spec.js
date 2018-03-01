const request = require('supertest');
const app = require('../../../src/app');
const {initializeSellers, clearSellers, mockSellers, extractSellers} = require('../../utils/sellers');
const mongoose = require('mongoose');

describe('POST / endpoint', () => {
  beforeAll(() => {
    const {MONGO_URL = 'localhost:3001/sellers-test'} = process.env;
    var options = { server: { socketOptions: { keepAlive: 1 } } };
    mongoose.connect(MONGO_URL, options);
  });

  beforeEach(async () => {
    await clearSellers();
  });

  fit('Should return 200 status if seller was created', async () => {
    const response = await request(app).post('/').send({identifier: '01001001000113'});
    expect(response.statusCode).toBe(200);
  });

  it('Should return the correct seller if it was found', async () => {
    const response = await request(app).post('/').send({identifier: '01001001000113'});
    const {full_name, short_name, identifier} = response.body;
    
    expect(full_name).toBe('Computei Consultoria SA');
    expect(short_name).toBe('Computei Consultoria');
    expect(identifier).toBe('02002002000226');
  });

  // it('Should return the correct seller if it wasn`t found', async () => {
  //   const response = await request(app).get('/123');
  //   expect(response.statusCode).toBe(404);
  // });
});