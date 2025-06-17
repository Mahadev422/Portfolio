import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="mt-16 flex flex-wrap justify-center gap-4"
    >
      {["React", "JavaScript", "Node.js", "Three.js", "Tailwind"].map(
        (tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-4 py-2 backdrop-blur-sm border rounded-full text-sm font-medium transition-all duration-300
                dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400
                  bg-white/80 border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600"
          >
            {tech}
          </motion.span>
        )
      )}
    </motion.div>
  );
};

export default TechStack;
