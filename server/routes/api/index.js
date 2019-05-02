
const router = require("express").Router();

const researchRoutes = require("./research")
console.log("Checking api/index.js")


//Hernan added=================================
const UserRoutes = require("./user");
const AccountRoutes = require("./account");
const QuizRoutes = require("./quiz");

router.use("/user", UserRoutes);
router.use("/account", AccountRoutes);
router.use("/quiz", QuizRoutes);
//end Hernan added

//research routes
router.use("/research", researchRoutes);

module.exports = router;
