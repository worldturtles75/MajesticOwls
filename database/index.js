var mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');
mongoose.connect('mongodb://localhost/greenfield');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var userSchema = mongoose.Schema({

  user: {type: String, unique: true}

});
userSchema.plugin(findOrCreate)


var user = mongoose.model('user', userSchema);


module.export = user;
