const express = require('express');

const postFeed = require('./../controllers/Feed/postFeed.controller');
const getFeed = require('./../controllers/Feed/getFeed');
const deleteFeed = require('./../controllers/Feed/deleteFeed');
const router = express.Router();

router.post('/', postFeed);
router.get('/', getFeed);
router.delete('/', deleteFeed);

module.exports = router;
