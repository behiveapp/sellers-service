const SellersService = require('../lib/services/sellers');

const getSeller = (req, res) => {
  const seller = SellersService.find(req.params.id);

  if(seller){
    res.json(seller);
  } else{
    res.sendStatus(404);
  }

};

module.exports = {
  getSeller
}