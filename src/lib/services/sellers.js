class SellersService {
  static getAll(){
    return SellersService.mockSellers;
  }
}
SellersService.mockSellers = [
  {
    _id: 'an0vd87450dvn507',
    full_name: 'Império das Grifes LTDA',
    short_name: 'Império das Grifes',
    identifier: '01001001000113'
  },
  {
    _id: '9t8ni6niy570y52bvtf',
    full_name: 'Computei Consultoria SA',
    short_name: 'Computei Consultoria',
    identifier: '02002002000226'
  }
];

module.exports = SellersService;