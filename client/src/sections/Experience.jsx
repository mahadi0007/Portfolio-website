const experiences = [
  {
    role: "AI Training Specialist",
    company: "Outlier · Contract",
    location: "San Francisco (Remote)",
    period: "Feb 2025 – Present",
    points: [
      "Collaborate with leading AI organizations to optimize Large Language Models (LLMs) through Reinforcement Learning from Human Feedback (RLHF).",
      "Evaluate AI outputs for accuracy, logic, and safety based on rigorous quality rubrics.",
      "Develop complex prompts and diverse datasets to train generative AI models in specialized domains.",
      "Perform rigorous fact-checking and technical reviews to identify and mitigate model hallucinations and inconsistencies.",
    ],
  },
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
  {
    role: "Trainee",
    company: "B-JET · Full-time",
    location: "Miyazaki, Japan (Remote)",
    period: "Apr 2022 – Sep 2022",
    points: [
      'Developed the "Smart Nurse System," an innovative digital healthcare system.',
      "Contributed to a project that secured government funding, demonstrating real-world business value.",
    ],
  },
  {
    role: "GMS Specialist",
    company: "BAT · Full-time",
    location: "Dhaka, Bangladesh",
    period: "Feb 2022 – Apr 2022",
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
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
          Experience
        </p>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          Professional experience across AI training, intelligent systems, and
          web development
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 transition hover:border-cyan-500/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/40"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.role}
                </h3>
                <p className="mt-1 text-slate-700 dark:text-slate-300">
                  {item.company}{" "}
                  <span className="text-slate-500 dark:text-slate-500">
                    • {item.location}
                  </span>
                </p>
              </div>

              <p className="text-sm text-slate-500 md:text-right dark:text-slate-400">
                {item.period}
              </p>
            </div>

            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-400">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
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