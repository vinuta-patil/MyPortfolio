import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: "work",
      title: "Software Engineering Intern",
      company: "Mimirchat",
      period: "May 2025 – August 2025",
      description:
        "Built Python-based data processing pipelines for a B2B AI document intelligence platform, delivering RESTful APIs and real-time LLM monitoring across enterprise-scale document workflows.",
      achievements: [
        "Authored pipelines to ingest, chunk, and embed enterprise documents (100+ page PDFs) using LangChain and Cohere embeddings, enabling semantic search across 5+ file types",
        "Established pgVector semantic similarity search over PostgreSQL powering source-cited AI responses with full audit traceability",
        "Engineered real-time monitoring dashboard for LLM metrics (accuracy, latency, cost) across Claude, LLaMA, and Titan, reducing perceived response latency by 35%",
        "Containerized backend services with Docker and contributed to Kubernetes deployment configs, ensuring zero-downtime deployments",
      ],
      gradient: "from-cyan-500 via-blue-500 to-cyan-600",
      borderColor: "cyan-400/20",
      hoverBorderColor: "cyan-400/40",
      bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Top Spot Communication",
      period: "July 2023 – July 2024",
      description:
        "Engineered backend APIs and data workflows for a B2B Client Portal serving 200+ daily users, optimizing performance and enforcing type-safe standards across the full SDLC.",
      achievements: [
        "Designed PostgreSQL schemas for bulk print order management and optimized query performance to handle 40% higher transaction throughput",
        "Integrated RESTful API contracts between frontend and backend services; enforced type-safe standards and structured code reviews",
        "Improved application performance through query optimization and efficient data access patterns, reducing load time by 25%",
        "Automated internal data formatting and reporting workflows across 3+ operational teams, cutting turnaround time by 50%",
      ],
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      borderColor: "purple-400/20",
      hoverBorderColor: "purple-400/40",
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      type: "work",
      title: "Software Engineering Intern",
      company: "Top Spot Communication",
      period: "January 2023 – June 2023",
      description:
        "Contributed to backend data flows and API integrations for a B2B portal, collaborating with senior engineers in Agile sprints to deliver features on schedule.",
      achievements: [
        "Contributed to backend API integrations for a B2B portal serving 200+ daily users, delivering features on schedule within Agile sprints",
        "Crafted Python utility scripts to automate internal data formatting and reporting workflows, eliminating repetitive manual tasks",
        "Maintained technical documentation and upheld code review standards across the development lifecycle",
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