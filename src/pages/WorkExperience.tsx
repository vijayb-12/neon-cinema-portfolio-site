
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const workExperience = [
  {
    company: "Tech Solutions Inc.",
    position: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting complex systems.",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
  },
  {
    company: "Digital Innovations Co.",
    position: "Frontend Developer",
    period: "2020 - 2022",
    description: "Developed responsive web interfaces and implemented interactive user experiences. Collaborated with design teams to create pixel-perfect implementations.",
    technologies: ["React", "JavaScript", "CSS", "Three.js", "Git"],
  },
  {
    company: "StartupTech",
    position: "Junior Developer",
    period: "2019 - 2020",
    description: "Built web applications from scratch and maintained existing codebases. Gained experience in full-stack development and agile methodologies.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Django"],
  },
];

const WorkExperience = () => {
  return (
    <PageTransition>
      <div className="min-h-screen px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold text-center mb-8"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 text-center mb-16"
          >
            My professional journey and career highlights
          </motion.p>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 bg-gray-900/30 backdrop-blur-lg rounded-3xl border border-gray-700/50"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {job.position}
                    </h2>
                    <h3 className="text-xl text-blue-400 mb-2">
                      {job.company}
                    </h3>
                  </div>
                  <span className="text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                    {job.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default WorkExperience;
