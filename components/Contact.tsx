import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      Icon: Mail,
      label: "Email",
      value: "vinuta.patil@sjsu.edu",
      href: "mailto:vinuta.patil@sjsu.edu",
    },
    {
      Icon: Phone,
      label: "Phone",
      value: "+1 (469) 558-8950",
      href: "tel:+14695588950",
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "San Jose, CA",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-4">Get in Touch</h3>
              <p className="text-white/60 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ Icon, label, value, href }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/30 transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">{label}</div>
                    <div className="text-white">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-xl"
            >
              <p className="text-sm text-white/70 leading-relaxed">
                <span className="text-cyan-400">Pro tip:</span> Include details
                about your project, timeline, and budget for a faster response.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-white/70">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-white/70">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-white/70">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-400/50 resize-none"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="text-white/50 text-sm">
            <p>© 2025 Vinuta Patil. All rights reserved.</p>
            <p className="mt-2">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}