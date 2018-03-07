const axios = require('axios');

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
    try{
      await axios.post(`http://${PRODUCTS_SERVICE_HOST}`, product);
    } catch(err){
      console.log(err.response);
    }
  });

}

const clearProducts = async () => {
  const {PRODUCTS_SERVICE_HOST} = process.env;
  const codes = ['PROD01', 'PROD02', 'PROD03'];

  codes.forEach( async (code) => {
    await axios.delete(`http://${PRODUCTS_SERVICE_HOST}/${code}`);
  });
}

module.exports = {
  initializeProducts,
  clearProducts
};