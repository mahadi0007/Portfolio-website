const projects = [
  {
    title: " Multi Agent Delivery System SPADE",
    description:
      "A modern personal portfolio built to showcase my projects, skills, and development style with a premium UI.",
    tech: ["Python", "SPADE", "AI/ML"],
    live: "#",
    github: "#",
    youtube: null,
  },
  {
    title: " Sentinemnt Analysis",
    description:
      "A full-stack productivity app for managing daily tasks with clean UI, responsive design, and structured state handling.",
    tech: ["Python", "Scikit-learn", "NLP"],
    live: "#",
    github: "#",
    youtube: null,
  },
  {
    title: "Data scraper from google maps",
    description:
      "A sleek shopping interface focused on strong layout, reusable components, and a modern user experience.",
    tech: ["Python", "Selenium", "BeautifulSoup"],
    live: "#",
    github: "#",
    youtube: null,
  },
  {
    title: "Health AI Chatbot",
    description:
      "A sleek shopping interface focused on strong layout, reusable components, and a modern user experience.",
    tech: ["Python", "TensorFlow", "Chatbot"],
    live: "#",
    github: "#",
    youtube: null,
  },
  {
    title: "Healify – AI Physiotherapy Assistant",
    description:
      "AI-powered healthcare platform integrating LLM + RAG with real-time computer vision for exercise tracking and posture analysis.",
    tech: ["React", "FastAPI", "MongoDB", "WebSockets", "Azure"],
    live: "#",
    github: "#",
    youtube: "#", // add link if available
  },
  {
    title: "UN ESG START Platform",
    description:
      "Developed for the United Nations in Malaysia, supporting companies like Petronas with dashboards, localization, and dynamic PDF generation.",
    tech: ["React", "REST API", "CI/CD", "React-chartjs2"],
    live: "#",
    github: "#",
    youtube: null, // no video → button won't show
  },
  {
    title: "AI-Based Embryo Classification",
    description:
      "Deep learning system using U-Net, Mask R-CNN, and GANs for microscopy image classification.",
    tech: ["Python", "TensorFlow", "Deep Learning"],
    live: "#",
    github: "#",
    youtube: "#", // optional
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Featured Work
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Projects that reflect my design and development approach.
          </h2>
        </div>

        <p className="max-w-xl text-slate-400">
          A selection of projects focused on clean UI, responsive layouts,
          reusable components, and practical development workflows.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.07] lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-cyan-400" />
                <span className="h-3 w-3 rounded-full bg-white/40" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
              </div>

              <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-slate-950 text-center text-slate-500">
                Project Preview Area
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub
                </a>

                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-3 font-semibold text-red-300 transition hover:border-red-500 hover:bg-red-500/20"
                  >
                    YouTube
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}