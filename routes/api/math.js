const router = require("express").Router();
const mathController = require("../../controllers/mathController");

// Matches with "/api/math"
router.route("/")
  .get(mathController.findAll)
  .post(mathController.create);

// Matches with "/api/math/:id"
router
  .route("/:id")
  .get(mathController.findById)
  .put(mathController.update)
  .delete(mathController.remove);

module.exports = router;
