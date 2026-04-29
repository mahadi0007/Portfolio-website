import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa"
import { SiResearchgate } from "react-icons/si"

const socialLinks = [
  {
    name: "Email",
    href: "mailto:mahadiaustcse39@gmail.com?subject=Portfolio%20Contact",
    icon: FaEnvelope,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-mahadi-hasan-8856961b8",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/mahadi0007",
    icon: FaGithub,
  },
  {
    name: "ResearchGate",
    href: "https://www.researchgate.net/profile/Md-Mahadi-Hasan-11",
    icon: SiResearchgate,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mahadi_hasan0007/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mahadi.hasan.31508",
    icon: FaFacebook,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Md Mahadi <span className="text-cyan-500 dark:text-cyan-400">Hasan</span>
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-slate-600 dark:text-slate-400">
              AI/ML Engineer and AI Researcher building intelligent systems,
              applied machine learning solutions, and production-ready web
              applications with real-world impact.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
              Quick Links
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-slate-600 dark:text-slate-400">
              <a href="#about" className="transition hover:text-cyan-500 dark:hover:text-cyan-400">
                About
              </a>
              <a href="#projects" className="transition hover:text-cyan-500 dark:hover:text-cyan-400">
                Projects
              </a>
              <a href="#research" className="transition hover:text-cyan-500 dark:hover:text-cyan-400">
                Research
              </a>
              <a href="#contact" className="transition hover:text-cyan-500 dark:hover:text-cyan-400">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
              Connect
            </h4>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Find me on these platforms
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={item.name}
                    title={item.name}
                    className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition duration-200 hover:border-cyan-500 hover:bg-cyan-100 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400"
                  >
                    <Icon size={18} />

                    <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs whitespace-nowrap text-slate-700 opacity-0 shadow-lg transition duration-200 group-hover:opacity-100 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200">
                      {item.name}
                    </span>
                  </a>
                )
              })}

{/* This is the CV preview link , but currently not available */}
              {/* <a
                href="/Md_Mahadi_Hasan_CV.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="CV"
                title="CV"
                className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition duration-200 hover:border-cyan-500 hover:bg-cyan-100 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400"
              >
                <span className="text-sm font-semibold">CV</span>

                <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs whitespace-nowrap text-slate-700 opacity-0 shadow-lg transition duration-200 group-hover:opacity-100 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200">
                  Preview CV
                </span>
              </a> */}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-500">
          <p>© 2026 Md Mahadi Hasan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}