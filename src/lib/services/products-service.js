const fetch = require('node-fetch');

const fetchSellerProducts = async (seller) => {
  const endpoint = _getEndpoint(seller.identifier);
  
  try{
    const response = await fetch(endpoint);
    console.log(response.ok);
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err, ">>>>");
  }
};

const _getEndpoint = (sellerIdentifier) => {
  const {PRODUCTS_SERVICE_HOST} = process.env;
  return `http://${PRODUCTS_SERVICE_HOST}/from-seller/${sellerIdentifier}`;
};

module.exports = {
  fetchSellerProducts
}