const Seller = require('../lib/model/seller');

const createSeller = async (req, res) => {
  console.log(req);
  console.log(req.body);
  console.log(req.data);
  console.log(req.params);
  console.log(req.query);
  const seller = new Seller(req.body);

  try{
    await seller.save();
    res.json(seller);
  } catch(e){
    res.status(422);
    res.json(e);
  }

};

module.exports = {
  createSeller
}