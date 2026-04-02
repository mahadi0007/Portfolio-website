const experiences = [
  {
    role: "Frontend (React.js) Developer",
    company: "SegWitz Sdn. Bhd.",
    location: "Malaysia (Remote)",
    period: "Mar 2023 – Oct 2024",
    points: [
      "Developed data-driven web interfaces and dashboards supporting business workflows.",
      "Automated build, testing, and deployment pipelines using GitHub Actions, improving development efficiency.",
      "Optimized document generation and data handling processes, reducing processing time by 2x.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Tech Joint Bridge",
    location: "Dhaka, Bangladesh",
    period: "May 2022 – Jan 2023",
    points: [
      "Built interactive applications for data-intensive use cases using React.js and Next.js.",
      "Implemented data visualization and image processing pipelines using Python and JavaScript.",
      "Improved application performance by 5x, enabling faster access to analytical data.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Teresa Startup",
    location: "Dhaka, Bangladesh",
    period: "Jul 2021 – Jan 2022",
    points: [
      'Developed the "Smart Nurse System," an innovative digital healthcare system.',
      "Contributed to a project that secured government funding, demonstrating real-world business value.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Experience
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Professional experience building impactful digital products.
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="mt-1 text-slate-300">
                  {item.company} <span className="text-slate-500">• {item.location}</span>
                </p>
              </div>

              <p className="text-sm text-slate-400 md:text-right">
                {item.period}
              </p>
            </div>

            <ul className="mt-5 space-y-3 text-slate-400">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}