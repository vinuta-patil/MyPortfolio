import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Science in Computer Software Engineering",
      institution: "San Jose State University",
      location: "San Jose, CA",
      period: "August 2024 - May 2026",
      description:
        "Pursuing advanced studies in software engineering with focus on AI/ML, distributed systems, and cloud architecture.",
      highlights: [
        "Specialization in AI and Cloud Computing",
        "Advanced coursework in Distributed Systems",
        "Research in RAG pipelines and LLM optimization",
      ],
      bgImage: "/sjsu.png",
    }
  ];

  const certifications = [
    {
      title: "Runner-up at LLM x Law Hackathon",
      issuer: "Stanford Law School",
      description: "Recognized for innovative legal tech application using large language models",
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "Udemy",
      description: "Comprehensive certification in cloud computing fundamentals",
    },
    {
      title: "Elite+ Silver Certificate - Internet of Things (IoT)",
      issuer: "NPTEL",
      description: "Advanced certification in IoT technologies and applications",
    },
    {
      title: "Elite Certificate - Cloud Computing",
      issuer: "NPTEL",
      description: "Certification in cloud computing technologies and best practices",
    },
  ];

  return (
    <section id="education" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Academic background and professional achievements
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl mb-8 flex items-center gap-3"
          >
            <GraduationCap className="text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Academic Degrees
            </span>
          </motion.h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative bg-white/5 border border-cyan-400/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-400/40 transition-all group overflow-hidden"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300 brightness-110"
                  style={{
                    backgroundImage: `url(${edu.bgImage})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
                <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-2xl mb-2 group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-white/80 mb-1">{edu.institution}</p>
                    <p className="text-white/60">{edu.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-400 font-mono text-sm">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <p className="text-white/70 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-white/60">{highlight}</span>
                    </div>
                  ))}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl mb-8 flex items-center gap-3"
          >
            <Award className="text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative bg-white/5 border border-purple-400/20 rounded-xl p-6 backdrop-blur-sm hover:border-purple-400/40 transition-all group overflow-hidden"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300 brightness-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
                <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-400/10 rounded-lg group-hover:bg-purple-400/20 transition-colors">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg mb-1 group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-white/60 mb-2 font-mono">{cert.issuer}</p>
                    <p className="text-sm text-white/50">{cert.description}</p>
                  </div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
