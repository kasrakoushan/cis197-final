const router = require('express').Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
// const Tweet = require('../models/tweet');
const Course = require('../models/course');
const Comment = require('../models/comment');

module.exports = function (app) {
  // TODO: Check to see if user is authenticated
  // STUB
  router.use(isAuthenticated(app));
  // ENDSTUB

  router.post('/course/:id/favorite', function (req, res) {
    // This route will just call the favoriteTweet  static method in the
    // Tweet model. Pass in  the current user id and the :id from the route
    // if it is successful send back json in the format
    // { res: 'success', data: tweetThatWasFavorited }
    // else
    // { res: 'failure', data: error }
    // STUB
    Tweet.favoriteTweet(req.user._id, req.params.id)
      .then((tweet) => {
        res.json({ res: 'success', data: tweet });
      })
      .catch((err) => {
        res.json({ res: 'failure', data: err });
      });
    // ENDSTUB
  });

  router.post('/course/:id/rate', function (req, res) {
    Course.addRating(req.params.id, req.body.rating)
      .then((course) => {
        res.json({ res: 'success', data: course });
      })
      .catch((err) => {
        res.json({ res: 'failure', data: err });
      });
  });

  router.post('/course/:id/comment', function (req, res) {
    Comment.addComment(req.params.id, req.body.comment)
      .then((comment) => {
        return Course.addComment(req.params.id, comment._id)
      })
      .then((course) => {
        res.json({ res: 'success', data: course });
      })
      .catch((err) => {
        res.json({ res: 'failure', data: err});
      })
  });

  router.post('/course', function (req, res) {
    // This route will just call the createTweet  static method in the
    // Tweet model. Pass in  the current user id and the posted tweet contente
    // if it is successful send back json in the format
    // { res: 'success', data: tweetThatWasMade }
    // else
    // { res: 'failure', data: error }
    // STUB
    Course.createCourse(req.body.courseCode, req.body.description,
      req.body.professor)
      .then((course) => {
        res.json({ res: 'success', data: course });
      })
      .catch((err) => {
        res.json({ res: 'failure', data: err });
      });
    // ENDSTUB
  });

  return router;
};
