const router = require("express").Router();
const abcController = require("../../controllers/abcController");

// Matches with "/api/abc"
router.route("/")
  .get(abcController.findAll)
  .post(abcController.create);

// Matches with "/api/abc/:id"
router
  .route("/:id")
  .get(abcController.findById)
  .put(abcController.update)
  .delete(abcController.remove);

module.exports = router;
