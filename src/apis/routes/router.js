const { express } = require("../../configs/importModules");
const router = express.Router();
const categoryRouter = require("./categoryRoute")
const userRouter = require("./userRoute")

router.use("/category/", categoryRouter)
router.use("/user/", userRouter)

module.exports = router;