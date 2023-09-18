import { Router } from "express"
import * as excelController from "../../../controllers/excelController"

const excelRouter = Router()

excelRouter.get("/", excelController.basicGet)

excelRouter.post("/", excelController.createExcelFile)

export default excelRouter
