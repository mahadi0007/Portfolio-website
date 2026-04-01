export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p className="text-slate-400">Description of your project.</p>
        </div>

        <div className="border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p className="text-slate-400">Description of your project.</p>
        </div>
      </div>
    </section>
  )
}