const mongoose = require('mongoose');

class Record {

  constructor(documentName, schema, data){
    this.__proto__ = new this.constructor.collection(data);
  }

  static get collection(){
    return mongoose.model(this.name, this.schema);
  }

}

module.exports = Record;