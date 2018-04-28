const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: User schema should have the following.
// A `username` of type string  that is unique and required
// A `name` of type string
// a `password` of type string t hat is required
// a `species` that is type string (will be the bird species
// an `image` of type  string
// an array `following` containing objects of type Schema.ObjectId
// an array of `followers containing objects of  type Schema.ObjectId
let commentSchema = new Schema({
  // STUB
  course: {
    type: Schema.ObjectId,
    ref: 'Course',
  },
  content: { type: String },
  upVotes: Number,
  downVotes: Number,
  // ENDSTUB
});


commentSchema.statics.getComments = function(commentIds) {
  return this.find({ _id: { $in: commentIds }})
    .then((comments) =>
      return comments.map(c => c.content));
    );
}

commentSchema.statics.addComment = function (courseId, content) {
  // TODO: create a new user object with username, password, species, image, and name equal to  the
  // specified arguments. Once  this object is created, use bcrypt.hash to hash the
  // newUser.password  and set  the newUser's password equal to the hash. Finally call save
  // Must return  a  promise (ie your bcrypt hash call must look something like
  // bcrypt.hash(...).then(function( hash ) { ... return newUser.save() }
  // STUB
  let newComment = new this({
    course: courseId,
    content: content,
    upVotes: 0,
    downVotes: 0,
  });
  return newComment.save()
    .then(saved => saved);
  // ENDSTUB
};

commentSchema.statics.upVote = function(commentId) {
  return this.findOne({ _id: commentId })
    .then((comment) => {
      comment.upVotes += 1;
      return comment.save();
    })
    .then(saved => saved);
};

commentSchema.statics.downVote = function(commentId) {
  return this.findOne({ _id: commentId })
    .then((comment) => {
      comment.downVotes += 1;
      return comment.save();
    })
    .then(saved => saved);
};

module.exports = mongoose.model('Comment', commentSchema);
