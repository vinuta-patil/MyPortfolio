import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Adalat Tax-Copilot",
      description:
        "Built an AI-powered co-pilot that parsed Indian court judgments (PDFs) to extract legal metadata, identify precedent cases, and summarize tax litigation patterns across 25+ real-world documents. Generated structured outputs aligning with expert decisions in 85% of test cases.",
      tags: ["Node.js", "Next.js", "Tailwind CSS", "FAISS", "LLMs"],
      gradient: "from-purple-500 to-pink-500",
      borderColor: "purple-400/20",
      hoverBorderColor: "purple-400/40",
      bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      link: "#",
      github: "https://github.com/vinuta-patil",
    },
    {
      title: "Agentic RAG AI Customer Support",
      description:
        "Built a multimodal RAG chatbot using Flask, LangChain, FAISS, and Cohere to handle text, speech, and image inputs with multilingual support. Integrated RabbitMQ for ticket escalation and achieved 85%+ accuracy in query responses with a real-time analytics dashboard.",
      tags: ["Python", "RabbitMQ", "Tesseract OCR", "LangChain", "FAISS", "Flask"],
      gradient: "from-cyan-500 to-blue-500",
      borderColor: "cyan-400/20",
      hoverBorderColor: "cyan-400/40",
      bgImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      link: "#",
      github: "https://github.com/vinuta-patil",
    },
    {
      title: "Workout Tracker",
      description:
        "Full-stack MERN application enabling users to log, track, and manage workouts efficiently. Features secure JWT authentication, real-time updates via React Context API, and automated AWS EC2 deployment with GitHub webhooks.",
      tags: ["React", "Node.js", "MongoDB", "Express", "AWS EC2", "JWT"],
      gradient: "from-green-500 to-teal-500",
      borderColor: "green-400/20",
      hoverBorderColor: "green-400/40",
      bgImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      link: "#",
      github: "https://github.com/vinuta-patil/Workout_Tracker",
    },
    {
      title: "Restaurant Finder System",
      description:
        "End-to-end restaurant discovery platform with location-based search using Google Maps API. Features role-based functionality for members, business owners, and admins. Deployed on AWS EC2 with load balancer for auto-scaling.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Google Maps API", "AWS"],
      gradient: "from-orange-500 to-red-500",
      borderColor: "orange-400/20",
      hoverBorderColor: "orange-400/40",
      bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      link: "#",
      github: "https://github.com/vinuta-patil/Restaurant-Finder-System",
    },
    {
      title: "Food Allergy Checker",
      description:
        "Web application designed to check food items against user allergies and dietary preferences. Built with Python Flask backend and HTML frontend for real-time food safety validation.",
      tags: ["Python", "Flask", "HTML", "Food Safety"],
      gradient: "from-yellow-500 to-orange-500",
      borderColor: "yellow-400/20",
      hoverBorderColor: "yellow-400/40",
      bgImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
      link: "#",
      github: "https://github.com/vinuta-patil/Food-Allergy-Checker",
    },
    {
      title: "Brain Tumor Detection",
      description:
        "Deep learning application using CNN for classifying brain MRI scans to detect tumors. Features a Flask web interface for real-time predictions with TensorFlow/Keras backend processing 64x64 RGB images.",
      tags: ["Python", "TensorFlow", "Keras", "Flask", "OpenCV", "CNN"],
      gradient: "from-indigo-500 to-purple-500",
      borderColor: "indigo-400/20",
      hoverBorderColor: "indigo-400/40",
      bgImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      link: "#",
      github: "https://github.com/vinuta-patil/Brain-Tumor-Detection",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <motion.div
        className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative bg-white/5 border border-${project.borderColor} rounded-2xl p-6 backdrop-blur-sm hover:border-${project.hoverBorderColor} transition-all h-full overflow-hidden group`}>
                {/* Background Image */}
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300 brightness-110"
                  style={{
                    backgroundImage: `url(${project.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                    >
                      <div className="w-6 h-6 border-2 border-white rounded" />
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-white/60 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}