import bodyParser from "body-parser"
import * as Sentry from "@sentry/node"
import express from "express"
import path from "path"
import cors from "cors"
import { fileURLToPath } from "url"
import { config } from "./config/index"
import logger from "./loaders/logger"
import apiRouter from "./routes/api/index"
import { errorLogger } from "./middlewares/errorLogger"

const app = express()


app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(bodyParser.text({ limit: "200mb" }))
app.use(cors())
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)

export const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, "../../dist")))

app.use("/api", apiRouter)
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"))
})

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler())
app.use(errorLogger)
app
  .listen(config.app.port, () => logger.info(`Server listening on port: ${config.app.port}`))
  .on("error", (err) => {
    logger.error(err)
    process.exit(1)
  })
