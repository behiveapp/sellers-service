const request = require('supertest');
const app = require('../../../src/app');

describe('GET /:id endpoint', () => {
  const mockSellers = [{
    _id: 'an0vd87450dvn507',
    full_name: 'Império das Grifes LTDA',
    short_name: 'Império das Grifes',
    identifier: '01001001000113'
  },
  {
    _id: '9t8ni6niy570y52bvtf',
    full_name: 'Computei Consultoria SA',
    short_name: 'Computei Consultoria',
    identifier: '02002002000226'
  }];

  it('Should return 200 status if seller was found', async () => {
    const response = await request(app).get('/an0vd87450dvn507');
    expect(response.statusCode).toBe(200);
  });

  it('Should return the correct seller if it was found', async () => {
    const response = await request(app).get('/an0vd87450dvn507');
    expect(response.body).toEqual({
      _id: 'an0vd87450dvn507',
      full_name: 'Império das Grifes LTDA',
      short_name: 'Império das Grifes',
      identifier: '01001001000113'
    });
  });

  it('Should return the correct seller if it wasn`t found', async () => {
    const response = await request(app).get('/123');
    expect(response.statusCode).toBe(404);
  });
});