import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";

const Project = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-featured online store with product catalog, cart, and payment integration. Built with modern technologies for optimal performance and user experience.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwindcss",
        "Framer-motion",
        "React-icons",
      ],
      image: "/Portfolio/project/e-commerce.png",
      demoUrl:
        "https://shop-ease-git-main-mahadevs-projects-3f2fff3d.vercel.app",
      codeUrl: "https://github.com/Mahadev422/e-commerce.git",
    },
    {
      title: "Stone Paper Scissor",
      description:
        "Interactive game built with vanilla JavaScript featuring smooth animations and responsive design for engaging user experience.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "/Portfolio/project/Stone-paper-scissor.png",
      demoUrl: "https://mahadev422.github.io/stone-paper-scissor/",
      codeUrl: "https://github.com/Mahadev422/stone-paper-scissor.git",
    },
    {
      title: "3D Computer Setup",
      description:
        "Immersive 3D visualization showcasing a complete computer workstation with interactive elements and realistic rendering.",
      tech: ["React.js", "React-three", "Drei", "Fiber", "Tailwindcss"],
      image: "/Portfolio/project/computer-set.png",
      demoUrl: "https://mahadev422.github.io/computer-set/",
      codeUrl: "https://github.com/Mahadev422/computer-set.git",
    },
    {
      title: "Weather App",
      description:
        "Real-time weather application providing current conditions, forecasts, and location-based data with a sleek UI.",
      tech: ["React.js", "React-Icons", "Tailwindcss"],
      image: "/Portfolio/project/weather-app.png",
      demoUrl: "https://mahadev422.github.io/Weather-App/",
      codeUrl: "https://github.com/Mahadev422/Weather-App.git",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section id="projects" className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(56,189,248,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 dark:text-white bg-clip-text">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="dark:text-gray-300  text-lg max-w-3xl mx-auto leading-relaxed">
            A collection of carefully crafted projects showcasing modern web development practices, 
            innovative solutions, and attention to detail. Each project represents a unique challenge 
            and demonstrates specific technical expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className='group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 '
            >
              {/* Featured badge */}
              {project.featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -12 }}
                  animate={{ scale: 1, rotate: -12 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring"}}
                  className="absolute top-4 right-4 z-20 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                >
                  <Zap className="w-3 h-3 inline mr-1" />
                  Featured
                </motion.div>
              )}

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  className="h-full"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                  />
                </motion.div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick action buttons on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-purple-500 hover:bg-purple-400 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-300 text-sm px-3 py-1 rounded-full font-medium hover:border-cyan-400/40 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Interested in working together or want to see more projects?
          </p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;