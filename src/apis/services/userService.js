const { dotenv } = require("../../configs/importModules")
const strapiApis = require("../../configs/strapiApis")
dotenv.config(__dirname + "/../../../.env")
const apiFetcher = require("../utils/apiFetcher")

module.exports = {

    getUser: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.getUser.endpoint,
            method: strapiApis.getUser.method,
            params: {
                populate: "*",
                ...data 
            }   
        })
        return res
    },

    createUser: async (data) => {
        const res = await apiFetcher({
            url: strapiApis.createUser.endpoint,
            method: strapiApis.createUser.method,
            data: data
        })
        return res
    },

    getUserByToken: async (token) => {
        const res = await apiFetcher({
            url: strapiApis.getUserMe.endpoint,
            method: strapiApis.getUserMe.method,
            headers: {
                authorization: token
            },
            params: {
                populate: "*"
            }
        })
        return res
    },

    editUser: async (id, data) => {
        const res = await apiFetcher({
            url: strapiApis.editUser.endpoint + id,
            method: strapiApis.editUser.method,
            data: data
        })
        return res
    },

    createAuthToken : async (payload)=> {
        const res = await apiFetcher({
            url: strapiApis.generateUserToken.endpoint ,
            method: strapiApis.generateUserToken.method,
            data: payload
        })
        return res
    },

    getBookmark : async (payload , token)=> {
        const res = await apiFetcher({
            url: strapiApis.bookmark.endpoint ,
            method: strapiApis.bookmark.method,
            params: {...payload},
            headers: {
                authorization: token
            },
        })
        return res
    } ,

    addSongToBookmark : async (payload,token)=> {
        const res = await apiFetcher({
            url: strapiApis.addToBookmark.endpoint ,
            method: strapiApis.addToBookmark.method,
            data: payload,
            headers: {
                authorization: token
            },
        })
        return res
    } ,
    
    updateSongToBookmark : async (payload,token, id )=> {
        const res = await apiFetcher({
            url: `${strapiApis.updateToBookmark.endpoint}/${id}` ,
            method: strapiApis.updateToBookmark.method,
            data: payload,
            headers: {
                authorization: token
            },
        })
        return res
    } ,


}

