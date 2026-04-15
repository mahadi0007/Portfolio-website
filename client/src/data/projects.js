import multiAgentImg from "../assets/projects/spade.png"
import sentimentImg from "../assets/projects/sentiment.png"
import chatbotImg from "../assets/projects/healthaibot.png"
import healifyImg from "../assets/projects/healify.png"
import esgImg from "../assets/projects/un.png"

export const projects = [
  {
    title: "Healify – AI Physiotherapy Assistant",
    description:
      "AI-powered healthcare platform integrating LLM + RAG with real-time computer vision for exercise tracking and posture analysis.",
    tech: ["React", "FastAPI", "MongoDB", "WebSockets", "Azure"],
    image: healifyImg,
    live: null,
    github: null,
    youtube: "https://www.youtube.com/watch?v=ngMlWDZ1SaQ",
    featured: true,
    categories: ["AI/ML", "Web Development"],
  },
  {
    title: "Multi-Agent Delivery System SPADE",
    description:
      "Python-based multi-agent delivery simulation system with rerouting and coordination capabilities using the SPADE framework and agent-based communication.",
    tech: ["Python", "SPADE", "Multi-Agent Systems"],
    image: multiAgentImg,
    live: null,
    github: "https://github.com/mahadi0007/MultiAgentDeliverySystemSPADE",
    youtube: null,
    featured: true,
    categories: ["Research", "AI/ML"],
  },
  {
    title: "Sentiment Analysis",
    description:
      "Sentiment analysis project focused on classifying social media text using NLP and machine learning techniques for opinion mining and language understanding.",
    tech: ["Python", "Scikit-learn", "NLP"],
    image: sentimentImg,
    live: null,
    github: "https://github.com/mahadi0007/Sentinemnt-Analysis-MiniProject",
    youtube: null,
    featured: true,
    categories: ["AI/ML", "Research"],
  },
  {
    title: "Health AI Chatbot",
    description:
      "Healthcare-focused AI chatbot designed to assist users with symptom guidance, health-related interactions, and intelligent conversational support.",
    tech: ["Python", "TensorFlow", "Chatbot"],
    image: chatbotImg,
    live: null,
    github: "https://github.com/mahadi0007/Health-AI-Chatbot",
    youtube: null,
    featured: false,
    categories: ["AI/ML"],
  },
  {
    title: "UN ESG START Platform",
    description:
      "Developed for the United Nations in Malaysia, supporting companies including Petronas with localization, dashboard workflows, and dynamic PDF generation.",
    tech: ["React", "REST API", "CI/CD", "React-chartjs2"],
    image: esgImg,
    live: null,
    github: null,
    youtube: null,
    featured: true,
    categories: ["Web Development"],
  },
  {
    title: "Adignis",
    description:
      "An interactive review platform that provides insights and evaluations for individuals and businesses.",
    tech: [
      "React.js",
      "Hooks",
      "Redux",
      "Middleware",
      "Webpack",
      "Caching",
      "GraphQL",
      "Chart.js",
      "Jenkins",
      "Nginx",
    ],
    image: esgImg,
    live: "https://adignis.com/",
    github: null,
    youtube: null,
    featured: false,
    categories: ["Web Development"],
  },
  {
    title: "Colonelsaab",
    description:
      "Developed a website for Colonelsaab restaurant, enhancing its online presence and boosting sales.",
    tech: ["React.js", "Instagram API", "Hooks", "Redux"],
    image: esgImg,
    live: "https://colonelsaab.co.uk/",
    github: null,
    youtube: null,
    featured: false,
    categories: ["Web Development"],
  },
]