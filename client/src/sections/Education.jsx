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
    degree: "HSC in Science",
    institution: "Cantonment Public School and College, Rangpur",
    period: "Aug 2014 – Jun 2016",
    details:
      "Currently pursuing advanced studies in artificial intelligence, intelligent systems, and applied machine learning in Finland.",
  },
    {
    degree: "SSC in Science",
    institution: "Cantonment Public School and College, Rangpur",
    period: "Aug 2012 – Jun 2014",
    details:
      "Currently pursuing advanced studies in artificial intelligence, intelligent systems, and applied machine learning in Finland.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Education
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Academic background supporting software and AI expertise.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <article
            key={`${item.degree}-${item.period}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40"
          >
            <p className="text-sm text-cyan-400">{item.period}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {item.degree}
            </h3>
            <p className="mt-2 text-slate-300">{item.institution}</p>
            <p className="mt-4 leading-7 text-slate-400">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  )
}