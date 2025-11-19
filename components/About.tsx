import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Award } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { Icon: Code2, value: "10+", label: "Projects Built" },
    { Icon: Rocket, value: "2+", label: "Years Experience" },
    { Icon: Users, value: "85%", label: "Query Accuracy" },
    { Icon: Award, value: "4+", label: "Certifications" },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/70 leading-relaxed">
              Hi, I'm Vinuta Patil, a Master's student in Software Engineering at San Jose
              State University, graduating in May 2026. This summer, I interned at a startup
              where I used RAG, the MERN stack, and AWS to turn their AI idea into a secure,
              working prototype that they could share with investors.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              I enjoy building real-world solutions, especially making systems both functional
              and secure. My expertise spans Python, JavaScript, React, Flask, and modern cloud
              technologies. I was recognized as Runner-up at Stanford Law School's LLM x Law
              Hackathon and hold multiple certifications in Cloud Computing and IoT.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Now, I'm looking for a co-op or full-time role next year where I can bring my
              skills and energy to help build something impactful. I would love to connect for
              more opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              {/* Add your profile image here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="w-32 h-32 text-cyan-400/50" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map(({ Icon, value, label }, index) => (
            <motion.div
              key={label}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm group-hover:border-cyan-400/50 transition-all">
                <Icon className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                <div className="text-3xl mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-sm text-white/60">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}