
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    title: "3D Portfolio Website",
    description: "Interactive portfolio with Three.js and Framer Motion",
    tech: ["React", "Three.js", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time features",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Dashboard",
    description: "Machine learning dashboard with real-time analytics",
    tech: ["Python", "React", "TensorFlow"],
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application",
    tech: ["React Native", "Firebase", "Redux"],
    color: "from-orange-500 to-red-500",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold text-center mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 text-center mb-16"
          >
            Showcase of my latest work and creative experiments
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                }}
                className="group relative p-6 bg-gray-900/30 backdrop-blur-lg rounded-3xl border border-gray-700/50 overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center text-2xl`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    💻
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl font-semibold text-blue-400 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                  >
                    View Project
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Projects;
