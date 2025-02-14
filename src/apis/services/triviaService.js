const { dotenv } = require("../../configs/importModules")
const strapiApis = require("../../configs/strapiApis")
dotenv.config(__dirname + "/../../../.env")
const apiFetcher = require("../utils/apiFetcher")

module.exports = {

    getTrivia: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.getTrivia.endpoint,
            method: strapiApis.getTrivia.method,
            params: {
                ...data 
            }   
        })
        return res
    },

}

