import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import AllProjects from "./pages/AllProjects"
import ScrollToTop from "./components/ScrollToTop"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)