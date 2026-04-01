export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About Me
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            I focus on building polished and user-friendly digital products.
          </h2>
        </div>

        <div className="space-y-4 text-slate-400 leading-7">
          <p>
            I’m a developer who enjoys creating modern websites and web apps
            with clean design, responsive layouts, and maintainable code.
          </p>
          <p>
            My goal is to build projects that not only work well technically,
            but also leave a strong visual impression on the people using them.
          </p>
        </div>
      </div>
    </section>
  )
}