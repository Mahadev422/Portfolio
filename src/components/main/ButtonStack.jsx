import { FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

const ButtonStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8 }}
      className="flex flex-col sm:flex-row gap-6 justify-center items-center"
    >
      <motion.a
        href="https://www.linkedin.com/in/mahadev-kumar-15b2ba320"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="p-4 border-2 font-semibold rounded-full transition-all duration-300 text-lg
              dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-900
              border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
      >
        <FiLinkedin className="h-6 w-6" />
      </motion.a>
    </motion.div>
  );
};

export default ButtonStack;
