var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
 
  title: {
    type: String,
    required: true
  },
  
  href: {
    type: String,
    required: true,
    unique: true
  },

  comments: {
    type: [String]

  },

  date: {
    type : Date, 
    default: Date.now 
  },

  isSave: {
    type: Boolean,
    default: false
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
