import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";

const HomePage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const words = [
    "Full-Stack Developer",
    "React.js Specialist",
    "UI/UX Engineer",
    "Web Architect",
  ];
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const delayBetweenWords = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting]);

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
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`font-medium text-lg mb-4 tracking-wider transition-colors duration-700 dark:text-cyan-400  text-blue-600`}
          >
            WELCOME TO MY DIGITAL SPACE
          </motion.p>

          <h1
            className={`text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-colors duration-700 dark:text-white text-slate-900
          `}
          >
            Hello, I'm a
            <br />
            <span className="relative inline-block">
              <span
                className={`text-transparent bg-clip-text transition-all duration-700
                dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600
                  bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
              `}
              >
                {currentText}
              </span>
              <motion.span
                className={`inline-block w-1 h-12 sm:h-16 lg:h-20 ml-1 transition-colors duration-700 dark:bg-cyan-400 bg-blue-600
                `}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
          </h1>
        </motion.div>

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

        {/* Tech stack indicators */}
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
      </div>

      {/* Scroll indicator */}
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
    </section>
  );
};

export default HomePage;
