export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-10 top-32 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-600 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300">
            AI/ML Engineer • AI Researcher • Full Stack Web Developer
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            I build AI-powered systems,
            <br />
            research-driven solutions, and
            <br />
            production-ready web applications.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            I’m an AI/ML Engineer and AI Researcher with experience in machine
            learning, NLP, intelligent systems, and applied product
            development. Alongside my AI work, I also have 3+ years of  professional experience
            building modern web applications and user-facing systems that help turn
            research ideas into usable products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] dark:bg-cyan-400 dark:text-slate-950"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-white/15 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              Contact Me
            </a>

            <a
              href="/Md_Mahadi_Hasan_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-600 transition hover:border-cyan-500 hover:bg-cyan-500/20 dark:border-cyan-400/40 dark:bg-cyan-400/10 dark:text-cyan-300 dark:hover:border-cyan-400 dark:hover:bg-cyan-400/20"
            >
              Preview CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400">
            {["Python", "LLMs", "React.js", "JavaScript", "AI/ML", "CI/CD"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 dark:border-white/10 dark:text-slate-300"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-4 font-mono text-sm text-slate-700 dark:text-slate-300">
              <div>
                <span className="text-cyan-600 dark:text-cyan-400">const</span>{" "}
                <span className="text-slate-900 dark:text-white">developer</span>{" "}
                = {"{"}
              </div>

              <div className="pl-4">
                name:{" "}
                <span className="text-emerald-600 dark:text-emerald-300">
                  "Md Mahadi Hasan"
                </span>
                ,
              </div>

              <div className="pl-4">
                role:{" "}
                <span className="text-emerald-600 dark:text-emerald-300">
                  "AI/ML Engineer"
                </span>
                ,
              </div>

              <div className="pl-4">
                skills: [
                <span className="text-emerald-600 dark:text-emerald-300">
                  "Python"
                </span>
                ,{" "}
                <span className="text-emerald-600 dark:text-emerald-300">
                  "TensorFlow"
                </span>
                ,{" "}
                <span className="text-emerald-600 dark:text-emerald-300">
                  "RAG"
                </span>
                ,{" "}
                <span className="text-emerald-600 dark:text-emerald-300">
                  "JavaScript"
                </span>
                ],
              </div>

              <div className="pl-4">
                focus:{" "}
                <span className="text-emerald-600 dark:text-emerald-300">
                  "Scalable products and intelligent systems"
                </span>
                ,
              </div>

              <div className="pl-4">
                experience:{" "}
                <span className="text-emerald-600 dark:text-emerald-300">
                  "3+ years"
                </span>
                ,
              </div>

              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}