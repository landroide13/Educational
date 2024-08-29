const Article = require('../models/article')

exports.createArticle = async(req, res) =>{
    console.log(req.body);
    const { name, text, subject, term } = req.body;
    const newArticle = new Article({ name, text, subject, term });
    const audioConf = await newArticle.save();
    res.status(200).json(audioConf);
}

exports.getArticles = async(req, res) =>{
    const articles = await Article.find();
    res.status(200).json(articles);
}

exports.getArticle = async(req, res) =>{
    const article = await Article.findById(req.params.id)
    res.status(200).json(article);
}

exports.updateArticle = async(req, res) =>{
    const updateArticle = await Article.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateArticle);
}

exports.deleteArticle = async(req, res) =>{
    await Article.findByIdAndDelete(req.params.id);
    res.status(204).json();
}