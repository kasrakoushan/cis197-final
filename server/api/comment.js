const router = require('express').Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const Comment = require('../models/comment');

module.exports = function (app) {
  // TODO: Check to see if user is authenticated
  // STUB
  router.use(isAuthenticated(app));
  // ENDSTUB

  router.post('/comment/:id/upvote', function (req, res) {
    Comment.upVote(req.params.id)
      .then((comment) => {
        res.json({ res: 'success', data: comment });
      })
      .catch((err) => {
        res.json({ res: 'failure', data: err });
      });
  });

  router.post('/comment/:id/downvote', function (req, res) {
    Comment.downVote(req.params.id)
      .then((comment) => {
        res.json({ res: 'success', data: comment });
      })
      .catch((err) => {
        res.json({ res: 'failure', data: err });
      });
  });

  router.get('/comments/all', function (req, res) {
    Comment.getComments(req.body.comments)
      .then((comments) => {
        res.json({ res: 'success', data: comments });
      })
      .catch((err) => {
        res.json({ res: 'failure', data: err });
      });
  });

  return router;
};
