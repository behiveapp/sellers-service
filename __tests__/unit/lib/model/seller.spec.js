const Seller = require('../../../../src/lib/model/seller');
const {initializeSellers, clearSellers, mockSellers, extractSellers} = require('../../../utils/sellers');
const mongoose = require('mongoose');

describe('Seller Model', () => {
  beforeAll(() => {
    const {MONGO_URL = 'localhost:3001/sellers-test'} = process.env;
    var options = { server: { socketOptions: { keepAlive: 1 } } };
    mongoose.connect(MONGO_URL, options);
  });

  beforeEach(async () => {
    await initializeSellers();
  });

  afterEach(async () => {
    await clearSellers();
  });

  describe('#getAll', async () => {
    it('Should return all sellers', async () => {
      const sellers = await Seller.collection.find().exec();
      const extractedSellers = extractSellers(sellers);
      
      expect(sellers.length).toBe(2);
      expect(extractedSellers).toEqual(mockSellers);
    });
    
  });

  describe('#find', async () => {
    it("Should return the correct seller if it exists", async () => {
      const seller = await Seller.collection.findOne({identifier: '01001001000113'}).exec();
      const {full_name, short_name, identifier} = seller;

      expect(full_name).toBe('Império das Grifes LTDA');
      expect(short_name).toBe('Império das Grifes');
      expect(identifier).toBe('01001001000113');
    });

    it("Should return null if seller does not exist", async () => {
      const seller = await Seller.collection.findOne({identifier: '123'}).exec();

      expect(seller).toBeNull();
    });
    
  });
});