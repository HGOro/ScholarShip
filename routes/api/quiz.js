const router = require("express").Router();
const quizController = require("../../controllers/quiz-controller");

//matches with "/api/quiz"
router.route("/")
    .get(quizController.find)      
    .get(quizController.create);  

module.exports = router;