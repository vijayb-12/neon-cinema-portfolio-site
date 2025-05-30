
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const articles = [
  {
    title: "The Future of Web Development with Three.js",
    excerpt: "Exploring how 3D graphics are revolutionizing user experiences...",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    tags: ["Three.js", "WebGL", "Frontend"],
  },
  {
    title: "Optimizing React Performance with Modern Techniques",
    excerpt: "Learn advanced optimization strategies for React applications...",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    tags: ["React", "Performance", "JavaScript"],
  },
  {
    title: "Building Immersive Animations with Framer Motion",
    excerpt: "Create stunning animations that captivate your users...",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    tags: ["Animation", "Framer Motion", "UX"],
  },
];

const Articles = () => {
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
              Featured Articles
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 text-center mb-16"
          >
            Insights, tutorials, and thoughts on modern web development
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 bg-gray-900/30 backdrop-blur-lg rounded-3xl border border-gray-700/50 cursor-pointer"
              >
                <motion.div
                  className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    📚
                  </div>
                </motion.div>

                <h2 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Articles;
