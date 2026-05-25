export type Project = {
  title: string;
  description: string;
  tech?: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
    {
    title: "RAG-based AI Agent",
    description:
        "Started as a side project and evolved into a production-grade AI agent built on a large-scale knowledge base containing thousands of documents. Implemented retrieval-augmented generation (RAG), reranking pipelines, and semantic caching for improved response quality and latency. Currently used by 30–40 active users and growing.",
    liveUrl : 'https://open-finance-ai-agent.vercel.app/'
    },
  {
    title: "HFT Trades decision based agent",
    description:
      "Tried implementing a decision-making agent which takes trade - failed miserably.",
    githubUrl: 'https://github.com/Aimlessss/High-Frequency-Trading-Service'
  }
];