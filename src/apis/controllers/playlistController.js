
const playlistService = require("../services/playlistService");
const userService = require("../services/userService");
const { generatePlaylistName } = require("../utils/utils");

module.exports = {

    createPlaylist: async (req, res) => {
        try {

            const { token , userObj:{id} ,  }  =  req 
            const  { playlistName} = req.body 
            const  userParams = {
                headers: {
                    authorization: token
                },
                filters: {
                 id: { $eq: id }
                }
           }
            
           let userObj  = await userService.getUser(userParams)
         
            if(userObj.length==0) {
            return res.status(200).json({ success: true, message: "No user found ", data: null  })   
            }

            const payload = {  
                  data: {
                      playlist_name: playlistName ||  generatePlaylistName(userObj[0].username ,userObj[0].email ) ,
                      user_id:id 
                    }
            };
       
            const data = await playlistService.createPlaylist(payload , token )
            return res.status(200).json({ success: true, message: `succesfully created playlist  ${playlistName ||  generatePlaylistName(userObj[0].username ,userObj[0].email) }`, data: data?.data[0] })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting category list" })
        }
    } ,


    isUserHavePlaylist: async (req, res) => {
        try {
            const { token , userObj:{id}}  =  req
            
            const payload = {  
             
                filters: {
                    user_id: {
                        id: {
                            $eq: id  // Use the user's ID to fetch only their playlists
                        }
                    }
                },              
            };
       
            const playlists = await playlistService.isUserHavePlaylist(payload , token )
            return res.status(200).json({ success: true, message: "Successfully fetched usrs playlist ", data: playlists })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting usrs playlist" })
        }
    },

    getUserBookmark: async (req, res) => {
        try {
            const { token , userObj:{id}}  =  req
            
            const { page =1, pageSize=10  } = req.query 
    
            const payload = {               
                filters : {
                        users:{
                             id:{
                                 $eq:id 
                             }
                          }
                   },    
                   
                   populate:{
                            song_ids:{
                                populate:"*"
                            }
                   },
                    pagination: {
                        page: page  ,
                        pageSize:pageSize,
                    },

            };

            const bookmark = await userService.getBookmark(payload , token )
            console.log("bookmark", bookmark)
        
            let bk =  (Array.isArray(bookmark?.data) && bookmark?.data?.length>0) ? bookmark?.data?.map(_=> _.song_ids).flat() : [] 
             return res.status(200).json({ success: true, message: "Successfully fetched usrs bookmark ", data: bk })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting usrs bookmark" })
        }
    } ,

    createUserBookmark: async (req, res) => {
        try {
            const { token , userObj:{id}}  =  req
             const { song_id} = req.body 
             const payload = { 
                 data:{
                     users:id , 
                     song_ids:song_id 
                    }              
              };
       
            let bookmarked = await userService.addSongToBookmark(payload , token)
            return res.status(200).json({ success: true, message: "Successfully fetched usrs bookmark ", data: bookmarked })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting usrs bookmark" })
        }
    } ,

    isBookmarked: async (req, res) => {
        try {
            const { token , userObj:{id}}  =  req
             const { song_id} = req.query 

             console.log(song_id , id )
             const  payload = { 
                    filters: {
                      $and: [
                        { song_ids: { $eq: song_id } },  // Match specific song_id
                        { users: { $eq: id } }       // Match specific user_id
                      ]
                    },
                    populate: "*"
             }

                let isBookmarked = await userService.isBookmarked(payload , token)
                
                let isSongBookmarked =  (Array.isArray(isBookmarked?.data) && isBookmarked?.data?.length>0) ? true : false 
            return res.status(200).json({ success: true, message: "success  ", data: isSongBookmarked })

        } catch (error) {
            console.log("Error ", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting usrs bookmark" })
        }
    }


  

};
