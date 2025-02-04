const { dotenv } = require("../../configs/importModules")
const strapiApis = require("../../configs/strapiApis")
dotenv.config(__dirname + "/../../../.env")
const apiFetcher = require("../utils/apiFetcher")

module.exports = {

    createUserActivity: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.createUserActivity.endpoint,
            method: strapiApis.createUserActivity.method,
            data: data
        })
        return res
    },
    getUserActivity: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.getUserActivity.endpoint,
            method: strapiApis.getUserActivity.method,
            params: {
                ...data
            }
        })
        return res
    },
    updateUserActivity: async (id, data) => {
        const res = await apiFetcher({
            url: strapiApis.editUserActivity.endpoint + id,
            method: strapiApis.editUserActivity.method,
            data: data
        })
        return res
    },


    saveQuranBookmark: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.saveQuranBookmark.endpoint,
            method: strapiApis.saveQuranBookmark.method,
            data: data
        })
        return res
    },
    getQuranBookmark: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.getQuranBookmark.endpoint,
            method: strapiApis.getQuranBookmark.method,
            params: {
                ...data
            }
        })
        return res
    },


    saveQuranPlaylist: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.saveQuranPlaylist.endpoint,
            method: strapiApis.saveQuranPlaylist.method,
            data: data
        })
        return res
    },
    getQuranPlaylist: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.getQuranPlaylist.endpoint,
            method: strapiApis.getQuranPlaylist.method,
            params: {
                ...data
            }
        })
        return res
    },

    saveDuaFavourite: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.saveDuaFavourite.endpoint,
            method: strapiApis.saveDuaFavourite.method,
            data: data
        })
        return res
    },
    getDuaFavourite: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.getDuaFavourite.endpoint,
            method: strapiApis.getDuaFavourite.method,
            params: {
                ...data
            }
        })
        return res
    }


}

