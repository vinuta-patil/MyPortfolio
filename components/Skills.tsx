import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python" },
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "Java" },
        { name: "SQL" },
        { name: "HTML5 / CSS3" },
      ],
      color: "cyan",
    },
    {
      category: "AI / ML",
      skills: [
        { name: "LangChain" },
        { name: "LlamaIndex" },
        { name: "RAG Pipelines" },
        { name: "LLM Orchestration" },
        { name: "Prompt Engineering" },
        { name: "Cohere Embeddings" },
        { name: "OpenAI / Anthropic / Gemini" },
      ],
      color: "purple",
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "FastAPI" },
        { name: "Flask" },
        { name: "Django" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Spring Boot" },
        { name: "REST APIs / GraphQL" },
      ],
      color: "pink",
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Redux / Zustand" },
        { name: "Streamlit" },
        { name: "Storybook" },
      ],
      color: "cyan",
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL" },
        { name: "Supabase / pgVector" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "FAISS / Pinecone" },
        { name: "OpenSearch" },
        { name: "ChromaDB" },
      ],
      color: "purple",
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS (S3, Lambda, EC2, Bedrock)" },
        { name: "Docker" },
        { name: "Kubernetes (K8s)" },
        { name: "GitHub Actions / CI/CD" },
        { name: "Kafka" },
        { name: "RabbitMQ / Celery" },
        { name: "Azure" },
      ],
      color: "pink",
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-2xl mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.2 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 hover:border-cyan-400/30 hover:text-white transition-all"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl mb-4">Always Learning</h3>
          <p className="text-white/60">
            Currently exploring: Multimodal LLMs, RAG Optimization, and Advanced Cloud Architectures
          </p>
        </motion.div>

      </div>
    </section>
  );
}