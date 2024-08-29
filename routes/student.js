const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authjwt');
const { verifyDuplicatedStudent } = require('../middleware/studentSignup');
const { getStudents, getStudent, createStudent, updateStudent, deleteStudent } = require('../controllers/student.controller');

router.get("/", verifyToken, getStudents );
router.get("/:id", verifyToken, getStudent );
router.post("/", verifyDuplicatedStudent, verifyToken, createStudent );
router.put("/:id", verifyToken, updateStudent );
router.delete("/:id", verifyToken, deleteStudent );

module.exports = router;