import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold tracking-wide text-white"
            onClick={closeMenu}
          >
           <span className="text-cyan-400">Md Mahadi Hasan</span>
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            <li>
              <a href="#home" className="text-slate-300 transition hover:text-cyan-400">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="text-slate-300 transition hover:text-cyan-400">
                About
              </a>
            </li>

            <li className="group relative">
              <a
                href="#skills"
                className="text-slate-300 transition hover:text-cyan-400"
              >
                Expertise
              </a>

              <div className="invisible absolute left-0 top-full z-50 mt-3 w-48 rounded-2xl border border-white/10 bg-slate-900/95 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <a
                  href="#skills"
                  className="block rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
                >
                  Skills
                </a>
                <a
                  href="#research"
                  className="block rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
                >
                  Research
                </a>
                <a
                  href="#achievements"
                  className="block rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
                >
                  Achievements
                </a>
              </div>
            </li>

            <li>
              <a href="#experience" className="text-slate-300 transition hover:text-cyan-400">
                Experience
              </a>
            </li>

            <li>
              <a href="#projects" className="text-slate-300 transition hover:text-cyan-400">
                Projects
              </a>
            </li>

            <li>
              <a href="#education" className="text-slate-300 transition hover:text-cyan-400">
                Education
              </a>
            </li>

            <li>
              <a href="#contact" className="text-slate-300 transition hover:text-cyan-400">
                Contact
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/95 p-4 md:hidden">
            <div className="flex flex-col gap-2">
              <a
                href="#home"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Skills
              </a>

              <a
                href="#research"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Research
              </a>

              <a
                href="#achievements"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Achievements
              </a>

              <a
                href="#experience"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Experience
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Projects
              </a>

              <a
                href="#education"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Education
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}