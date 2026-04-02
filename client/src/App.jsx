import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Research from "./sections/Research"
import Achievements from "./sections/Achievements"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Research />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}