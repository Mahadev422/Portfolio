import { motion } from 'framer-motion';

const Header = () => {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 h-[50px]"
      >
        <div className="backdrop-blur-md bg-white/30 border-b-1">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-800">
              Mahadev Portfolio
            </span>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
