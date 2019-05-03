const router = require("express").Router();
const abcRoutes = require("./abc");
const researchRoutes = require("./research")

//research routes
router.use("/research", researchRoutes);

module.exports = router;
