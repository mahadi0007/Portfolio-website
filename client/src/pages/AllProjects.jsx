import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { projects } from "../data/projects"
import ProjectModal from "../components/ProjectModal"

const filters = ["All", "AI/ML", "Web Development", "Research"]

export default function AllProjects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState("All")

  const email = "mahadiaustcse39@gmail.com"
  const mailtoLink = `mailto:${email}?subject=Portfolio%20Contact&body=Hi%20Mahadi%2C%0A%0AI%20visited%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A`

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects
    return projects.filter((project) =>
      project.categories.includes(activeFilter)
    )
  }, [activeFilter])

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mb-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Project Archive
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                A complete view of my AI/ML, research, and web development work.
              </h1>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                This page includes featured and additional projects spanning
                intelligent systems, machine learning, research-oriented
                experimentation, and production-ready web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaArrowLeft className="text-sm" />
                Back Home
              </Link>

              <a
                href={mailtoLink}
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border border-cyan-400 bg-cyan-400/15 text-cyan-300"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mb-8">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-300">
              {filteredProjects.length}
            </span>{" "}
            project{filteredProjects.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-cyan-500/10 lg:grid-cols-[1.15fr_0.85fr]"
            >
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-cyan-400" />
                  <span className="h-3 w-3 rounded-full bg-white/40" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-300"
                      >
                        {category}
                      </span>
                    ))}

                    {project.featured && (
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-semibold leading-snug transition group-hover:text-cyan-400">
                    {project.title}
                  </h2>

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

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-6 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/20"
                  >
                    View Details
                  </button>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/30"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400 hover:shadow-md"
                    >
                      GitHub
                    </a>
                  )}

                  {project.youtube && (
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-3 font-semibold text-red-300 transition hover:border-red-500 hover:bg-red-500/20 hover:shadow-md"
                    >
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </section>
    </main>
  )
}