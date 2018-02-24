const SellersService = require('../lib/services/sellers');

const getSellers = (req, res) => {
  const sellers = SellersService.getAll();

  res.json(sellers);
};

module.exports = {
  getSellers
}