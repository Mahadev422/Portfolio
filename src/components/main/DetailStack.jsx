import { motion } from "framer-motion";
const DetailStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mb-12"
    >
      <p
        className={`text-xl sm:text-2xl leading-relaxed max-w-4xl mx-auto font-light transition-colors duration-700 dark:text-slate-300 text-slate-600
          `}
      >
        Crafting exceptional digital experiences through innovative web
        development. Specializing in modern technologies including{" "}
        <span
          className="font-medium transition-colors duration-700 dark:text-cyan-400 text-blue-600
            "
        >
          React
        </span>
        ,{" "}
        <span
          className="font-medium transition-colors duration-700 dark:text-cyan-400 text-blue-600
            "
        >
          Node.js
        </span>
        , and{" "}
        <span
          className="font-medium transition-colors duration-700 dark:text-cyan-400 text-blue-600
            "
        >
          Three.js
        </span>{" "}
        to bring ideas to life.
      </p>
    </motion.div>
  );
};

export default DetailStack;
