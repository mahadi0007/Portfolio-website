export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 text-slate-400">{project.description}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 px-4 py-2 text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Close
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
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
          <a
            href={project.live}
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.03]"
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
    </div>
  )
}