const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  user: { type: String, required: true },
  score: String,
  date: { type: Date, default: Date.now }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
