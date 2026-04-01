export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-10 top-32 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            Aspiring AI Engineer
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            I build modern, responsive, and clean web experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I’m building high-quality web applications using React, Tailwind CSS,
            Node.js, and modern development practices with a focus on clean UI
            and great user experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-white/10 px-3 py-1">
              React
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Tailwind CSS
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Node.js
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              JavaScript
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-4 font-mono text-sm text-slate-300">
              <div>
                <span className="text-cyan-400">const</span>{" "}
                <span className="text-white">developer</span> = {"{"}
              </div>
              <div className="pl-4">
                name: <span className="text-emerald-300">"Md Mahadi Hasan"</span>,
              </div>
              <div className="pl-4">
                role: <span className="text-emerald-300">"AI/ML Engineer"</span>,
              </div>
              <div className="pl-4">
                skills: [
                <span className="text-emerald-300">"Python"</span>,{" "}
                <span className="text-emerald-300">"SPADE"</span>,{" "}
                <span className="text-emerald-300">"TensorFlow"</span>,{" "}
                <span className="text-emerald-300">"Data Scraping"</span>]

              </div>
              <div className="pl-4">
                focus: <span className="text-emerald-300">"Beautiful and usable products"</span>
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}