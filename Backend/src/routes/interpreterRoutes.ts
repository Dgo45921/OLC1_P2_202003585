import {interpreterController} from "../controller/InterpreterController"
import express from "express";

const morgan = require("morgan")
const router = express.Router()


router.get('/ping', morgan('tiny'), interpreterController.parsear)

router.post('/parse', morgan('tiny'), interpreterController.interpretar)

router.get('/getErrors', morgan('tiny'), interpreterController.getErrores)
router.get('/getAST', morgan('tiny'), interpreterController.getAST)

router.get('/', morgan('tiny'), (req, res) =>{

    res.send("hola")
})


export default router