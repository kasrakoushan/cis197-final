const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: create a new Schema that has the following attributes
//  author, type is Schema.ObjectId, it is required, and it refers to 'User' (look up refs)
//  content, type is String, it is required
//  favorites: is an array of objects. each  object has type Schema.ObjectId and refs 'User'
// also  keep track of the created_at timestamp via http://mongoosejs.com/docs/guide.html#timestamps
//  (we do that last part for you...but just ref it for future use)

const courseSchema = new Schema({
  courseCode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  professor: {
    type: String,
    required: true,
  }
  comments: [{
    type: Schema.ObjectId,
    ref: 'Comment',
  }],
  ratings: [Number],
});


// courseSchema.statics.getNewsfeedTweets = function (userId) {
//   // Find one user with _id matching userId. If there is, iterate through
//   // the following array for the user and find all tweets made by that individual
//   // at the end, return a single array of tweet objects (all same level ie must be
//   // [t1, t2, t3 ... tn] but not [[t1], [t2,  t3] ... ].
//   // Return a Promise!
//   // STUB
//   return this.model('User').findOne({ _id: userId })
//     .then((user) => {
//       let posts = user.following.map(tweeter => this.find({
//         author: tweeter,
//       }));
//       return Promise.all(posts);
//     })
//     .then((posts) => {
//       let flattened = [].concat.apply([], posts);
//       return flattened;
//     });
//   // ENDSTUB
// };

courseSchema.statics.getCourseCatalog = function () {
  // Find one user with _id matching userId. If there is, iterate through
  // the following array for the user and find all tweets made by that individual
  // at the end, return a single array of tweet objects (all same level ie must be
  // [t1, t2, t3 ... tn] but not [[t1], [t2,  t3] ... ].
  // Return a Promise!
  // STUB
  return this.find()
    .then((courses) => {
      return courses;
    });
  // ENDSTUB
};

courseSchema.statics.createCourse = function (courseCode, description, professor) {
  // given the current  user id and some content of a new tweet, create a new  tweet object and
  // save  it. Then once it saves, return the  result of the tweet.getTweetInfo(currentUserId).
  // General format of the method  should be
  // let newTweet = instantiate method
  // return newTweet.save().then((savedTweet) => { return the  tweet info })
  //  Return a Promise
  // STUB
  let newCourse = new this({
    courseCode: courseCode,
    description: description,
    professor: professor,
    ratings: [],
    comments: [],
  });
  return newCourse.save()
    .then(saved => saved);
  // ENDSTUB
};

courseSchema.statics.addRating = function (courseId, rating) {
  // given a current user and a  tweet id, appropriately add/remove favorites on a given tweet.
  // On completion of the  save return the tweet info (via getTweetInfo), passing in the currentuser id
  // Return a Promise!
  // STUB
  return this.findOne({ _id: courseId })
    .then((course) => {
      course.ratings.push(rating);
      return course.save();
    })
    .then(saved => saved);
  // ENDSTUB
};

courseSchema.statics.addComment = function(courseId, commentId) {
  return this.findOne({ _id: courseId })
    .then((course) => {
      course.comments.push(commentId);
      return course.save();
    })
    .then(saved => saved);
};

module.exports = mongoose.model('Course', courseSchema);
