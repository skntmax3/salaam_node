const { dotenv } = require("./importModules");
dotenv.config(__dirname + "/../../.env");

module.exports = {

    getCategoryList: {
        endpoint: `${process.env.STRAPI_ADDRESS}/categories`,
        method: "get"
    },

    createUser: {
        endpoint: `${process.env.STRAPI_ADDRESS}/users`,
        method: "post"
    },

    getUserMe: {
        endpoint: `${process.env.STRAPI_ADDRESS}/users/me`,
        method: "get"
    },

    editUser: {
        endpoint: `${process.env.STRAPI_ADDRESS}/users/`,
        method: "put"
    },

    getUser: {
        endpoint: `${process.env.STRAPI_ADDRESS}/users`,
        method: "get"
    },

    getHomepage: {
        endpoint: `${process.env.STRAPI_ADDRESS}/categories`,
        method: "get"
    },

    getLatestActivity: {
        endpoint: `${process.env.STRAPI_ADDRESS}/latest-activities`,
        method: "get"
    },

    saveLatestActivity: {
        endpoint: `${process.env.STRAPI_ADDRESS}/latest-activities`,
        method: "post"
    },

    // User Activity
    createUserActivity: {
        endpoint: `${process.env.STRAPI_ADDRESS}/user-activities`,
        method: "post"
    },
    getUserActivity: {
        endpoint: `${process.env.STRAPI_ADDRESS}/user-activities`,
        method: "get"
    },
    editUserActivity: {
        endpoint: `${process.env.STRAPI_ADDRESS}/user-activities/`,
        method: "put"
    },
    deleteUserActivity: {
        endpoint: `${process.env.STRAPI_ADDRESS}/user-activities/`,
        method: "delete"
    },


    saveQuranBookmark: {
        endpoint: `${process.env.STRAPI_ADDRESS}/user-quran-bookmarks`,
        method: "post"
    },
    getQuranBookmark: {
        endpoint: `${process.env.STRAPI_ADDRESS}/user-quran-bookmarks`,
        method: "get"
    },


    saveQuranPlaylist: {
        endpoint: `${process.env.STRAPI_ADDRESS}/user-quran-playlists`,
        method: "post"
    },
    getQuranPlaylist: {
        endpoint: `${process.env.STRAPI_ADDRESS}/user-quran-playlists`,
        method: "post"
    },


    saveDuaFavourite: {
        endpoint: `${process.env.STRAPI_ADDRESS}/user-dua-favourites`,
        method: "post"
    },
    getDuaFavourite: {
        endpoint: `${process.env.STRAPI_ADDRESS}/user-dua-favourites`,
        method: "post"
    }

}