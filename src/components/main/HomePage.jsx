import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import TechStack from "./TechStack";
import ButtonStack from "./ButtonStack";
import DetailStack from "./DetailStack";
import Typing from "./Typing";

const HomePage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-700">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 transition-all duration-700 dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-900 dark:to-slate-900
      bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      `}
      ></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className={`absolute top-20 left-20 w-32 h-32 rounded-full blur-xl transition-colors duration-700 dark:bg-blue-500 bg-blue-400
          `}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-20 w-24 h-24 rounded-full blur-xl transition-colors duration-700 dark:bg-cyan-400 bg-indigo-400
          `}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className={`absolute top-1/2 left-1/4 w-16 h-16 rounded-full blur-lg transition-colors duration-700 dark:bg-purple-500 bg-purple-400
          `}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full mt-15 mx-auto px-6 text-center">
        <Typing />
        <DetailStack />

        <ButtonStack />

        {/* Tech stack indicators */}
        <TechStack />
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default HomePage;
