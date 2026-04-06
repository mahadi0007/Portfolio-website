import profileImg from "../assets/profile.jpg"

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Frontend developer with a strong foundation in AI, research, and scalable product development.
          </h2>

          <div className="mt-6 space-y-5 text-slate-400 leading-7">
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

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
              3+ Years Experience
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
              MSc in AI
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
              Based in Finland
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-cyan-500/10 blur-2xl" />

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-cyan-500/10 backdrop-blur">
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