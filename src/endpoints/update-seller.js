const Seller = require('../lib/model/seller');

const updateSeller = async (req, res) => {
  const {body: requestBody} = req;
  try{
    const seller =  await Seller.findOne({identifier: req.params.id}, requestBody);
    Object.keys(requestBody).forEach((field) => {seller[field] = requestBody[field]});
    await seller.save();

    res.json(seller);
  }catch(err){
    console.log(err);
    const errStatusCode = err.status || 500;
    const errType = err.name || 'ErrorUnknown';

    res.status(errStatusCode);
    console.error(`${errType} - `, err);
    res.end();
  }

};

module.exports = {
  updateSeller
}