const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true}
});

animalSchema.statics.toggle = function(id, cb) {
  // this === Animal model
  this.findById(id, (err, animal) => {
    if(err) return cb(err);

    animal.save(cb);
  })
};

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
