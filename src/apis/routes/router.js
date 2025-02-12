const { express } = require("../../configs/importModules");
const router = express.Router();
const categoryRouter = require("./categoryRoute")
const userRouter = require("./userRoute")
const playlistRouter = require("./playlistRoute")

router.use("/category/", categoryRouter)
router.use("/user/", userRouter)
router.use("/playlist/", playlistRouter)

module.exports = router;