const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Skills
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Technologies I use to build modern web products.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="mb-5 text-xl font-semibold text-white">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}