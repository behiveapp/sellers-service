const mongoose = require('mongoose');

class Record {

  constructor(data){
    this.__proto__ = new this.constructor.collection(data);
  }

  static get collection(){
    collections[this.name] = collections[this.name] || mongoose.model(this.name, this.schema)
    return collections[this.name];
  }

  static find(query){
    return this.collection.find(query).exec();
  }

  static findOne(query){
    return this.collection.findOne(query).exec();
  }

}
const collections = {};

module.exports = Record;