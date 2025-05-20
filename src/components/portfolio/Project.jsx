import { motion, scale } from "framer-motion";


const Project = () => {

  const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Full-featured online store with product catalog, cart, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Tailwindcss", "Framer-motion", "React-icons"],
    image: "/Portfolio/project.png",
    demoUrl: "https://mahadev422.github.io/e-commerce/",
    codeUrl: "https://github.com/Mahadev422/e-commerce.git",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates and team features.",
    tech: ["React", "Firebase", "Material UI", "Redux"],
    image: "/Portfolio/project.png",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "3D Computer Setup",
    description:
      "3D computer setup with keyboard, mouse, cpu, monitor, chair and table.",
    tech: ["React.js", "React-three", "Drei", "Fiber", "Tailwindcss"],
    image: "/Portfolio/project/computer-set.png",
    demoUrl: "https://mahadev422.github.io/computer-set/",
    codeUrl: "https://github.com/Mahadev422/computer-set.git",
  },
];

  return (
    <section id="projects" className="py-10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                My <span className="text-cyan-400">Projects</span>
              </h2>
              <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                Here are some of my recent projects. Each one was built to solve
                a specific problem or demonstrate a particular skill set.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="rounded-b-xl border border-gray-700 hover:border-cyan-400/30 transition-all"
                    initial={{ rotateY: 90, opacity: 0 }}
                    whileInView={{ rotateY: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                      delay: index * 0.15,
                    }}
                  >
                    <div className="h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-4 mb-4">
                        {project.tech.map((t) => (
                          <motion.span
                            initial={{scale: 1}}
                            whileHover={{scale: 1.2}}
                            transition={{type: 'spring', stiffness: '500'}}
                            key={t}
                            className="text-xs bg-green-300 px-2 py-1 rounded"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.demoUrl}
                          className="text-blue-500 text-sm font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 3 }}
                        >
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.codeUrl}
                          className="text-sm font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 3 }}
                        >
                          View Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
  )
}

export default Project;
