import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Research from "./sections/Research"
import Education from "./sections/Education"
import Achievements from "./sections/Achievements"
import Contact from "./sections/Contact"
import SectionReveal from "./components/SectionReveal"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><Skills /></SectionReveal>
        <SectionReveal><Experience /></SectionReveal>
        <SectionReveal><Projects /></SectionReveal>
        <SectionReveal><Research /></SectionReveal>
        <SectionReveal><Education /></SectionReveal>
        <SectionReveal><Achievements /></SectionReveal>
        <SectionReveal><Contact /></SectionReveal>
      </main>
      <Footer />
    </div>
  )
}