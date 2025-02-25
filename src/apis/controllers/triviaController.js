
const playlistService = require("../services/playlistService");
const triviaService = require("../services/triviaService");
const { generatePlaylistName } = require("../utils/utils");

module.exports = {

    getTrivia: async (req, res) => {
        try {
            const { page =1, pageSize=10  } = req.query 

            const  userParams = {
                params:{
                    populate:"*" ,
                    pagination: {
                        page: 1,
                        pageSize: 10,
                      },
                },
                
                pagination: {
                    page: page  ,
                    pageSize:pageSize,
                },

           }
            

           let trivia  = await triviaService.getTrivia(userParams)
        
            return res.status(200).json({ success: true, message: `success `, data: trivia })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting category list" })
        }
    } ,


    likeTriviaByUser: async (req, res) => {
        try {

            const { token , userObj:{id} ,  }  =  req 
            const {  triviaId} = req.body 
            
            if(!triviaId)
             return res.status(400).json({ success: false, message: "Please provide triviaId" }) 

            const  userParams = {
                data:{
                    user_id:id , 
                    trivias: triviaId
                },
             }
            

            let likedTrivia  = await triviaService.likeTrivia(userParams  ,token )
            return res.status(200).json({ success: true, message: `success `, data: likedTrivia })

        } catch (error) {
            console.log("Error in adding likes for trivia", error)
            return res.status(500).json({ success: false, message: "Internal server error of adding trviai likes " })
        }
    } ,


    getTriviaLikedByUser: async (req, res) => {
        try {

            const { token , userObj:{id} ,  }  =  req 
            const {  triviaId } = req.query 
            const { page =1, pageSize=10  } = req.query 
          
            if(!triviaId)
             return res.status(400).json({ success: false, message: "Please provide triviaId" }) 

            const  userParams = {
                filters : {
                    $and: [
                        { user_id: { $eq: id } },  // Match specific song_id
                        { trivias: { $eq: Number(triviaId) } }       // Match specific user_id
                      ]
               },    
                
                pagination: {
                    page: page  ,
                    pageSize:pageSize,
                },

             }
            

            let likedTrivia  = await triviaService.getLikedTriviaByUser(userParams  ,token )
            return res.status(200).json({ success: true, message: `success `, data: likedTrivia })

        } catch (error) {
            console.log("Error in adding likes for trivia", error)
            return res.status(500).json({ success: false, message: "Internal server error of adding trviai likes " })
        }
    } ,


    
};
