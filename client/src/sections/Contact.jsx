import { useState } from "react"

export default function Contact() {
  const email = "mahadiaustcse39@gmail.com"
  const mailtoLink = `mailto:${email}?subject=Let%27s%20Connect&body=Hi%20Mahadi%2C%0A%0AI%20visited%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A`

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Copy failed:", error)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Let’s build something meaningful with AI.
          </h2>

          <p className="mt-4 max-w-lg leading-7 text-slate-400">
            I’m open to AI/ML engineering roles, AI research opportunities, and
            software engineering work involving intelligent systems, web
            applications, and real-world AI products.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Email
          </p>

          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <p className="text-sm text-slate-400">
              You can reach me directly at
            </p>

            <p className="mt-2 break-all text-lg font-semibold text-white">
              {email}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {/* Contact Me Button */}
            <a
              href={mailtoLink}
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Contact Me
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopy}
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {copied ? "Email Copied" : "Copy Email"}
            </button>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Prefer manual email? Copy the address above and send your message directly.
          </p>
        </div>
      </div>
    </section>
  )
}