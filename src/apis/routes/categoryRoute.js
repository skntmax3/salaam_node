const { express } = require("../../configs/importModules");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

router
    .route("/getList")
    .get(categoryController.getCategoryListData)

router.get("/homepage", categoryController.getHomepageData)

module.exports = router