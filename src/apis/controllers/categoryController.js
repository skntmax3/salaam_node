
const categoryService = require("../services/categoryService");
const userService = require("../services/userService");

module.exports = {

    getCategoryListData: async (req, res) => {
        try {
            const { categoryText } = req?.query

            const filters = categoryText ? { categoryText: { $eq: categoryText } } : {};

            const params = {
                filters,
                populate: [
                    "categoryIcon",
                    "sub_categories",
                    "sub_categories.sub_category_listings",
                    "sub_categories.sub_category_listings.icon",
                    "sub_categories.sub_category_listings.file"
                ]
            };
            const data = await categoryService.getCategoryList(params)

            
            return res.status(200).json({ success: true, message: "Successfully fetched Category List data", data: data?.data[0] })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting category list" })
        }
    },

    editCategoryListData: async (req, res) => {
        try {
            const { itemId, categoryType, userId } = req.body;

            if (!itemId || !categoryType || !userId) {
                return res.status(400).json({ success: false, message: "Missing required fields" });
            }

            let updateData = {};
            if (categoryType === "bookmark") {
                updateData = { user_quran_bookmark: itemId };
            } else if (categoryType === "playlist") {
                updateData = { user_quran_playlist: itemId };
            } else if (categoryType === "favourite") {
                updateData = { user_dua_favourite: itemId }
            } else {
                return res.status(400).json({ success: false, message: "Invalid categoryType" });
            }

            // const data = await userService.createUserActivity({
            //     data: {

            //     }
            // })

            // Create or update user activity record
            // const data = await strapi.entityService.create("api::user-activity.user-activity", {
            //     data: {
            //         user: userId,
            //         ...updateData
            //     }
            // });

        } catch (error) {

        }
    },

    getHomepageData: async (req, res) => {
        try {

            const params = {
                populate: [
                    "banners",
                    "banners.image",
                    "categories",
                    "categories.categoryIcon",
                    "categories.sub_categories",
                    "categories.sub_categories.sub_category_listings"
                ]
            };
            const data = await categoryService.getHomepageData(params)

            return res.status(200).json({ success: true, code: 200, message: "Successfully fetched Homepage data", data: data?.data[0] })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting category list" })
        }
    }

};
