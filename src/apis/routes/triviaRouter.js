const { express } = require("../../configs/importModules");
const triviaController = require("../controllers/triviaController");
// const authenticateUser = require("../middlewares/authMiddleware");
const provideToken =require('./../middleware/auth')
const router = express.Router();

    router.route('/get-all-trivia')
    .get(  triviaController.getTrivia )



    router.route('/like_trivia')
    .post(provideToken,  triviaController.likeTriviaByUser )


    router.route('/get-trivia-liked-by-user')
    .get(provideToken,  triviaController.getTriviaLikedByUser )




module.exports = router