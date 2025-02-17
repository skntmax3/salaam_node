const { express } = require("../../configs/importModules");
const recipeController = require("../controllers/recipeController");
// const authenticateUser = require("../middlewares/authMiddleware");
const provideToken =require('../middleware/auth')
const router = express.Router();

    router.route('/get-recipes')
    .get(recipeController.getRecipe)


module.exports = router