import profileImg from "../assets/profile-main.jpg"

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
            About
          </p>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl dark:text-white">
            AI/ML Engineer and AI Researcher building practical intelligent
            systems for real-world impact.
          </h2>

          <div className="mt-6 space-y-5 leading-7 text-slate-700 dark:text-slate-400">
            <p>
              I’m Md Mahadi Hasan, an AI/ML Engineer and AI Researcher with
              experience in machine learning, natural language processing, large
              language model applications, and intelligent product development.
              My work focuses on building practical AI systems that are
              scalable, useful, and grounded in real-world needs.
            </p>

            <p>
              <p>
                <p>
                  Alongside my AI work, I have over 3+ years of professional experience in
                  web development, building scalable, data-driven applications using modern
                  technologies like React.js and Next.js. I focus on bridging AI systems with
                  real-world products, ensuring solutions are both technically robust and
                  practical for users.
                </p>
              </p>
            </p>

            <p>
              I’m currently pursuing an MSc in Artificial Intelligence at the
              University of Jyväskylä in Finland, where I continue to deepen my
              expertise in intelligent systems, applied machine learning, and AI
              research.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "3+ Years Experience",
              "AI/ML Engineer",
              "MSc in Artificial Intelligence",
              "Based in Finland",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-cyan-500/10 blur-2xl" />

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/40 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-cyan-500/10">
            <img
              src={profileImg}
              alt="Md Mahadi Hasan"
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}