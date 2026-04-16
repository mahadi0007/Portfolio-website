const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "JavaScript", "C++", "Java"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-Learn",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "Automation & AI",
    items: ["Machine Learning", "Deep Learning", "LangChain", "RAG", "Selenium"],
  },
  {
    title: "Data Analysis & Visualization",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Web & Mobile Development",
    items: ["HTML", "CSS", "JavaScript", "Semantic Web", "Android Studio"],
  },
  {
    title: "Cloud & DevOps Tools",
    items: ["Git", "CI/CD", "Azure"],
  },
  {
    title: "APIs & Databases",
    items: ["REST APIs", "GraphQL", "MySQL", "PL/SQL", "MongoDB"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
          Skills
        </p>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          Technologies I use to build intelligent systems, AI products,
          research-driven applications, and modern web experiences
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 transition hover:border-cyan-500/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/40"
          >
            <h3 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
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