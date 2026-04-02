export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold text-white">
              <span className="text-cyan-400">Md Mahadi Hasan</span>
            </h3>
            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Frontend developer, AI-focused engineer, and researcher building
              modern digital products with strong UI, scalable systems, and
              practical impact.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Quick Links
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-slate-400">
              <a href="#about" className="transition hover:text-cyan-400">
                About
              </a>
              <a href="#projects" className="transition hover:text-cyan-400">
                Projects
              </a>
              <a href="#research" className="transition hover:text-cyan-400">
                Research
              </a>
              <a href="#contact" className="transition hover:text-cyan-400">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Connect
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-slate-400">
              <a
                href="mailto:md.m.hasan@student.jyu.fi"
                className="transition hover:text-cyan-400"
              >
                md.m.hasan@student.jyu.fi
              </a>

              <a
                href="https://www.linkedin.com/in/md-mahadi-hasan-8856961b8"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-400"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/mahadi0007"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-400"
              >
                GitHub
              </a>

              

              <a
                href="/Md_Mahadi_Hasan_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-400"
              >
                Preview CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Md Mahadi Hasan. All rights reserved.</p>
          <p>Based in Finland</p>
        </div>
      </div>
    </footer>
  )
}