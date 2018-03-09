const axios = require('axios');
const mongoose = require("mongoose");

const initializeProducts = async () => {
  const {PRODUCTS_SERVICE_HOST} = process.env;

  const data = [{
    code: 'PROD01',
    name: 'Product 1',
    seller_identifier: '01001001000113'
  },
  {
    code: 'PROD02',
    name: 'Product 2',
    seller_identifier: '02002002000226'
  },
  {
    code: 'PROD03',
    name: 'Product 3',
    seller_identifier: '02002002000226'
  }];

  data.forEach(async (product) => {
    const r = await axios.post(`http://${PRODUCTS_SERVICE_HOST}`, product);
  });

}

const clearProducts = async () => {
  const {PRODUCTS_SERVICE_HOST} = process.env;
  
  const {data: products} = await axios.get(`http://${PRODUCTS_SERVICE_HOST}/`);
  products.forEach( async ({code}) => {
    await axios.delete(`http://${PRODUCTS_SERVICE_HOST}/${code}`);
  });
}

module.exports = {
  initializeProducts,
  clearProducts
};