const { express } = require("../../configs/importModules");
const router = express.Router();
const categoryRouter = require("./categoryRoute")
const userRouter = require("./userRoute")
const playlistRouter = require("./playlistRoute")
const triviaRouter = require("./triviaRouter")
const recipeRouter = require("./recipeRouter")
const prayersRouter = require("./prayersRouter")

router.use("/category/", categoryRouter)
router.use("/user/", userRouter)
router.use("/playlist/", playlistRouter)
router.use("/trivia/", triviaRouter)
router.use("/recipe/", recipeRouter)
router.use("/prayers/", prayersRouter)

module.exports = router;