import { ReactNode } from "react"
import { Home, Docs } from "../pages"

export interface RouteData {
  path: string
  element: ReactNode
}

export const ROUTES: Array<RouteData> = [
  { path: "/", element: <Home /> },
  { path: "/docs", element: <Docs /> }
]
