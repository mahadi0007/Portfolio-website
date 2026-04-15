import { useEffect, useRef, useState } from "react"
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa"

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white transition hover:text-cyan-400"
        >
          <span className="text-cyan-400">Md Mahadi Hasan</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, 2).map((link) => {
            const isActive = activeSection === link.href.slice(1)

            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition ${
                  isActive ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
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
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
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
              <div className="absolute left-0 top-full mt-3 w-52 rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
                {expertiseLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1)

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={handleNavClick}
                      className={`block rounded-xl px-4 py-3 text-sm transition ${
                        isActive
                          ? "bg-cyan-400/10 text-cyan-400"
                          : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
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
                  isActive ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="text-white transition hover:text-cyan-400 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            <a
              href="#home"
              onClick={handleNavClick}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                activeSection === "home"
                  ? "bg-cyan-400/10 text-cyan-400"
                  : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={handleNavClick}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                activeSection === "about"
                  ? "bg-cyan-400/10 text-cyan-400"
                  : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
              }`}
            >
              About
            </a>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
              <button
                type="button"
                onClick={() => setExpertiseOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isExpertiseActive || expertiseOpen
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
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
                            ? "bg-cyan-400/10 text-cyan-400"
                            : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
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
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
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