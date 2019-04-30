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
   }
 });
 
 var Wiki = mongoose.model("Wiki", WikiSchema);
 
 module.exports = Wiki;