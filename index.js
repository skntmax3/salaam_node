const { dotenv } = require("./src/configs/importModules")

dotenv.config({path:process.env.NODE_ENV=="dev"?"./.env.development" : process.env.NODE_ENV=="prod"?"./.env.production":"" })

const server = require("./src/server")

const port = process.env.PORT || 5000

const startServer = () => {
    server.listen(port, () => {
        console.log("Welcome", process.env.PORT)
        console.log("Server is running on", port) 
    })
}

startServer()

