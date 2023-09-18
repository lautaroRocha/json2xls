import { config } from "dotenv"

config({})

export const VERSION = process.env.VITE_VERSION || "0.0.0"
export const PORT = process.env.VITE_SERVER_PORT || 8080
export const PUBLIC_URL = process.env.VITE_PUBLIC_URL || ""
