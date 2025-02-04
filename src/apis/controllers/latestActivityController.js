const latestActivityService = require("../services/latestActivityService");

module.exports = {

    savelatestActivity: async (req, res) => {
        try {
            const { categoryId } = req.body
            const data = await latestActivityService.saveLatestActivity({

            })

        } catch (error) {
            console.log("Error in saving user latest history", error)
            return res.status(500).json({ success: false, message: "Internal Server error in saving user latest history list" })
        }
    },

    getLatestActivity: async (req, res) => {
        try {
            const data = await latestActivityService.getLatestActivity()
            return res.status(200).json({ success: true, message: "Successfully fetched Latest Activity", data: data })

        } catch (error) {
            console.log("Error in user latest history", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting user latest history list" })
        }
    }

};
