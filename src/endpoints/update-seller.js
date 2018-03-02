const Seller = require('../lib/model/seller');

const updateSeller = async (req, res) => {
  console.log(">>>>>");
  try{

    const seller =  await Seller.update({identifier: req.params.id}, req.body);
    if(!seller) res.send(404);
    console.log(seller);
    res.json(seller);
  }catch(e){
    console.log(e);
    res.status(422);
    res.json(e);
  }

};

module.exports = {
  updateSeller
}