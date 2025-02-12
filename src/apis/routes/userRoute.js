const { express } = require("../../configs/importModules");
const latestActivityController = require("../controllers/latestActivityController");
const userActivityController = require("../controllers/userActivityController");
const playlistController = require("../controllers/playlistController");
const userController = require("../controllers/userController");
const authenticateUser = require("../middlewares/authMiddleware");
const provideToken = require('./../middleware/auth');
const router = express.Router();


// router
//     .route("/")
//     .get(userController.getUser)
//     .post(userController.createUser)
//     .put(authenticateUser, userController.editUser)


    router
    .route("/create-user")
    .post(userController.createUser)


    router
    .route("/check-user")
    .get(userController.checkUserExistOrNot)


    router
    .route("/create-playlist")
    .post(provideToken , playlistController.createPlaylist)


   router
    .route("/latestActivity")
    .get(latestActivityController.getLatestActivity)
    .post(latestActivityController.savelatestActivity)

// bookmark
router.route("/bookmark")
    .get(authenticateUser, userActivityController.getBookmark)
    // .post(authenticateUser, userActivityController.createBookmark)
    .put(authenticateUser, userActivityController.createBookmark)
    .delete(authenticateUser, userActivityController.deleteBookmark)

// playlist
router.route("/playlist")
    .get(authenticateUser, userActivityController.getPlaylist)
    // .post(authenticateUser, userActivityController.createPlaylist)
    .put(authenticateUser, userActivityController.createPlaylist)
    .delete(authenticateUser, userActivityController.deletePlaylist)

// favourite
router.route("/favourite")
    .get(authenticateUser, userActivityController.getFavourite)
    .post(authenticateUser, userActivityController.createFavourite)
    .put(authenticateUser, userActivityController.createFavourite)
    .delete(authenticateUser, userActivityController.deleteFavourite)



module.exports = router