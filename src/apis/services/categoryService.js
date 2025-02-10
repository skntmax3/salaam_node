const { dotenv } = require("../../configs/importModules")
const strapiApis = require("../../configs/strapiApis")
dotenv.config(__dirname + "/../../../.env")
const apiFetcher = require("../utils/apiFetcher")

module.exports = {

    getCategoryList: async (data) => {

        console.log("category ", {
            url: strapiApis.getCategoryList.endpoint,
            method: strapiApis.getCategoryList.method,
            params: {
                ...data,
            }
        })

        const res = await apiFetcher({
            url: strapiApis.getCategoryList.endpoint,
            method: strapiApis.getCategoryList.method,
            params: {
                ...data,
            }
        })

        return res
    },

    getHomepageData: async (data) => {

        console.log("params " , {
            url: strapiApis.getHomepage.endpoint,
            method: strapiApis.getHomepage.method,
            params: {
                ...data,
            }
        } )
        
        const res = await apiFetcher({
            url: strapiApis.getHomepage.endpoint,
            method: strapiApis.getHomepage.method,
            params: {
                ...data,
            }
        })

         console.log("categories>>>", res )
        return res
    }
}

