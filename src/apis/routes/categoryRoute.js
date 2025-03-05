const { express } = require("../../configs/importModules");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

router
    .route("/getList")
    .get(categoryController.getCategoryListData)

    router
    .route("/get-prayer-list")
    .post(categoryController.getPrayerList)

router.get("/homepage",
    categoryController.getHomepageData)

router.get("/getsubcat",
categoryController.getSubCatContent)

router.post("/get-dua-subcontent-items",
    categoryController.getDuaSubcontentItems)
    
            
        
    

module.exports = router