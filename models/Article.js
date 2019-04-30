var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
 
  title: {
    type: String,
    required: true
  },
  
  href: {
    type: String,
    required: true
  },

  comments: {
    type: [String]

  },

  date: {
    type : Date, 
    default: Date.now 
  }


});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
