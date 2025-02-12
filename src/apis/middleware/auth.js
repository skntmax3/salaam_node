const jwt = require("../utils/jwt")


 const provideToken = async (req, res , next )=>{
    
    try{
        const token = req.headers['authorization']
        const bearer_token = token.split(' ')[1]
        

        if(!bearer_token) return res.send(` expired token or not a valid user`)  


        let decoded =await  jwt.verify(bearer_token )   
        req.userObj ={}
        const { id} = decoded 
         req.token = `Bearer ${bearer_token}`  
          req.userObj =  { id }
          
         next()
          }catch(err){
            console.log("error message", err);
            res.status(500).json({ success: false, message: "un autherised user" }) 
          }
}

module.exports = provideToken