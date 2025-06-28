import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiJavascriptFill
} from "react-icons/ri";
import { SiMongodb, SiFramer } from "react-icons/si";

const TechStack = () => {
  const techStack = [
    { name: "React", icon: FaReact },
    { name: "JavaScript", icon: RiJavascriptFill },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Framer Motion", icon: SiFramer },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },
    { name: "MongoDB", icon: SiMongodb },
  ];

  return (
    <div className="mt-16 overflow-hidden w-full relative">
        <motion.div
          animate={{ x: [0, -100 * techStack.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 5,
              ease: "linear",
            },
          }}
          className="flex gap-6"
        >
          {[...techStack, ...techStack, ...techStack, ...techStack].map(
            (tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.2 + (index % techStack.length) * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.1, y: -3, rotate: 3 }}
                  className='flex items-center gap-3 px-6 py-3 rounded-full whitespace-nowrap
                    border backdrop-blur-sm transition-all duration-300 ease-in-out
                    dark:border-slate-700
                    hover:shadow-xl'
                >
                  <Icon className="w-12 h-12 text-blue-600 dark:text-cyan-400" />
                </motion.div>
              );
            }
          )}
        </motion.div>
    </div>
  );
};

export default TechStack;
