const { dotenv, jwt } = require("../../configs/importModules")

dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

const authenticateUser = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Missing or invalid token" });
        }

        const token = authHeader.split(" ")[1]; // Extract token
        const decoded = jwt.verify(token, secretKey); // Verify token
        console.log({ decoded })
        req.user = decoded;
        next();
    } catch (err) {
        console.error("JWT Error:", err.message);
        return res.status(401).json({ message: "Unauthorized: Invalid Token" });
    }
};

module.exports = authenticateUser;
