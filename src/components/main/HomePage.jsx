import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HomePage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Frontend Developer",
    "Backend Developer",
    "React.js Expert",
    "Full-Stack Developer",
  ];
  const typingSpeed = 150;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

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
    <section className="relative p-4 z-10 flex flex-col">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
      >
        Hi, I'm a <br />
        <span className="text-cyan-400">_{currentText}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl dark:bg-transparent bg-black/50 rounded-xl p-4 mb-8"
      >
        Welcome to my portfolio. I build beautiful and performant web
        experiences using modern tools like React, Tailwind CSS, Framer-motion, Three and Node.js.
      </motion.p>

      {/* 🔘 Call-to-Action Buttons */}
      <div className="flex gap-4 mb-6">
        <a
          href="https://mahadev422.github.io/new-resume/"
          target="_blank"
          className="bg-blue-500 hover:bg-cyan-600 px-6 py-3 rounded-full font-medium transition"
        >
          View Resume
        </a>
        <a
          href="https://github.com/Mahadev422/Portfolio.git"
          className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-400 px-6 py-3 rounded-full font-medium transition"
        >
          Github Code
        </a>
      </div>
    </section>
  );
};

export default HomePage;
