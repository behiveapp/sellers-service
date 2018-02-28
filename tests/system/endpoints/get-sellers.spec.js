const request = require('supertest');
const app = require('../../../src/app');
const {initializeSellers, clearSellers, mockSellers, extractSellers} = require('../../utils/sellers');
const mongoose = require('mongoose');

describe('GET / endpoint', () => {
  beforeAll(() => {
    const {MONGO_URL = 'localhost:3001/sellers-test'} = process.env;
    var options = { server: { socketOptions: { keepAlive: 1 } } };
    mongoose.connect(MONGO_URL, options);
  });

  beforeEach(async () => {
    await initializeSellers();
  });

  afterEach(async () => {
    await clearSellers();
  });

  it('Should return 200 status', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('Should return the correct json', async () => {
    const response = await request(app).get('/');

    expect(response.body.length).toBe(2);
  });
});