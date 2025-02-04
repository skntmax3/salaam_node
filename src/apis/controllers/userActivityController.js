const userActivityService = require("../services/userActivityService");

module.exports = {

    //bookmark
    createBookmark: async (req, res) => {
        try {
            const { itemId } = req.body
            const user = req?.user
            const phoneNumber = user?.option?.phoneNumber

            const params = {
                filters: {
                    user: {
                        mobilenumber: { $eq: phoneNumber }
                    }
                },
                populate: "*"
            };

            const userActivityData = await userActivityService.getUserActivity(params)
            const userActivityId = userActivityData?.data?.[0]?.documentId;

            if (!userActivityId) {
                return res.status(404).json({ success: false, message: "User activity not found" });
            }

            // Update existing user activity by adding a bookmark
            const updatedActivity = await userActivityService.updateUserActivity(userActivityId, {
                data: {
                    quran_bookmark: {
                        connect: [{ id: itemId }]
                    }
                }
            });
            if (!updatedActivity) {
                return res.status(500).json({ success: false, message: "Failed to update bookmark" });
            }

            return res.status(200).json({
                success: true,
                message: "Successfully updated user activity with bookmark",
                data: updatedActivity
            });

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in saving bookmark" })
        }
    },

    getBookmark: async (req, res) => {
        try {
            const user = req?.user
            const phoneNumber = user?.option?.phoneNumber

            const params = {
                filters: {
                    user: {
                        mobilenumber: { $eq: phoneNumber }
                    }
                },
                populate: ["quran_bookmark", "quran_bookmark.icon", "quran_bookmark.file", "quran_bookmark.singer", "quran_bookmark.sub_categories"]
            };

            const userActivityData = await userActivityService.getUserActivity(params)
            console.log(userActivityData?.data?.[0])


            return res.status(200).json({ success: true, message: "Successfully fetched bookmark", data: userActivityData })

        } catch (error) {
            console.log("Error in getting bookmark data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting bookmark" })
        }
    },

    deleteBookmark: async (req, res) => {
        try {
            const { itemId } = req.body
            const user = req?.user
            const phoneNumber = user?.option?.phoneNumber

            const params = {
                filters: {
                    user: {
                        mobilenumber: { $eq: phoneNumber }
                    }
                },
                populate: "*"
            };

            const userActivityData = await userActivityService.getUserActivity(params)
            const userActivityId = userActivityData?.data?.[0]?.documentId;

            if (!userActivityId) {
                return res.status(404).json({ success: false, message: "User activity not found" });
            }

            const updatedActivity = await userActivityService.updateUserActivity(userActivityId, {
                data: {
                    quran_bookmark: {
                        disconnect: [{ id: String(itemId) }]
                    }
                }
            });

            if (!updatedActivity) {
                return res.status(500).json({ success: false, message: "Failed to delete bookmark" });
            }

            return res.status(200).json({ success: true, message: "Bookmark deleted successfully" });

        } catch (error) {
            console.log("Error in getting bookmark data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting bookmark" })
        }
    },

    // playlist
    createPlaylist: async (req, res) => {
        try {
            const { itemId } = req.body
            const user = req?.user
            const phoneNumber = user?.option?.phoneNumber

            const params = {
                filters: {
                    user: {
                        mobilenumber: { $eq: phoneNumber }
                    }
                },
                populate: "*"
            };

            const userActivityData = await userActivityService.getUserActivity(params)
            const userActivityId = userActivityData?.data?.[0]?.documentId;

            if (!userActivityId) {
                return res.status(404).json({ success: false, message: "User activity not found" });
            }

            // Update existing user activity by adding a playlist
            const updatedActivity = await userActivityService.updateUserActivity(userActivityId, {
                data: {
                    quran_playlist: {
                        connect: [{ id: itemId }]
                    }
                }
            });
            if (!updatedActivity) {
                return res.status(500).json({ success: false, message: "Failed to update playlist" });
            }

            return res.status(200).json({
                success: true,
                message: "Successfully updated user activity with playlist",
                data: updatedActivity
            });

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in saving playlist" })
        }
    },

    getPlaylist: async (req, res) => {
        try {
            const user = req?.user
            const phoneNumber = user?.option?.phoneNumber

            const params = {
                filters: {
                    user: {
                        mobilenumber: { $eq: phoneNumber }
                    }
                },
                populate: ["quran_playlist", "quran_playlist.icon", "quran_playlist.file", "quran_playlist.singer", "quran_playlist.sub_categories"]
            };

            const userActivityData = await userActivityService.getUserActivity(params)
            console.log(userActivityData?.data?.[0])


            return res.status(200).json({ success: true, message: "Successfully fetched bookmark", data: userActivityData })

        } catch (error) {
            console.log("Error in getting bookmark data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting bookmark" })
        }
    },

    deletePlaylist: async (req, res) => {
        try {
            const { itemId } = req.body
            const user = req?.user
            const phoneNumber = user?.option?.phoneNumber

            const params = {
                filters: {
                    user: {
                        mobilenumber: { $eq: phoneNumber }
                    }
                },
                populate: "*"
            };

            const userActivityData = await userActivityService.getUserActivity(params)
            const userActivityId = userActivityData?.data?.[0]?.documentId;

            if (!userActivityId) {
                return res.status(404).json({ success: false, message: "User activity not found" });
            }

            const updatedActivity = await userActivityService.updateUserActivity(userActivityId, {
                data: {
                    quran_playlist: {
                        disconnect: [{ id: String(itemId) }]
                    }
                }
            });

            if (!updatedActivity) {
                return res.status(500).json({ success: false, message: "Failed to delete playlist" });
            }

            return res.status(200).json({ success: true, message: "playlist deleted successfully" });

        } catch (error) {
            console.log("Error in getting playlist data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting playlist" })
        }
    },



    // favourite
    createFavourite: async (req, res) => {
        try {
            const { itemId } = req.body
            const user = req?.user
            const phoneNumber = user?.option?.phoneNumber

            const params = {
                filters: {
                    user: {
                        mobilenumber: { $eq: phoneNumber }
                    }
                },
                populate: "*"
            };

            const userActivityData = await userActivityService.getUserActivity(params)
            const userActivityId = userActivityData?.data?.[0]?.documentId;

            if (!userActivityId) {
                return res.status(404).json({ success: false, message: "User activity not found" });
            }

            // Update existing user activity by adding a playlist
            const updatedActivity = await userActivityService.updateUserActivity(userActivityId, {
                data: {
                    dua_favourite: {
                        connect: [{ id: itemId }]
                    }
                }
            });
            if (!updatedActivity) {
                return res.status(500).json({ success: false, message: "Failed to update favourite" });
            }

            return res.status(200).json({
                success: true,
                message: "Successfully updated user activity with favourite",
                data: updatedActivity
            });

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in saving favourite" })
        }
    },

    getFavourite: async (req, res) => {
        try {
            const user = req?.user
            const phoneNumber = user?.option?.phoneNumber

            const params = {
                filters: {
                    user: {
                        mobilenumber: { $eq: phoneNumber }
                    }
                },
                populate: ["dua_favourite", "dua_favourite.icon", "dua_favourite.file", "dua_favourite.singer", "dua_favourite.sub_categories"]
            };

            const userActivityData = await userActivityService.getUserActivity(params)
            console.log(userActivityData?.data?.[0])


            return res.status(200).json({ success: true, message: "Successfully fetched favourite", data: userActivityData })

        } catch (error) {
            console.log("Error in getting favourite data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting favourite" })
        }
    },

    deleteFavourite: async (req, res) => {
        try {
            const { itemId } = req.body
            const user = req?.user
            const phoneNumber = user?.option?.phoneNumber

            const params = {
                filters: {
                    user: {
                        mobilenumber: { $eq: phoneNumber }
                    }
                },
                populate: "*"
            };

            const userActivityData = await userActivityService.getUserActivity(params)
            const userActivityId = userActivityData?.data?.[0]?.documentId;

            if (!userActivityId) {
                return res.status(404).json({ success: false, message: "User activity not found" });
            }

            const updatedActivity = await userActivityService.updateUserActivity(userActivityId, {
                data: {
                    dua_favourite: {
                        disconnect: [{ id: String(itemId) }]
                    }
                }
            });

            if (!updatedActivity) {
                return res.status(500).json({ success: false, message: "Failed to delete favourite" });
            }

            return res.status(200).json({ success: true, message: "favourite deleted successfully" });

        } catch (error) {
            console.log("Error in getting favourite data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting favourite" })
        }
    },

};
