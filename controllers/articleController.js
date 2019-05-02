const axios = require("axios");
const cheerio = require("cheerio");
const Article = require("../models/Article")
const db = require("../models")
const Wiki = require("../models/Wiki")


exports.all = async function (req, res) {
   try {
      const articles = await db.Article.find({})
      res.json(articles);
   } catch (e) {
      res.send(e)
   }
}

exports.wikiAll = async function (req, res) {
   let allWiki
   try {
      allWiki = await Wiki.find().sort([['_id', -1]])
      console.log(allWiki)
      res.render("index", { allWiki: allWiki });
      console.log(allWiki.length)
   } catch (e) {
      res.send(e)
   }
}

//hardcode buttons and functions for wikiSave and wikiGet to save and show results on "My Project"


exports.saveArticle = async function (req, res) {
   console.log('inside save article', req.params)
   // res.json({message: 'ok'})
   try {
      var article = await db.Article.findOneAndUpdate({ _id: req.params.id }, { $set: { isSave: true } }, { new: true })
      res.json(article)
      console.log('article', article)

      // const savedArticle = db.Article({
      //    isSave: true
      // });
      // const savedArtResult = await savedArticle.save()
      // res.json(savedArtResult);
   } catch (e) {
      res.send(e);
      console.log("inside save article", e)
   }
}

exports.saveComment = async function (req, res) {
   console.log(req.body)
   console.log(req.params)

   try {
      const comment = await Article.findByIdAndUpdate(req.params.id, { "$push": { comments: req.body.comment } })
      console.log(comment)
      res.send('ok')
   } catch (e) {
      res.send(e);
   }
}

exports.readComment = async function (req, res) {
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
   try {
      var response = await axios.get("https://newsforkids.net/");
      console.log("scrapeArticles axios")
   } catch (e) {
      console.log("scrapeArticles axios error")
      return res.send(e)
   }

   var $ = cheerio.load(response.data);

   var promises = []
   $('article').each(function (i, element) {
      var title = ($(this).find('h2.post-title').find('a').text());
      var href = ($(this).find('h2.post-title').find('a').attr('href'));

      var promise = db.Article.findOneAndUpdate(
         { href: href },
         {
            $set:
            {
               title: title,
               href: href
            }
         },
         { upsert: true, setDefaultsOnInsert: true, new: true }
      )
      // console.log("scrapeArticles result from findOneAndUpdate", promise ) // this won't show the result but the promise
      promises.push(promise)
   })

   Promise.all(promises)
      .then(result => {
         //console.log("result from Promise.all", result)
         res.json({ result })
      })
      .catch(e => {
         console.log("scrapeArticles Promise.all error")
      })
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

      for (let i = 0; i < wikiResults.length; i++) {
         var title = wikiResults[i].title;
         var snippet = wikiResults[i].snippet;
         var pageid = wikiResults[i].pageid;

         var wiki = new Wiki({
            title: title,
            snippet: snippet,
            pageid: pageid
         });
         console.log(wikiResults);
         wiki.save();
      }
      res.send(wiki)
      console.log("saved wiki!");

   } catch (e) {
      console.log("error", e)
      return res.send(e)
   }
}