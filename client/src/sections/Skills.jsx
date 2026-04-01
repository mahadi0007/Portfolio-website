export default function Skills() {
  const skills = ["React", "Node.js", "Tailwind", "JavaScript"]

  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-white/10 rounded-xl p-4 hover:border-cyan-400 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}