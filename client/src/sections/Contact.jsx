export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let’s build something great together.
          </h2>
          <p className="mt-4 max-w-lg leading-7 text-slate-400">
            I’m open to opportunities, collaborations, and interesting ideas.
            If you’d like to work together or just connect, feel free to reach
            out.
          </p>
        </div>

        <form className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <input
            className="rounded-xl border border-white/10 bg-slate-950/70 p-3 outline-none placeholder:text-slate-500 focus:border-cyan-400"
            placeholder="Your Name"
          />
          <input
            className="rounded-xl border border-white/10 bg-slate-950/70 p-3 outline-none placeholder:text-slate-500 focus:border-cyan-400"
            placeholder="Your Email"
          />
          <textarea
            className="min-h-[140px] rounded-xl border border-white/10 bg-slate-950/70 p-3 outline-none placeholder:text-slate-500 focus:border-cyan-400"
            placeholder="Your Message"
          />
          <button className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.01]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}