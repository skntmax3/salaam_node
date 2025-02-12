
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
    }

};
