const { dotenv } = require("../../configs/importModules");
dotenv.config("./../../.env");
const protectedPath = require("../../configs/protectedPath");
const { getUserByToken } = require("../services/userService");

const jwtHandler = async (req, res, next) => {
    try {
        const path = protectedPath.find(n => n.endpoint === req.path.replace(/\/+$/, '') && n.method === req.method);

        if (!path) return next(); // If route is not protected, continue without authentication

        const authHeader = req.headers["authorization"];
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Token not found!" })
        }

        const token = authHeader.split(" ")[1];

        // Verify the token and fetch user details
        let user;
        try {
            user = await getUserByToken(token);
        } catch (err) {
            return res.status(401).json({ success: false, message: "Unauthorized: Invalid or expired token" })
        }

        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized: Invalid user" })
        }

        req.user = user;
        next();

    } catch (err) {
        return res.status(401).json({ success: false, message: "Internal Server Error in authentication" })
    }
};

module.exports = jwtHandler;

