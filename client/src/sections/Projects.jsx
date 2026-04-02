import multiAgentImg from "../assets/projects/spade.png"
import sentimentImg from "../assets/projects/sentiment.png"
import scraperImg from "../assets/projects/datascrapper.png"
import chatbotImg from "../assets/projects/healthaibot.png"
import healifyImg from "../assets/projects/healify.png"
import esgImg from "../assets/projects/un.png"
import embryoImg from "../assets/projects/embryo.png"

const projects = [
  {
    title: "Multi-Agent Delivery System SPADE",
    description:
      "Python-based multi-agent delivery simulation system with rerouting and coordination capabilities using the SPADE framework and agent-based communication.",
    tech: ["Python", "SPADE", "Multi-Agent Systems"],
    image: multiAgentImg,
    live: "#",
    github: "#",
    youtube: null,
  },
  {
    title: "Sentiment Analysis",
    description:
      "Sentiment analysis project focused on classifying social media text using NLP and machine learning techniques for opinion mining and language understanding.",
    tech: ["Python", "Scikit-learn", "NLP"],
    image: sentimentImg,
    live: "#",
    github: "#",
    youtube: null,
  },
  {
    title: "Data Scraper from Google Maps",
    description:
      "Automation tool for extracting business information from Google Maps using browser automation and structured data collection workflows.",
    tech: ["Python", "Selenium", "BeautifulSoup"],
    image: scraperImg,
    live: "#",
    github: "#",
    youtube: null,
  },
  {
    title: "Health AI Chatbot",
    description:
      "Healthcare-focused AI chatbot designed to assist users with symptom guidance, health-related interactions, and intelligent conversational support.",
    tech: ["Python", "TensorFlow", "Chatbot"],
    image: chatbotImg,
    live: "#",
    github: "#",
    youtube: null,
  },
  {
    title: "Healify – AI Physiotherapy Assistant",
    description:
      "AI-powered healthcare platform integrating LLM + RAG with real-time computer vision for exercise tracking and posture analysis.",
    tech: ["React", "FastAPI", "MongoDB", "WebSockets", "Azure"],
    image: healifyImg,
    live: "#",
    github: "#",
    youtube: "#",
  },
  {
    title: "UN ESG START Platform",
    description:
      "Developed for the United Nations in Malaysia, supporting companies including Petronas with localization, dashboard workflows, and dynamic PDF generation.",
    tech: ["React", "REST API", "CI/CD", "React-chartjs2"],
    image: esgImg,
    live: "#",
    github: "#",
    youtube: null,
  },
  {
    title: "AI-Based Embryo Classification",
    description:
      "Deep learning system for microscopy image analysis using U-Net, Mask R-CNN, and GAN-based approaches for embryo classification.",
    tech: ["Python", "TensorFlow", "Deep Learning"],
    image: embryoImg,
    live: "#",
    github: "#",
    youtube: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Featured Work
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Selected projects showcasing AI, full-stack systems, and real-world problem solving.
          </h2>
        </div>

        <p className="max-w-xl text-slate-400">
          A selection of projects focused on clean UI, responsive layouts,
          reusable components, and practical development workflows.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <article
            style={{ transitionDelay: `${Math.random() * 0.1}s` }}
            key={project.title}
            className="group grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-cyan-500/10 lg:grid-cols-[1.2fr_0.8fr]"          >
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-cyan-400" />
                <span className="h-3 w-3 rounded-full bg-white/40" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold leading-snug transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-400/30"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400 hover:shadow-md"
                >
                  GitHub
                </a>

                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-3 font-semibold text-red-300 transition hover:border-red-500 hover:bg-red-500/20 hover:shadow-md"
                  >
                    YouTube
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}