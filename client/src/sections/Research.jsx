import { FaExternalLinkAlt } from "react-icons/fa"

const researchItems = [
  {
    title:
      "Sentiment Analysis from Bengali Social Media Posts Using Hybridized Feature Extraction Approach",
    link: "https://ieeexplore.ieee.org/document/9873668",
  },
  {
    title:
      "Bengali Social Media Post Sentiment Analysis Using Deep Learning and BERT Model",
    link: "https://ieeexplore.ieee.org/document/9873680",
  },
]

export default function Research() {
  return (
    <section id="research" className="py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
          Research
        </p>

        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          Research and Publications
        </h2>
      </div>

      <div className="grid gap-6">
        {researchItems.map((item) => (
          <article
            key={item.title}
            className="group rounded-3xl border border-slate-200 bg-white/80 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/40 dark:hover:shadow-cyan-500/10"
          >
            <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
              {item.title}
            </h3>

            <div className="mt-5">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 transition hover:underline dark:text-cyan-400"
              >
                View Publication
                <FaExternalLinkAlt className="text-xs opacity-70" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}