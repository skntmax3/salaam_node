const { express } = require("../../configs/importModules");
const triviaController = require("../controllers/triviaController");
// const authenticateUser = require("../middlewares/authMiddleware");
const provideToken =require('./../middleware/auth')
const router = express.Router();

    router.route('/get-all-trivia')
    .get(  triviaController.getTrivia )


module.exports = router