const { express } = require("../../configs/importModules");
const prayersController = require("../controllers/prayerController");
// const authenticateUser = require("../middlewares/authMiddleware");
const provideToken =require('../middleware/auth')

const router = express.Router();

    router.route('/get-prayers')
    .post(prayersController.getPrayers)


module.exports = router