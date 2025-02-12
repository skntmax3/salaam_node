
const playlistService = require("../services/playlistService");

module.exports = {

    createPlaylist: async (req, res) => {
        try {

            const { token , userObj:{id}}  =  req 
            const payload = {  
                  data: {
                      playlist_name: "playlist2",
                      user_id:id 
                    }
            };
       
            const data = await playlistService.createPlaylist(payload , token )
            return res.status(200).json({ success: true, message: "Successfully fetched Category List data", data: data?.data[0] })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting category list" })
        }
    }

};
