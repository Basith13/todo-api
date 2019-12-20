const express = require('express');

const postUser = require('./../controllers/User/postUser.controller');
const getUsers = require('./../controllers/User/getUsers');
const deleteUser = require('./../controllers/User/deleteUser');
const authMiddleware = require('./../middlewares/auth.middleware');

const router = express.Router();

router.post('/', postUser);
router.get('/', authMiddleware, getUsers);
router.delete('/', authMiddleware, deleteUser);


module.exports = router;
