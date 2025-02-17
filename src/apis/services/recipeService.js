const { dotenv } = require("../../configs/importModules")
const strapiApis = require("../../configs/strapiApis")
dotenv.config(__dirname + "/../../../.env")
const apiFetcher = require("../utils/apiFetcher")

module.exports = {

    getRecipes: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.recipe.endpoint,
            method: strapiApis.recipe.method,
            params: {
                ...data 
            }   
        })
        return res
    },

}

