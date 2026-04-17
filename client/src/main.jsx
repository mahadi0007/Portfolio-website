import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import AllProjects from "./pages/AllProjects"
import ScrollToTop from "./components/ScrollToTop"
import { ThemeProvider } from "./context/ThemeContext"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
)