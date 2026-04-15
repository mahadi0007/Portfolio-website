const achievements = [
  {
    title: "Devpost Postman Hackathon",
    description:
      "Placed 72nd among 1,875 participants worldwide in the Devpost Postman Hackathon for developing a Fake News Detector.",
  },
  {
    title: "B-JET (Bangladesh Japan ICT Engineers’ Training Program) – 2022",
    description:
      "Completed technical training under the B-JET program, gaining foundational Japanese language skills, exposure to relevant technologies, and professional business etiquette.",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Achievements
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Recognition, technical training, and notable milestones.
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-400">
          A selection of recognitions, competitive achievements, and technical
          training experiences that have shaped my development in AI,
          engineering, and professional growth.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}