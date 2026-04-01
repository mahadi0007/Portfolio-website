export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-cyan-400">Your Name</h1>

          <ul className="hidden md:flex gap-6">
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6">

        {/* About */}
        <section id="about" className="py-24">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-slate-300 max-w-2xl">
            I am building my portfolio using React, Tailwind and Node.js.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["React", "Node.js", "Tailwind", "JavaScript"].map((skill) => (
              <div
                key={skill}
                className="border border-white/10 rounded-xl p-4 hover:border-cyan-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
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

        {/* Contact */}
        <section id="contact" className="py-24">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>

          <form className="grid gap-4 max-w-md">
            <input
              className="bg-white/5 p-3 rounded-lg outline-none"
              placeholder="Your Name"
            />
            <input
              className="bg-white/5 p-3 rounded-lg outline-none"
              placeholder="Your Email"
            />
            <textarea
              className="bg-white/5 p-3 rounded-lg outline-none"
              placeholder="Message"
            />
            <button className="bg-cyan-500 text-black py-3 rounded-lg font-medium">
              Send
            </button>
          </form>
        </section>

      </main>
    </div>
  )
}