
const categoryService = require("../services/categoryService");
const userService = require("../services/userService");

module.exports = {

    getCategoryListData: async (req, res) => {
        try {
            const { categoryText } = req?.query

            const filters = categoryText ? { name: { 
                $eq: categoryText } } : {};

            const params = {
                filters,
                populate: {
                    "categoryIcon":true ,
                    "subcategories":true ,
                     "banner":true ,
                     "subcategories": {
                         populate:{
                            icon:true 
                         }
                     }
                }
            };
            const data = await categoryService.getCategoryList(params)
            return res.status(200).json({ success: true, message: "Successfully fetched Category List data", data: data?.data[0] })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting category list" })
        }
    },
     
    getPrayerList: async (req, res) => {
        try {
            const { categoryText ,  reflectDate } = req.body
            const { page =1, pageSize=10  } = req.body 

            if(!categoryText)
                return res.status(400).json({ success: false, code: 400, message: "categorytext is required ", data: []  })

            const onDate =  reflectDate?new Date(reflectDate).toISOString().split("T")[0] :  new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

            const filters =  { 
                category: { 
                    name: { $eq: categoryText }  
                },
                duaTime: {
                    $gte: `${onDate}T00:00:00.000Z`,
                    $lt: `${onDate}T23:59:59.999Z`
                }
            }

            const params = {
                filters,
                pagination: {
                    page: page  ,
                    pageSize:pageSize,
                },
            };
            const prayers = await categoryService.getPrayersList(params)
            return res.status(200).json({ success: true, message: "Successfully fetched prayer List data", data: prayers })

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
                    // "banners",
                    "categoryIcon",
                    "subcategories",
                     "banner",
                      
                    // "categories.categoryIcon",
                    // "categories.sub_categories",
                    // "categories.sub_categories.sub_category_listings"
                ]
            };

            const  carasolParams = {
                populate:"*"
            }
             
            const  recipesParams = {
                populate:"*"
            }

            const  triviaParams = {
                populate: "*",
                sort: ["createdAt:desc"],
                pagination: {
                    limit: 1
                }
            }

            const homepageData = await categoryService.getHomepageData(params) // category 
            let homepageBanner = await categoryService.getBanner()  // banner data 
            let homepageCarasol = await categoryService.getCarasolContent(carasolParams)  // carasol 
            let recipies = await categoryService.getRecipes(recipesParams)  // carasol 
            let todaysTrivia =  await categoryService.getTodaysTrivia(triviaParams)
            homepageData.homepageBanner = homepageBanner
            homepageData.homepageCarasol = homepageCarasol
            homepageData.recipies = recipies
            homepageData.trivia = todaysTrivia
            
            return res.status(200).json({ success: true, code: 200, message: "Successfully fetched Homepage data", data: homepageData  })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting category list" })
        }
    } ,

    getSubCatContent: async (req, res) => {
        try {
             
            const  { subcat_name , subcat_id ,  page =1 , pageSize=10  } = req.query
           

             const filterParam = 
                subcat_name?
                { 
                    subcatTitle:{
                    $eq: subcat_name
                  }
                  }: {
                         id:{
                            $eq:Number(subcat_id) 
                         }                    
                }

                    
            const params = {
                populate: "*",
                filters: {
                    subcategories: {...filterParam},
                },
                sort: ["createdAt:desc"] ,
                pagination:{
                    page: page  ,
                    pageSize: pageSize  
                }
            };
           
           
            const subCatContent = await categoryService.getSubCatContent(params)     
            return res.status(200).json({ success: true, code: 200, message: "Successfully fetched Homepage data", data: subCatContent  })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting category list" })
        }
    }  ,

    getDuaSubcontentItems: async (req, res) => {
        try {
            const { duaListItemId } = req.body;
            const  {   page =1 , pageSize=10  } = req.query
            if (!duaListItemId ) {
                return res.status(400).json({ success: false, message: `Missing ${duaListItemId} fields` });
            }
            const params = {
                populate: "*",
                filters: {
                    dua_subcontent_ids:  { id :{ $eq: duaListItemId} },
                },
                sort: ["createdAt:desc"] ,
                pagination:{
                    page: page  ,
                    pageSize: pageSize  
                }
            };

            const duaSubcontentItems = await categoryService.getDuaSubcontentItems(params)                
            return res.status(200).json({ success: true, code: 200, message: " fetched subcontent data ", data: duaSubcontentItems  })

        } catch (error) {

        }
    },



};
