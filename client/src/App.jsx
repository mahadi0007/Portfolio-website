import Navbar from "./components/Navbar"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}