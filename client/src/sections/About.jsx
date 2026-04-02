export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Frontend developer with a strong foundation in AI, research, and scalable product development.
          </h2>
        </div>

        <div className="space-y-5 text-slate-400 leading-7">
          <p>
            I’m Md Mahadi Hasan, a developer with 3+ years of professional
            experience building modern web applications, dashboards, and
            data-driven interfaces. My work focuses on creating responsive,
            user-friendly products with clean architecture and strong visual quality.
          </p>

          <p>
            Alongside frontend engineering, I have experience working with
            artificial intelligence, machine learning, computer vision, and
            automation. This combination helps me approach products from both
            the user experience side and the technical problem-solving side.
          </p>

          <p>
            I’m currently pursuing an MSc in Artificial Intelligence at the
            University of Jyväskylä in Finland, where I’m continuing to deepen
            my expertise in intelligent systems, applied AI, and real-world
            software development.
          </p>
        </div>
      </div>
    </section>
  )
}