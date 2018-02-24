const SellersService = require('../../../../src/lib/services/sellers');

describe('Sellers Service', () => {
  const mockSellers = [{
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
  }];

  describe('#getAll', () => {
    it('Should return all sellers', () => {
      const sellers = SellersService.getAll();

      expect(sellers).toEqual(mockSellers);
    });
    
  });

  describe('#find', () => {
    it("Should return the correct seller if it exists", () => {
      const seller = SellersService.find('an0vd87450dvn507');

      expect(seller).toEqual({
        _id: 'an0vd87450dvn507',
        full_name: 'Império das Grifes LTDA',
        short_name: 'Império das Grifes',
        identifier: '01001001000113'
      });
    });

    it("Should return null if seller does not exist", () => {
      const seller = SellersService.find('123');

      expect(seller).toBeNull();
    });
    
  });
});