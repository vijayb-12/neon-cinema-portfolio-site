
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const CallToAction = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(139, 92, 246, 0.4)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative inline-block mb-8"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 50px rgba(59, 130, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Hire Me Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Build
            </span>
            <br />
            <span className="text-white">Something Amazing?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 leading-relaxed"
          >
            Let's collaborate and create cutting-edge digital experiences that captivate your audience.
            From concept to deployment, I'll bring your vision to life with precision and creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { title: "Fast Delivery", desc: "Quick turnaround without compromising quality" },
              { title: "Modern Tech", desc: "Latest frameworks and best practices" },
              { title: "Full Support", desc: "Ongoing maintenance and updates" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gray-900/30 backdrop-blur-lg rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default CallToAction;
