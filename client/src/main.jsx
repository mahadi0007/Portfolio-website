import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import AllProjects from "./pages/AllProjects"
import ScrollToTop from "./components/ScrollToTop"
import { ThemeProvider } from "./context/ThemeContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
)