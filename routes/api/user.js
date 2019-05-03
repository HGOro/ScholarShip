const router = require("express").Router();
const userController = require("../../controllers/user-controller");

//matches with "/api/user"
router.route("/")
    .get(userController.find)
    .delete(userController.delete);

//matches with "api/user/auth"
router.route("/auth")
    .get(userController.auth);

module.exports = router;

