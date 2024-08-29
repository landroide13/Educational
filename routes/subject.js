const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authjwt');
const { verifyDuplicatedSubject } = require('../middleware/subjectRegister');
const { getSubject, getSubjects, createSubject, updateSubject, deleteSubject } = require('../controllers/subject.controller');

router.get("/", verifyToken, getSubjects );
router.get("/:id", verifyToken, getSubject );
router.post("/", verifyDuplicatedSubject, verifyToken, createSubject );
router.put("/:id", verifyToken, updateSubject );
router.delete("/:id", verifyToken, deleteSubject );

module.exports = router;