import { useState } from "react"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"
import ProjectModal from "../components/ProjectModal"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-24">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
            Featured Work
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Selected projects showcasing AI, research, and real-world product
            development.
          </h2>
        </div>

        <p className="max-w-xl text-slate-600 dark:text-slate-400">
          A curated selection of projects across AI/ML, intelligent systems,
          and modern web development.
        </p>
      </div>

      <div className="grid gap-8">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="group grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.07] lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 dark:border-white/10 dark:bg-slate-900/80">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                <span className="h-3 w-3 rounded-full bg-slate-400 dark:bg-white/40" />
                <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-white/20" />
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 dark:from-black/40" />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold leading-snug text-slate-900 transition group-hover:text-cyan-500 dark:text-white dark:group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-white/10 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 font-semibold text-cyan-600 transition hover:border-cyan-500 hover:bg-cyan-500/20 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 dark:hover:border-cyan-400 dark:hover:bg-cyan-400/20"
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
                    className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/30 dark:bg-cyan-400 dark:text-slate-950 dark:hover:shadow-cyan-400/30"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-500 hover:shadow-md dark:border-white/15 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                  >
                    GitHub
                  </a>
                )}

                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-3 font-semibold text-red-600 transition hover:border-red-500 hover:bg-red-500/20 hover:shadow-md dark:text-red-300"
                  >
                    YouTube
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/projects"
          className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-600 transition hover:border-cyan-500 hover:bg-cyan-500/20 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 dark:hover:border-cyan-400 dark:hover:bg-cyan-400/20"
        >
          Explore All Projects
        </Link>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}