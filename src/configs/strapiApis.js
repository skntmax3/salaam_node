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

    getHomepageBanner: {
        endpoint: `${process.env.STRAPI_ADDRESS}/global`,
        method: "get"
    },

    getCarasolContent: {
        endpoint: `${process.env.STRAPI_ADDRESS}/carousels`,
        method: "get"
    },
    postCarasolContent: {
        endpoint: `${process.env.STRAPI_ADDRESS}/carousels`,
        method: "post"
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
    } ,

    generateUserToken: {
        endpoint: `${process.env.STRAPI_ADDRESS}/auth/local`,
        method: "post"
    } ,



    createPlaylist: {
        endpoint: `${process.env.STRAPI_ADDRESS}/playlists`,
        method: "post"
    } ,

    isUserHavePlaylist: {
        endpoint: `${process.env.STRAPI_ADDRESS}/playlists`,
        method: "get"
    } ,


    subcatContent: {
        endpoint: `${process.env.STRAPI_ADDRESS}/subcategories`,
        method: "get"
    } ,

    getRecipies: {
        endpoint: `${process.env.STRAPI_ADDRESS}/recipes`,
        method: "get"
    } ,

    getTrivia: {
        endpoint: `${process.env.STRAPI_ADDRESS}/trivias`,
        method: "get"
    } ,

    getTrivia: {
        endpoint: `${process.env.STRAPI_ADDRESS}/trivias/`,
        method: "get"
    },


    recipe: {
        endpoint: `${process.env.STRAPI_ADDRESS}/subcat-have-recipes/`,
        method: "get"
    },


 

}