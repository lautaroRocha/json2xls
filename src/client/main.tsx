import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import * as Sentry from "@sentry/react"
import { sentryConfig } from "./config/sentry"

if (import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init(sentryConfig)
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
