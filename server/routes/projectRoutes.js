const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/auth.js");
const controller = require("../controllers/projectController");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/", authMiddleware, controller.add);
router.put("/:id", authMiddleware, controller.update);
router.delete("/:id", authMiddleware, controller.remove);

module.exports = router;