const Seller = require('../../../../src/lib/model/seller');
const {initializeSellers, clearSellers} = require('../../../utils/sellers');

describe('Seller Model', () => {
  beforeEach(() => {
    initializeSellers();
  });

  afterEach(() => {
    clearSellers();
  });

  describe('#getAll', () => {
    it('Should return all sellers', () => {
      const mockSellers = [{
        full_name: 'Império das Grifes LTDA',
        short_name: 'Império das Grifes',
        identifier: '01001001000113'
      },
      {
        full_name: 'Computei Consultoria SA',
        short_name: 'Computei Consultoria',
        identifier: '02002002000226'
      }];

      const sellers = Seller.collection.find();

      expect(sellers).toEqual(mockSellers);
    });
    
  });

  describe('#find', () => {
    it("Should return the correct seller if it exists", () => {
      const seller = Seller.collection.find({identifier: '01001001000113'});

      expect(seller).toEqual({
        full_name: 'Império das Grifes LTDA',
        short_name: 'Império das Grifes',
        identifier: '01001001000113'
      });
    });

    it("Should return null if seller does not exist", () => {
      const seller = Seller.collection.find('123');

      expect(seller).toBeNull();
    });
    
  });
});