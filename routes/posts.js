const express = require('express');
const router = express.Router();
const postsController = require('./../controllers/postsController.js')

router.get('/', postsController.index);
router.get('/posts/new', postsController.newPost);
router.post('/posts', postsController.create);
router.get('/posts/:id', postsController.show);
router.get('/posts/:id/upvote', postsController.upvote);
router.get('/posts/:id/downvote', postsController.downvote);

module.exports = router;
