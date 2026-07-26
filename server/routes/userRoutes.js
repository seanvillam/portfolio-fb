const express = require('express');
const router = express.Router();

const usersController = require('../controllers/userController');

router.post("/", usersController.add);

module.exports = router;