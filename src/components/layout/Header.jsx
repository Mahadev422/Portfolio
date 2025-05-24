import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Icons from react-icons

const Header = () => {
  const [isDark, setIsDark] = useState(() =>
    localStorage.theme === 'dark' ||
    (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');   
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 h-[50px]"
    >
      <div className="backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-300 dark:border-gray-700">
        <div className="mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            Mahadev Portfolio
          </span>

          <button
            onClick={() => setIsDark(!isDark)}
            className="text-xl text-gray-800 dark:text-yellow-300 transition hover:scale-[1.2] px-3"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
