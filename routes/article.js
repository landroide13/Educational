const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authjwt');
const { getArticles, getArticle, createArticle, updateArticle, deleteArticle } = require('../controllers/article.controller');

router.get("/", verifyToken, getArticles );
router.get("/:id", verifyToken, getArticle );
router.post("/", verifyToken, createArticle );
router.put("/:id", verifyToken, updateArticle );
router.delete("/:id", verifyToken, deleteArticle );

module.exports = router;