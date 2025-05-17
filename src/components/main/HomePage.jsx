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
    <div className="relative min-h-screen text-white w-full">
      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/Portfolio/land_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/8 z-0" />

      {/* 🎯 Hero Section */}
      <section className="relative p-10 z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl backdrop-blur sm:text-5xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm a <br />
          <span className="text-cyan-400 relative">_{currentText}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-gray-200 max-w-xl mx-auto mb-8"
        >
          Welcome to my portfolio. I build beautiful and performant web
          experiences using modern tools like React, Tailwind CSS, and Node.js.
        </motion.p>

        {/* 🔘 Call-to-Action Buttons */}
        <div className="flex gap-4 mb-6">
          <a
            href="https://mahadev422.github.io/resume/"
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-400 px-6 py-3 rounded-full font-medium transition"
          >
            Contact Me
          </a>
        </div>

        {/* 🌐 Social Media Icons */}
        <div className="flex space-x-6 mt-4 text-2xl text-cyan-300">
          <a
            href="https://github.com/Mahadev422/Portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
