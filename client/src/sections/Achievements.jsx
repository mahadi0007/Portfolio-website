import { FaExternalLinkAlt } from "react-icons/fa"

const achievements = [
  {
    title: "Devpost Postman Hackathon",
    description:
      "Placed 72nd among 1,875 participants worldwide in the Devpost Postman Hackathon for developing a Fake News Detector.",
    link: "https://devpost.com/software/fake-news-detector-3qy4bf",
  },
  {
    title: "B-JET (Bangladesh Japan ICT Engineers’ Training Program) – 2022",
    description:
      "Completed technical training under the B-JET program, gaining foundational Japanese language skills, exposure to relevant technologies, and professional business etiquette.",
    link: null,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
          Achievements
        </p>

        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          Recognition, technical training, and notable milestones
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item) => (
          <article
            key={item.title}
            className="group rounded-3xl border border-slate-200 bg-white/80 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/40 dark:hover:shadow-cyan-500/10"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              {item.description}
            </p>

            {/* Link (only if exists) */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-600 transition hover:underline dark:text-cyan-400"
              >
                View Hackathon
                <FaExternalLinkAlt className="text-xs opacity-70" />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}