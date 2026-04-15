import { useEffect } from "react"
import { FaExternalLinkAlt, FaGithub, FaTimes, FaYoutube } from "react-icons/fa"

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-cyan-500/10 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.categories?.map((category) => (
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

            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-white transition hover:border-cyan-400 hover:text-cyan-400"
            aria-label="Close project details"
          >
            <FaTimes className="text-sm" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-6">
          <h4 className="mb-3 text-lg font-semibold text-white">Tech Stack</h4>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300"
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
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.03]"
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
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
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
              className="inline-flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-3 font-semibold text-red-300 transition hover:border-red-500 hover:bg-red-500/20"
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