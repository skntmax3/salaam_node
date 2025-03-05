const { dotenv } = require("./importModules");
dotenv.config(__dirname + "/../../.env");

module.exports = {

     prayers: {
        
        prayersListUrl: {
            endpoint: `${process.env.STRAPI_ADDRESS}/prayers`,
            method: "get"
         },   

         prayersListUrl2: {
            endpoint: `${process.env.STRAPI_ADDRESS}/prayers-times`,
            method: "get"
         },   

     }

}