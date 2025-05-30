
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const skills = [
  { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
  { name: "Three.js", level: 90, color: "from-green-400 to-green-600" },
  { name: "TypeScript", level: 88, color: "from-blue-500 to-indigo-600" },
  { name: "Node.js", level: 85, color: "from-green-500 to-emerald-600" },
  { name: "Python", level: 82, color: "from-yellow-400 to-orange-500" },
  { name: "PostgreSQL", level: 80, color: "from-blue-600 to-purple-600" },
];

const achievements = [
  {
    title: "Published Research Paper",
    description: "Machine Learning optimization techniques in web development",
    icon: "📄",
  },
  {
    title: "Award Winner",
    description: "Best Innovation Award at Tech Conference 2024",
    icon: "🏆",
  },
  {
    title: "Open Source",
    description: "100+ contributions to popular GitHub repositories",
    icon: "💻",
  },
];

const Skills = () => {
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
            className="text-5xl lg:text-6xl font-bold text-center mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Technical Skills</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Achievements</h2>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="p-6 bg-gray-900/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="text-3xl"
                      >
                        {achievement.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-300">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Skills;
