import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Radha', 'Guddy', 'Shivani', 'Bharti'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
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
      } else if (isDeleting && currentText === '') {
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
    <div className="min-h-screen trnasparent backdrop-blur-xs" >
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              The Ultimate Resource for <br />
              <span className="text-indigo-600 relative ">
                _{currentText}
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="absolute -right-2 w-1 h-12 bg-indigo-600"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Accelerate your development workflow with our curated collection of 
              components, templates, and best practices.
            </motion.p>
          </div>
        </div>

        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-indigo-400 filter blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-400 filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-blue-400 filter blur-3xl opacity-30"></div>
        </motion.div>
      </section>
      
    </div>
  );
};

export default HomePage;