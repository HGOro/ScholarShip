const axios = require("axios");
const cheerio = require("cheerio");
const Article = require("../models/Article")
const SavedArticles = require("../models/SavedArticles")
const Wiki = require("../models/Wiki")


exports.all = async function (req, res) {
   let articles
   try {
      articles = await Article.find().sort( [['_id', -1]] );
      console.log(articles)
      res.render("index", { articles: articles });
      console.log(articles.length)
   } catch (e) {
      res.send(e)
   }
}

exports.wikiAll = async function(req, res){
   let allWiki
   try {
      allWiki = await Wiki.find().sort([['_id', -1]])
      console.log(allWiki)
      res.render("index", { allWiki: allWiki });
      console.log(allWiki.length)
   }  catch(e){
      res.send(e)
   }
}


exports.saveArticle = async function (req, res) {
   let article
   console.log(req.params)
   //res.send("ok saveArticle")
   try {
      article = await Article.findById(req.params.id)
      const savedArticle = new SavedArticles({
         title: article.title,
         href: article.href
      });
      const savedArtResult = await savedArticle.save()
      res.json(savedArtResult);
   }catch (e) {
      res.send(e);
   }
}

exports.saveComment = async function (req, res) {
   console.log(req.body)
   console.log(req.params)

   try {
      const comment = await Article.findByIdAndUpdate(req.params.id, { "$push": {comments: req.body.comment}} )
      console.log(comment)
      res.send('ok')
   } catch (e) {
      res.send(e);
   }
}

exports.readComment = async function (req, res){
   let comments
   try {
      comments = await Article.findById(req.params.id);
      res.json(comments);
      console.log(comments.length);
   } catch (e) {
      res.send(e)
   } 
}


exports.scrapeArticles = async function (req, res) {
   console.log("Im hit");
   try {
      var response = await axios.get("https://newsforkids.net/");
     
   } catch (e) {
      console.log("error", e)
      return res.send(e)
   }
   
   var $ = cheerio.load(response.data);
   
   try {
      $('article').each(async function(i, element){
         var title = ($(this).find('h2.post-title').find('a').text());
         var href = ($(this).find('h2.post-title').find('a').attr('href'));

         var article = new Article({
            title: title,
            href: href
         })
         console.log(article);
         await article.save();
      })
      res.send(article);
   } catch(e) {
      res.send(e);
   }
} 

exports.wikiSearch = async function (req, res) {

   let searchTerm = (req.body.input);
   console.log(req.body);

   try {
      var url = `http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json`
      console.log(url)
      
      var response = await axios.get(url)
      console.log(response.data.query.search)
      
      wikiResults = (response.data.query.search)
      res.json(wikiResults);
     
      for(let i = 0; i < wikiResults.length; i++) {
         var title = wikiResults[i].title;
         var snippet = wikiResults[i].snippet;
         var pageid = wikiResults[i].pageid;

         var wiki = new Wiki ({
            title: title,
            snippet: snippet,
            pageid: pageid
         });
         console.log(wiki);
         wiki.save();
      }
      res.send(wiki)
      console.log("saved wiki!");
   
   } catch (e) {
      console.log("error", e)
      return res.send(e)
   }
}