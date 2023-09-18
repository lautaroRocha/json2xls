import * as constants from "./constants"

export const config = {
  app: {
    version: constants.VERSION,
    port: constants.PORT,
    publicUrl: constants.PUBLIC_URL
  },
  logs: {
    level: process.env.LOG_LEVEL || "silly"
  }
}
