var express = require('express');
var router = express.Router();
var articleController = require("../controllers/articleController")

// api routes with /article/ ... 
router.get("/scrape", articleController.scrapeArticles);
router.get("/all", articleController.all);
router.post("/wiki", articleController.wikiSearch);
router.get("/wiki/all", articleController.wikiAll)
router.get("/readComment/:id", articleController.readComment);
router.post("/saveArticle/:id", articleController.saveArticle)
router.post("/saveComment/:id", articleController.saveComment)

module.exports = router;