const express = require('express');
const router = express.Router();

const usersController = require('../controllers/userController');

router.post("/", usersController.add);
router.get("/", usersController.list);
router.get("/:id", usersController.read);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.remove);

module.exports = router;