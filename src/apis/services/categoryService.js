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

        const res = await apiFetcher({
            url: strapiApis.getHomepage.endpoint,
            method: strapiApis.getHomepage.method,
            params: {
                ...data,
            }
        })

         console.log("categories>>>", res )
        return res
    } ,

    getBanner: async (data) => {

        const res = await apiFetcher({
            url: strapiApis.getHomepageBanner.endpoint,
            method: strapiApis.getHomepageBanner.method,
            params: {
                ...data,
            }
        })

        return res
    },

    getCarasolContent: async (params) => {

        const res = await apiFetcher({
            url: strapiApis.getCarasolContent.endpoint,
            method: strapiApis.getCarasolContent.method,
            params: {
                ...params,
            }
        })
        return res
    },

    getSubCatContent: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.subcatContent.endpoint,
            method: strapiApis.subcatContent.method,
            params: {
                ...data,
            }
        }) 
        return res
    } ,

    getDuaSubcontentItems: async (payload) => {
        const res = await apiFetcher({
            url: strapiApis.duaSubcontentItems.endpoint,
            method: strapiApis.duaSubcontentItems.method,
            params: {
                ...payload,
            }
        }) 
        return res
    } ,
    
    getRecipes: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.getRecipies.endpoint,
            method: strapiApis.getRecipies.method,
            params: {
                ...data,
            }
        }) 
        return res
    } ,

    getTodaysTrivia: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.getTrivia.endpoint,
            method: strapiApis.getTrivia.method,
            params: {
                ...data,
            }
        }) 
        return res
    } ,

}

