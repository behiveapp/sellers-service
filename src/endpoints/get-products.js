const Seller = require('../lib/model/seller');
const {fetchSellerProducts} = require('../lib/services/products-service');

const getProducts = async (req, res) => {
  try{
    const seller = await Seller.findOne({identifier: req.params.id});
    const products = await fetchSellerProducts(seller);
    res.json(products);
  }catch(err){
    const errStatusCode = err.status || 500;
    const errType = err.name || 'ErrorUnknown';

    res.status(errStatusCode);
    console.error(`${errType} - `, err);
    res.end();
  }


};

module.exports = {
  getProducts
}