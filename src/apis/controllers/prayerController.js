
const prayerService = require("../services/prayerService");
const { getTime } = require("../utils/utils");

module.exports = {

    getPrayers: async (req, res) => {
       
          try {
              
                    const {   reflectDate } = req.body  // reflectDate -> YYYY-MM-DD ,  categoryText -
                    const { page =1, pageSize=10  } = req.query 

                    const filters = { 
                        dua_time: {
                            $gte: reflectDate?new Date(reflectDate).setHours(0, 0, 0, 0):new Date().setHours(0, 0, 0, 0) ,
                            $lte: reflectDate?new Date(reflectDate).setHours(23, 59, 59, 999):new Date().setHours(23, 59, 59, 999),
                        },
                    } 
                             
                    const populate = { 
                        prayers:{
                            fields: ["id", "title" ,  ],
                            populate: {
                                image: {
                                    fields: ["url"], // Ensure only the image URL is fetched
                                },
                            },
                          }
                     } 

                    const params = {
                        filters,
                        populate,
                        pagination: {
                            page: page  ,
                            pageSize:pageSize,
                        },
                    };

                    const prayers = await prayerService.getPrayersDateWise(params)
                    let  list = prayers.data?.map(ele=> ele.prayers ).flat().filter(Boolean)
                    list.forEach((ele,i)=>{
                        ele.dua_time = getTime(prayers?.data?.[i].dua_time)  
                        ele.raw_dua_time = prayers?.data?.[i].dua_time  
                    })
                     
                    return res.status(200).json({ success: true, message: "Successfully fetched prayer List data", data: list })
             
                } catch (error) {
                    console.log("Error in getting category data", error)
                    return res.status(500).json({ success: false, message: "Internal Server error in getting category list" })
                }
                
    },



};
