const router = require("express").Router();
const abcRoutes = require("./abc");
const researchRoutes = require("./research")

//abc routes
router.use("/abc", abcRoutes);

//research routes
router.use("/research", researchRoutes);

module.exports = router;
