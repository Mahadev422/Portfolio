import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Typing = () => {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-8"
    >
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
  );
};

export default Typing;
