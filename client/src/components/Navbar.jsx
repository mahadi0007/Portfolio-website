import { useEffect, useRef, useState } from "react"
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
]

const expertiseLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expertiseOpen, setExpertiseOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "research",
        "education",
        "achievements",
        "contact",
      ]

      const scrollPosition = window.scrollY + 140

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (!section) continue

        const { offsetTop, offsetHeight } = section
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(sectionId)
          break
        }
      }
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setExpertiseOpen(false)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const isExpertiseActive = ["skills", "education", "achievements"].includes(
    activeSection
  )

  const handleNavClick = () => {
    setMobileOpen(false)
    setExpertiseOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-slate-900 transition hover:text-cyan-500 dark:text-white dark:hover:text-cyan-400"
        >
          Md Mahadi <span className="text-cyan-500 dark:text-cyan-400">Hasan</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => {
              const isActive = activeSection === link.href.slice(1)

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? "text-cyan-500 dark:text-cyan-400"
                      : "text-slate-700 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </a>
              )
            })}

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setExpertiseOpen((prev) => !prev)}
                className={`flex items-center gap-2 text-sm font-medium transition ${
                  isExpertiseActive || expertiseOpen
                    ? "text-cyan-500 dark:text-cyan-400"
                    : "text-slate-700 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400"
                }`}
              >
                Expertise
                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    expertiseOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expertiseOpen && (
                <div className="absolute left-0 top-full mt-3 w-52 rounded-2xl border border-slate-200/70 bg-white/95 p-2 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/95 dark:shadow-cyan-500/10">
                  {expertiseLinks.map((link) => {
                    const isActive = activeSection === link.href.slice(1)

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={handleNavClick}
                        className={`block rounded-xl px-4 py-3 text-sm transition ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400"
                            : "text-slate-700 hover:bg-slate-100 hover:text-cyan-500 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                        }`}
                      >
                        {link.name}
                      </a>
                    )
                  })}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => {
              const isActive = activeSection === link.href.slice(1)

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? "text-cyan-500 dark:text-cyan-400"
                      : "text-slate-700 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </nav>

          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="text-slate-900 transition hover:text-cyan-500 dark:text-white dark:hover:text-cyan-400"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200/70 bg-white/95 px-6 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-3">
            <a
              href="#home"
              onClick={handleNavClick}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                activeSection === "home"
                  ? "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400"
                  : "text-slate-700 hover:bg-slate-100 hover:text-cyan-500 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-400"
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={handleNavClick}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                activeSection === "about"
                  ? "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400"
                  : "text-slate-700 hover:bg-slate-100 hover:text-cyan-500 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-400"
              }`}
            >
              About
            </a>

            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-2 dark:border-white/10 dark:bg-white/[0.03]">
              <button
                type="button"
                onClick={() => setExpertiseOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isExpertiseActive || expertiseOpen
                    ? "text-cyan-500 dark:text-cyan-400"
                    : "text-slate-700 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400"
                }`}
              >
                <span>Expertise</span>
                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    expertiseOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expertiseOpen && (
                <div className="mt-2 flex flex-col gap-2">
                  {expertiseLinks.map((link) => {
                    const isActive = activeSection === link.href.slice(1)

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={handleNavClick}
                        className={`rounded-xl px-4 py-3 text-sm transition ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400"
                            : "text-slate-700 hover:bg-slate-100 hover:text-cyan-500 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                        }`}
                      >
                        {link.name}
                      </a>
                    )
                  })}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => {
              const isActive = activeSection === link.href.slice(1)

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400"
                      : "text-slate-700 hover:bg-slate-100 hover:text-cyan-500 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}