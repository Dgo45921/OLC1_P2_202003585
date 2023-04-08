import {interpreterController} from "../controller/InterpreterController"
import express from "express";

const morgan = require("morgan")
const router = express.Router()


router.get('/parse', morgan('tiny'), interpreterController.pong)

router.get('/', morgan('tiny'), (req, res) =>{

    res.send("hola")
})


export default router