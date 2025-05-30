
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const Resume = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-lg rounded-3xl border border-gray-700/50 shadow-2xl"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-24 mx-auto mb-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-lg flex items-center justify-center text-4xl"
              >
                📄
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Download Resume
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 mb-8"
              >
                Get the latest version of my resume with all my skills, experience, and achievements.
              </motion.p>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Download PDF
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-sm text-gray-400"
              >
                Updated December 2024 • PDF • 2.1 MB
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Resume;
