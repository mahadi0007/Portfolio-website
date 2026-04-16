import { useEffect } from "react"
import { FaExternalLinkAlt, FaGithub, FaTimes, FaYoutube } from "react-icons/fa"

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-slate-900 dark:shadow-cyan-500/10 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.categories?.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300"
                >
                  {category}
                </span>
              ))}
            </div>

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              {project.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-white/10 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            aria-label="Close project details"
          >
            <FaTimes className="text-sm" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-6">
          <h4 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.03] dark:bg-cyan-400 dark:text-slate-950"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-white/15 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>
          )}

          {project.youtube && (
            <a
              href={project.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-3 font-semibold text-red-600 transition hover:border-red-500 hover:bg-red-500/20 dark:text-red-300"
            >
              <FaYoutube className="text-base" />
              YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  )
}