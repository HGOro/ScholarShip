var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WikiSchema = new Schema({
  
   title: {
      type: String,
      required: true
    },
   
   snippet: {
      type: [String]
   
   },
 
   pageid: {
     type: String
   },

   comments: {
    type: [String]

  },

  date: {
    type : Date, 
    default: Date.now 
  }
  
 });
 
 var Wiki = mongoose.model("Wiki", WikiSchema);
 
 module.exports = Wiki;