const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// TODO: User schema should have the following.
// A `username` of type string  that is unique and required
// A `name` of type string
// a `password` of type string t hat is required
// a `species` that is type string (will be the bird species
// an `image` of type  string
// an array `following` containing objects of type Schema.ObjectId
// an array of `followers containing objects of  type Schema.ObjectId
let userSchema = new Schema({
  // STUB
  username: { type: String, required: true, unique: true },
  name: { type: String },
  password: { type: String, required: true },
  // ENDSTUB
});


userSchema.statics.addUser = function (username, password, name) {
  // TODO: create a new user object with username, password, species, image, and name equal to  the
  // specified arguments. Once  this object is created, use bcrypt.hash to hash the
  // newUser.password  and set  the newUser's password equal to the hash. Finally call save
  // Must return  a  promise (ie your bcrypt hash call must look something like
  // bcrypt.hash(...).then(function( hash ) { ... return newUser.save() }
  // STUB
  let newUser = new this({
    username: username,
    password: password,
    name: name,
  });
  return bcrypt.hash(newUser.password, 1).then((hash) => {
    newUser.password = hash;
    return newUser.save();
  });
  // ENDSTUB
};

userSchema.statics.check = function (username, password) {
  // determines if a given password for a username is valid  or not.
  // find a user with the username equivalent to the username passed in.
  // if  there is no  user then throw a new  Error('No User') else  return the result
  // of bcrypt.compare for the password and the user's password
  // STUB
  return this.findOne({ username: username })
    .then((user) => {
      if (!user) {
        throw new Error('No User');
      } else {
        return bcrypt.compare(password, user.password);
      }
    });
  // ENDSTUB
};

module.exports = mongoose.model('User', userSchema);
