import { Router, Request, Response } from "express"
//ROUTES IMPORTS
import excelRouter from "./excel"

const apiRouter = Router()

apiRouter.get("/", (_req: Request, res: Response) => {
  res.send("Hello world!")
})

//ADD ROUTES
apiRouter.use("/excel", excelRouter)

export default apiRouter
