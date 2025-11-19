import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: "work",
      title: "Software Engineer Intern",
      company: "Mimirchat",
      period: "May 2025 - August 2025",
      description:
        "Building and optimizing RAG pipelines using AWS Lambda, Amazon Textract, and Bedrock LLMs for document ingestion and semantic search.",
      achievements: [
        "Improved retrieval accuracy by 30% using S3 Vectors, OpenSearch, and FAISS",
        "Reduced query latency by 20% compared to Elasticsearch",
        "Benchmarked multimodal LLMs (Claude, LLaMA, Titan, DeepSeek, Nova) for accuracy and latency",
        "Reduced hallucinations by 30% through prompt optimization",
      ],
      gradient: "from-cyan-500 via-blue-500 to-cyan-600",
      borderColor: "cyan-400/20",
      hoverBorderColor: "cyan-400/40",
      bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    },
    {
      type: "work",
      title: "Software Engineer",
      company: "Win Information Technology",
      period: "May 2023 - May 2024",
      description:
        "Developed real-time microservices and deployed scalable systems on AWS, building multimodal RAG chatbots with high accuracy.",
      achievements: [
        "Reduced latency by 40% using Flask, Kafka, and RabbitMQ microservices",
        "Improved deployment speed by 35% with Docker and Kubernetes on AWS",
        "Built multimodal RAG chatbot achieving 85%+ intent-matching accuracy",
        "Integrated OCR for image queries using LangChain and FAISS",
      ],
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      borderColor: "purple-400/20",
      hoverBorderColor: "purple-400/40",
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      type: "work",
      title: "Undergraduate Research Assistant",
      company: "Sreyas Institute of Engineering and Technology",
      period: "August 2022 - April 2023",
      description:
        "Led design and containerization of scalable microservices-based system for real-time data processing.",
      achievements: [
        "Built scalable system using Spring Boot, Kafka, and Docker",
        "Increased system reliability by 25% with Kubernetes automation",
        "Enabled efficient deployment for large data volumes",
        "Reduced operational overhead through container orchestration",
      ],
      gradient: "from-pink-500 via-rose-500 to-pink-600",
      borderColor: "pink-400/20",
      hoverBorderColor: "pink-400/40",
      bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Professional experience and educational background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full border-4 border-black z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                />

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <motion.div
                    className={`relative bg-white/5 border border-${exp.borderColor} rounded-2xl p-6 backdrop-blur-sm hover:border-${exp.hoverBorderColor} transition-all group overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300 brightness-110"
                      style={{
                        backgroundImage: `url(${exp.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
                    <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          exp.type === "work"
                            ? "bg-cyan-500/20"
                            : "bg-purple-500/20"
                        }`}
                      >
                        {exp.type === "work" ? (
                          <Briefcase className="w-5 h-5 text-cyan-400" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-purple-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-1">{exp.title}</h3>
                        <div className="text-cyan-400 mb-1">{exp.company}</div>
                        <div className="text-sm text-white/50 font-mono">
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-white/60 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-white/50"
                        >
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}