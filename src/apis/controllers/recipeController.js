

const recipeService = require("../services/recipeService");
const { generatePlaylistName } = require("../utils/utils");

module.exports = {

    getRecipe: async (req, res) => {
        try {

             const { subCatId, page } = req.query 
             


             if(!subCatId) return res.status(500).json({ success: false, message: "please provide  recipe subcategory id , subCatId" })
            
             
              const  recipeParams = {
                filters : {
                    subcategory:{
                        id:{
                            $eq:subCatId 
                          }
                    } 
                },     
                populate:"*",
                pagination: {
                    page: page || 1 ,
                    pageSize: 10,
                    },
           }            

            let recipes  = await recipeService.getRecipes(recipeParams)
            return res.status(200).json({ success: true, message: `success `, data: recipes })

        } catch (error) {
            console.log("Error in getting category data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in getting category list" })
        }
    } ,


    
};
