const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');

router.post('/', auth(['admin']), async (req, res) => {
  try {
    const post = new Post({ ...req.body, author: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: 'Error creating post' });
  }
});

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'name');
  res.json(posts);
});

module.exports = router;