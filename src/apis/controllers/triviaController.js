
const playlistService = require("../services/playlistService");
const triviaService = require("../services/triviaService");
const { generatePlaylistName } = require("../utils/utils");

module.exports = {

    getTrivia: async (req, res) => {
        try {

           
            const  userParams = {
                params:{
                    populate:"*" ,
                    pagination: {
                        page: 1,
                        pageSize: 10,
                      },
                },
           }
            

           let trivia  = await triviaService.getTrivia(userParams)
        
            return res.status(200).json({ success: true, message: `success `, data: trivia })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting category list" })
        }
    } ,


    
};
