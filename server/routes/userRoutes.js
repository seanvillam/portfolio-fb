const express = require('express');
const router = express.Router();

const authMiddleware = require("../auth/auth.js");
const usersController = require('../controllers/userController');

router.post("/", usersController.add);
router.get("/", usersController.list);
router.get("/:id", usersController.read);

router.put("/:id", authMiddleware, usersController.update);
router.delete("/:id", authMiddleware, usersController.remove);

module.exports = router;