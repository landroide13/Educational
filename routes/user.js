const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authjwt');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

router.get("/", verifyToken, getUsers );
router.get("/:id", verifyToken, getUser );
router.post("/", verifyToken, createUser );
router.put("/:id", verifyToken, updateUser );
router.delete("/:id", verifyToken, deleteUser );

module.exports = router;