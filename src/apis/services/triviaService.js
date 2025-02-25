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

    likeTrivia: async (data , token) => {
        const res = await apiFetcher({
            url: strapiApis.userLikesTrivia.endpoint,
            method: strapiApis.userLikesTrivia.method,
            data: data ,
            headers: {
                authorization: token
            },
        })
        return res
    },


    getLikedTriviaByUser: async (data , token) => {
        const res = await apiFetcher({
            url: strapiApis.getLikedTriviaByUser.endpoint,
            method: strapiApis.getLikedTriviaByUser.method,
            params: {...data} ,
            headers: {
                authorization: token
            },
        })
        return res
    },

}

