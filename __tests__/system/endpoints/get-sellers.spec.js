const request = require('supertest');
const app = require('../../../src/app');
const {mockSellers, extractSellers} = require('../../utils/sellers');

describe('GET / endpoint', () => {
  it('Should return 200 status', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('Should return the correct json', async () => {
    const response = await request(app).get('/');
    const sellers = extractSellers(response.body);

    expect(response.body.length).toBe(2);
    expect(sellers).toEqual(mockSellers);
  });
});