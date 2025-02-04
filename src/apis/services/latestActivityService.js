const { dotenv } = require("../../configs/importModules")
const strapiApis = require("../../configs/strapiApis")
dotenv.config(__dirname + "/../../../.env")
const apiFetcher = require("../utils/apiFetcher")

module.exports = {

    getLatestActivity: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.getLatestActivity.endpoint,
            method: strapiApis.getLatestActivity.method,
            params: {
                populate: "*",
                ...data
            }
        })
        return res
    },

    saveLatestActivity: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.saveLatestActivity.endpoint,
            method: strapiApis.saveLatestActivity.method,
            data: data
        })
        return res
    }

}

