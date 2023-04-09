import express from 'express'
const morgan = require("morgan")
const cors = require("cors")
const corsOptions = {origin: true, optionsSuccessStatus: 200};
import router from "./routes/interpreterRoutes";


const app = express();
app.use(morgan("tiny"))

// Apply cors middleware with custom options
app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server running on port: ${PORT}`)
})

app.use('/interpreter', router)


app.get('/ping', morgan('tiny'), (req, res) =>{
    console.log("me han hecho ping")
    res.send("hola ping")
})
