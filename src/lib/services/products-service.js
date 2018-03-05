const axios = require('axios');

const fetchSellerProducts = async (sellerIdentifier) => {
  const endpoint = _getEndpoint(sellerIdentifier);
  
  try{
    const products = await axios.get(endpoint);
    console.log(response);
  } catch(err) {
    console.log(err);
  }
};

const _getEndpoint = (sellerIdentifier) => {
  const {PRODUCTS_SERVICE_HOST} = process.env;
  return `${PRODUCTS_SERVICE_HOST}/from-seller/${sellerIdentifier}`;
};

module.exports = {
  fetchSellerProducts
}