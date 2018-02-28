const Seller = require('../../src/lib/model/seller');
const mongoose = require('mongoose');


const initializeSellers = () => {
  const data = [{
    full_name: 'Império das Grifes LTDA',
    short_name: 'Império das Grifes',
    identifier: '01001001000113'
  },
  {
    full_name: 'Computei Consultoria SA',
    short_name: 'Computei Consultoria',
    identifier: '02002002000226'
  }];

  return Promise.all(data.map(async (seller) => {
    return new Seller(seller).save()
  }));
}


const clearSellers = () => {
  return new Promise(resolve => {
    mongoose.connection.db.dropCollection('sellers');
    resolve();
  });
}

const mockSellers = [{
  full_name: 'Império das Grifes LTDA',
  short_name: 'Império das Grifes',
  identifier: '01001001000113'
},
{
  full_name: 'Computei Consultoria SA',
  short_name: 'Computei Consultoria',
  identifier: '02002002000226'
}];

const extractSellers = (sellers) => {
  const extractFields = ['full_name', 'short_name', 'identifier'];

  return sellers.map(seller => {
    return Object.keys(seller).reduce((acc, field) => {
      if(extractFields.includes(field)){
        acc[field] = seller[field];
      }
      return acc;
    }, {});
  });
}

module.exports = {
  initializeSellers,
  clearSellers,
  mockSellers,
  extractSellers
}