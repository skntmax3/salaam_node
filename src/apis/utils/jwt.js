const { jwt, dotenv } = require("../../configs/importModules")
dotenv.config("../../.env")
const secretKey = process.env.JWT_SECRET_KEY

module.exports = {
    sign: (option, tokenExpireIn) => {
        console.log(option)
        return jwt.sign({ option }, secretKey, { expiresIn: tokenExpireIn });
    },

    verify: (token) => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secretKey, function (err, decoded) {
                if (err) {
                    if (err.name == "TokenExpiredError") {
                        reject("Token Expired")
                    } else if (err.name == "JsonWebTokenError") {
                        reject("Token Malformed")
                    } else if (err.name == "NotBeforeError") {
                        reject("Token Not Active")
                    }
                }
                resolve(decoded)
            });
        })
    }
}