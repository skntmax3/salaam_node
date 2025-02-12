const { dotenv } = require("../../configs/importModules")
const strapiApis = require("../../configs/strapiApis")
dotenv.config(__dirname + "/../../../.env")
const apiFetcher = require("../utils/apiFetcher")

module.exports = {

    createPlaylist: async (payload , token  ) => {
        const res = await apiFetcher({
            url: strapiApis.createPlaylist.endpoint,
            method: strapiApis.createPlaylist.method,
            headers: {
                authorization: token
            },
            data:{
                 ...payload
            }
        })

     
        return res
    },
 
}

