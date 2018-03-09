const request = require('supertest');
const app = require('../../../src/app');
const {initializeSellers, clearSellers, mockSellers, connectMongo} = require('../../utils/sellers');
const { initializeProducts, clearProducts } = require('../../utils/products');
const mongoose = require('mongoose');

describe('GET /:id/get-products endpoint', () => {
  beforeAll(() => {
    connectMongo();
  });

  beforeEach(async () => {
    await clearSellers();
    await clearProducts();
    await initializeSellers();
    await initializeProducts();
  });

  it('Should return 200 status if seller was found', async () => {
    const response = await request(app).get('/02002002000226/get-products');
    expect(response.statusCode).toBe(200);
  });

  it('Should return the correct response', async () => {
    const response = await request(app).get('/02002002000226/get-products');
    expect(response.body.length).toBe(2);
  });

  it('Should return the correct status if it wasn`t found', async () => {
    const response = await request(app).get('/123/get-products');
    expect(response.statusCode).toBe(404);
  });
});