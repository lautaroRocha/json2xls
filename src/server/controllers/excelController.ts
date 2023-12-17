import { Request, Response, NextFunction } from "express"
import { json2csv } from "json-2-csv"
import { convertCsvToXlsx } from "@aternus/csv-to-xlsx"
import path from "path"
import { __dirname } from ".."
import fs from "fs"
import { emptyDir } from "fs-extra"
import logger from "../loaders/logger"

const basicGet = (_req: Request, res: Response) => {
  res.json("excel-route")
}

function createXlsxFile(origin: string, destination: string, res: Response) {
  try {
    let conversionAttempts = 0
    let success = false

    while (conversionAttempts < 2) {
      try {
        convertCsvToXlsx(origin, destination)
        success = true
        break
      } catch (e) {
        logger.error("First try failed")
        conversionAttempts++
        if (conversionAttempts === 1) {
          fs.unlinkSync(destination)
        }
      }
    }

    if (success) {
      logger.info("Conversion successful")
    } else {
      logger.error("Conversion failed after multiple attempts")
      res.status(500).send("ERROR: We were unable to correctly convert the file")
    }
  } catch (err) {
    console.error("Unhandled error:", err)
  }
}

function emptyDirectories(dirs: Array<string>) {
  dirs.forEach((dir: string) => {
    emptyDir(dir, (err) => {
      if (err) {
        logger.error(err)
        return
      }
      logger.info(`All files deleted from ${dir} successfully.`)
    })
  })
}

const createExcelFile = async (req: Request, res: Response, _next: NextFunction) => {
  const body = req.body
  const { title, data } = JSON.parse(body)
  const csvString = await json2csv(data, {emptyFieldValue: ' ', preventCsvInjection: true})
  csvString.replaceAll('null', '')
  csvString.replaceAll('undefined', '')
  logger.info('csv string is: ' + csvString)
  const csvPath = path.join(path.join(__dirname, "/csv"), `${title}.csv`)
  const destination = path.join(__dirname, `/xls/${title}.xls`)

  try {
    fs.writeFileSync(csvPath, csvString)
    logger.info("csv written")
  } catch (e) {
    console.log(e)
    logger.error("error writing csv")
  }

  createXlsxFile(csvPath, destination, res)

  res.setHeader("Content-disposition", `attachment; filename="${title}.xls"`).sendFile(destination)

  emptyDirectories([path.join(__dirname, "/csv"), path.join(__dirname, "/xls")])
}

export { basicGet, createExcelFile }
