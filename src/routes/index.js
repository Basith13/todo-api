const express = require('express');

const User = require('./User');
const Feed = require('./Feed');
const LoginController = require('../controllers/LoginController');
const LogoutController = require('../controllers/LogoutController');
const authmiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.use('/user', User);
router.use('/feed', Feed);
router.post('/login', LoginController);
router.get('/logout', authmiddleware, LogoutController);



module.exports = router;
