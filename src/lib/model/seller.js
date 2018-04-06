const Record = require('./record');

class Seller extends Record{
  static get schema(){
    return {
      full_name: {type: String, es_indexed: true},
      short_name: {type: String, es_indexed: true},
      identifier: {type: String, required: true, unique: true, es_indexed: true}
    }
  }
}

module.exports = Seller;