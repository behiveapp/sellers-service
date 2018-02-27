const mongoose = require('mongoose');

class Record {

  constructor(data){
    this.__proto__ = new this.constructor.collection(data);
  }

  static get collection(){
    collections[this.name] = collections[this.name] || mongoose.model(this.name, this.schema)
    return collections[this.name];
  }

}
const collections = {};

module.exports = Record;