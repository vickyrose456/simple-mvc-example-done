const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

DogSchema.statics.findByName = (name, callback) => {
  const search = {name};
  //const update = { age: age + 1 };
  //const opt = {new: true};

  return DogModel.findOne(search, callback);
  //return DogModel.findOneAndUpdate(search, update, callback);
};

DogSchema.statics.findAndUpdate = (name, age, callback) =>{
    const search = {name};
    const update = {age: age + 1};

    return DogModel.findOneAndUpdate(search, update, {
        new: true,
        upsert: true,
    });

};

DogModel = mongoose.model('Dog', DogSchema);

// export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
