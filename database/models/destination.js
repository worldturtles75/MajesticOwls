const mongoose = require('mongoose');

var destinationSchema = new mongoose.Schema({
  destination: String,
  coordinates: { lat: Number, lng: Number },
  toptenEats: {
    name: String,
    rating: Number, 
    position: { lat: Number, lng: Number }
  },
  toptenSights: {
    name: String,
    rating: Number, 
    position: { lat: Number, lng: Number }
  }
})

module.exports = mongoose.model('Destination', destinationSchema);

// module.exports = destinationModel