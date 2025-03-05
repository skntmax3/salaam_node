const { dotenv } = require("../../configs/importModules")
const strapiApis = require("../../configs/urls")
dotenv.config(__dirname + "/../../../.env")
const apiFetcher = require("../utils/apiFetcher")

module.exports = {

    getPrayers: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.prayers.prayersListUrl.endpoint,
            method: strapiApis.prayers.prayersListUrl.method,
            params: {
                ...data 
            }   
        })
        return res
    },


    getPrayersDateWise: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.prayers.prayersListUrl2.endpoint,
            method: strapiApis.prayers.prayersListUrl2.method,
            params: {
                ...data 
            }   
        })
        return res
    },

}

