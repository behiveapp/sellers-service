const SellersService = require('../lib/services/sellers');
const Seller = require('../lib/model/seller');

const getSellers = async (req, res) => {
  const sellers = SellersService.getAll();


  Seller.find().then(console.log)
//   const testSeller = new Seller({identifier: 'bbbc'});
//   await testSeller.save();
// Seller.collection.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// });

  res.json(sellers);
};

module.exports = {
  getSellers
}