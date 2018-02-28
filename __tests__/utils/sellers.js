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
  
  // return new Promise(resolve => {
  //   for(let i = 1; i <= data.length; i++){
  //     new Seller(data[i]).save()
  //     .then(response => {console.log("Document inserted successfully")})
  //     .catch(err => {console.log});

  //     if(i === data.length) resolve();
  //   }
  // });
}


const clearSellers = () => {
  return new Promise(resolve => {
    mongoose.connection.db.dropCollection('sellers');
    resolve();
  });
}

module.exports = {
  initializeSellers,
  clearSellers
}