import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-6 h-10 border-2 rounded-full flex justify-center transition-colors duration-700 dark:border-slate-400 border-slate-600"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-3 rounded-full mt-2 transition-colors duration-700 dark:bg-slate-400 bg-slate-600"
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
