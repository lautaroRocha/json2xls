import { Route, Routes } from "react-router-dom"
import { ROUTES } from "../../utils/routes"
import { ReactNode } from "react"

const Router = () => {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route path={route.path} element={route.element as ReactNode} key={route.path} />
      ))}
    </Routes>
  )
}

export default Router
