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
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Research
        </p>
      </div>

      <div className="grid gap-6">
        {researchItems.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>

            <div className="mt-4">
              <a
                href={item.link}
                className="text-cyan-400 transition hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Publication
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}