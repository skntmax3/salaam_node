const { express } = require("../../configs/importModules");
const playlistController = require("../controllers/playlistController");
// const authenticateUser = require("../middlewares/authMiddleware");
const provideToken =require('./../middleware/auth')
const router = express.Router();

    router
    .route("/create-playlist")
    .post(playlistController.createPlaylist)


    router.route('/get-playlist')
    .get( provideToken, playlistController.isUserHavePlaylist )

module.exports = router