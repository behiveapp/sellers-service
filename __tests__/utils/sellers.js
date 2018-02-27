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

  data.forEach(seller => {
    new Seller(seller).save()
    .then(console.log)
    .catch(console.log)
  });
}


const clearSellers = () => {
  mongoose.connection.db.dropCollection('sellers')
}

module.exports = {
  initializeSellers,
  clearSellers
}