const playlistService = require("../services/playlistService");
const userActivityService = require("../services/userActivityService");
const userService = require("../services/userService");
const jwt = require("../utils/jwt");
const jwtHelper = require("../utils/jwt")
const constant =  require('./../utils/constant')
module.exports = {

    getAllUsers: async (req, res) => {
        try {
            const data = await userService.getUser()

            return res.status(200).json({ success: true, message: "Successfully fetched User data", data: data })

        } catch (error) {
            console.log("Error in getting user data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in user data" })
        }
    },

    createUser: async (req, res) => {
        try {
            const { firstname, lastname, mobilenumber  , password } = req.body;

            const userExistsWithPhone = await userService.getUser({
                populate: {},
                filters: {
                    mobilenumber: { "$eq": mobilenumber }
                }
            });

            if (userExistsWithPhone.length) {
                return res.status(200).json({
                    code: 203,
                    success: false,
                    msg: "User already exists!"
                })
            }

            // create user
            const request = {
                firstname: firstname,
                lastname: lastname || '',
                email: `${mobilenumber}@salaam.com`,
                username: mobilenumber,
                mobilenumber: mobilenumber,
                password: password || process.env.STRAPI_USER_PASSWORD,
                role: 1
            }

            const data = await userService.createUser(request);
            const phoneNumber = data?.mobilenumber

            const tokenExpireIn = "1h";
            const token = jwtHelper.sign({ id: data?.id,  phoneNumber }, tokenExpireIn);


            // also create a default playlist

             const payload = {  
                              data: {
                                  playlist_name: "playlist1" ,
                                  user_id:data?.id
                                }
                        };
                   
             let bearerToken  = `Bearer ${token}`
             const playlistCreated = await playlistService.createPlaylist(payload , bearerToken )

            // create user-activity and relate to onboarded user
            //  let userData =  await userActivityService.createUserActivity({
            //     data: {
            //         user: data?.id
            //     }
            // })

            return res.status(200).json({
                code: 200,
                success: true,
                msg: "User is created successfully",
                accessToken: jwtHelper.sign({ id:data?.id ,  phoneNumber }, process.env.JWT_TOKEN_EXPIRE_TIME),
                data: { data }
            })
        } catch (err) {
            console.log("Error in creating user", err)
            return res.status(500).json({ success: false, message: "Error in creating user" })
        }
    },

    editUser: async (req, res) => {
        try {
            const user = req?.user
            const phoneNumber = user?.option?.phoneNumber
            let data = {}

            const userData = await userService.getUser({
                filters: {
                    mobilenumber: { $eq: phoneNumber }
                }
            })
            console.log({ userData })
            if (!userData) return res.status(401).json({ success: false, message: "Invalid user" })

            const props = req.body
            const arr = ["firstname", "lastname", "mobilenumber"]

            arr?.forEach(n => {
                if (props[n] !== undefined) {
                    data[n] = props[n]
                }
            })

            await userService.editUser(userData?.[0]?.id, data)

            return res.status(200).json({ success: true, message: "User data is updated" })

        } catch (err) {
            console.log("Error in ediiting user", err)
            return res.status(500).json({ success: false, message: "Error in editing user" })
        }
    },

    getUser: async (req, res) => {
        try {
            const { mobilenumber } = req.query


            const data = await userService.getUser({
                filters: {
                    mobilenumber: { $eq: mobilenumber }
                }
            })

            return res.status(200).json({ code: 200, success: true, message: "Successfully fetched User data", data: data[0] })

        } catch (error) {
            console.log("Error in getting user data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in user data" })
        }
    }  ,




    checkUserExistOrNot: async (req, res) => {
        try {
            const { mobilenumber } = req.query


            const data = await userService.getUser({
                filters: {
                    mobilenumber: { $eq: mobilenumber }
                }
            })
 
            if(data.length==0)
                    return res.status(200).json({ code: 200, success: true, message: `${data.length>0?"user found":"user not found"}`, data: data.length>0?true:false })
            let user   = data[0]
            // console.log("user exit " ,  data)
            //   genrate jwt token for this 
            
            let jwtToken =  jwt.sign({id: user.id , phoneNumber:user.mobilenumber} , constant.tokenExpireIn)
            return res.status(200).json({ code: 200, success: true, message: "user found", data: { jwt:jwtToken , user } })

        } catch (error) {
            console.log("Error in getting user data", error)
            return res.status(500).json({ success: false, message: "Internal Server error in user data" })
        }
    }


};
