const Seller = require('../lib/model/seller');

const getSeller = async (req, res) => {
  const seller = await Seller.findOne({identifier: req.params.id});

  if(seller){
    res.json(seller);
  } else{
    res.sendStatus(404);
  }

};

module.exports = {
  getSeller
}