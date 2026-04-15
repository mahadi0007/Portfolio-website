const education = [
  {
    degree: "MSc in Artificial Intelligence",
    institution: "University of Jyväskylä",
    period: "Aug 2024 – Jun 2026",
    details:
      "Currently pursuing advanced studies in artificial intelligence, intelligent systems, and applied machine learning in Finland.",
  },
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Ahsanullah University of Science and Technology",
    period: "Mar 2017 – Jan 2022",
    details:
      "Built a strong academic foundation in computer science, software engineering, algorithms, and application development.",
  },
  {
    degree: "Higher School Certificate",
    institution: "Cantonment Public School and College, Rangpur",
    period: "Aug 2014 – Jun 2016",
    details:
      "Completed higher secondary education with emphasis on mathematics, physics, and analytical problem-solving.",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Cantonment Public School and College, Rangpur",
    period: "Aug 2012 – Jun 2014",
    details:
      "Completed secondary education, building a strong foundation for later study in engineering and computing.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
          Education
        </p>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          Academic background supporting my work in AI, machine learning, and
          software engineering.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <article
            key={`${item.degree}-${item.period}`}
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 transition hover:border-cyan-500/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/40"
          >
            <p className="text-sm text-cyan-500 dark:text-cyan-400">
              {item.period}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              {item.degree}
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              {item.institution}
            </p>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              {item.details}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}