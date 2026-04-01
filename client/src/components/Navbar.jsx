export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-wide text-white">
          <span className="text-cyan-400">Mahadi Hasan</span>
        </a>

        <ul className="hidden gap-6 md:flex">
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
          <li>
            <a href="#skills" className="text-slate-300 transition hover:text-cyan-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-slate-300 transition hover:text-cyan-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-slate-300 transition hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}