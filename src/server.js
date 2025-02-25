// const middleware = require("./apis/middlewares/middleware");
const { express, cors } = require("./configs/importModules")
const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
    res.status(200).json({
        message: 'Congratulation! Your application is running successfully'
    })
});

// app.use(middleware.jwtVerification);



app.use("/v1/", require("./apis/routes/router"));

module.exports = app