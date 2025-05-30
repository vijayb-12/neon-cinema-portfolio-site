
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const profiles = [
  {
    name: "GitHub",
    username: "@yourusername",
    stats: "500+ repos, 2k+ stars",
    color: "from-gray-600 to-gray-800",
    icon: "💻",
  },
  {
    name: "LeetCode",
    username: "yourusername",
    stats: "1500+ problems solved",
    color: "from-orange-500 to-yellow-500",
    icon: "🧩",
  },
  {
    name: "HackerRank",
    username: "yourusername",
    stats: "Gold badge, 5⭐ rating",
    color: "from-green-500 to-emerald-500",
    icon: "🏆",
  },
  {
    name: "Codeforces",
    username: "yourusername",
    stats: "Expert rating 1600+",
    color: "from-blue-500 to-cyan-500",
    icon: "⚡",
  },
];

const socialLinks = [
  { name: "LinkedIn", icon: "💼", color: "from-blue-600 to-blue-700" },
  { name: "Instagram", icon: "📸", color: "from-pink-500 to-purple-500" },
  { name: "Twitter", icon: "🐦", color: "from-blue-400 to-cyan-400" },
  { name: "YouTube", icon: "📺", color: "from-red-500 to-red-600" },
];

const CodingProfiles = () => {
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
              Coding Profiles
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 text-center mb-16"
          >
            Connect with me across different coding platforms
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group p-6 bg-gray-900/30 backdrop-blur-lg rounded-3xl border border-gray-700/50 cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="text-4xl mb-4"
                  >
                    {profile.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {profile.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-2">{profile.username}</p>
                  <p className="text-gray-300 text-sm">{profile.stats}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Social Links</h2>
            <div className="flex justify-center flex-wrap gap-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {social.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default CodingProfiles;
