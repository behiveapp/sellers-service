const request = require('supertest');
const app = require('../../../src/app');

describe('GET / endpoint', () => {
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

  it('Should return 200 status', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('Should return the correct json', async () => {
    const response = await request(app).get('/');
    expect(response.body).toEqual(mockSellers);
  });
});