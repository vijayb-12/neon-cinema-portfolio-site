
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Float } from "@react-three/drei";
import PageTransition from "@/components/PageTransition";

const FloatingIcon = ({ position, color }: { position: [number, number, number], color: string }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingIcon position={[-2, 1, 0]} color="#3b82f6" />
        <FloatingIcon position={[2, -1, 0]} color="#8b5cf6" />
        <FloatingIcon position={[0, 2, -1]} color="#06b6d4" />
        <FloatingIcon position={[-1, -2, 1]} color="#10b981" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
};

const Hero = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Creative
              </span>
              <br />
              <span className="text-white">Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Crafting immersive digital experiences with cutting-edge technology.
              Specializing in React, Three.js, and creative animations that bring ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold transition-all duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:border-blue-400 transition-colors duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">About Me</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Full-stack developer with 5+ years of experience building scalable web applications.
                  Passionate about creating seamless user experiences and pushing the boundaries of web technology.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Three.js", "Node.js", "TypeScript", "Python"].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-96 lg:h-[500px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
            <div className="relative h-full rounded-2xl overflow-hidden border border-gray-700/50 bg-gray-900/30 backdrop-blur-lg">
              <Scene3D />
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Hero;
